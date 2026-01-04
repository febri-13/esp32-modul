// src/components/utils/useQuiz.js
import { useState, useEffect, useCallback } from 'react';
import { getQuizById, calculateScore } from '../../data/quizData';

export const useQuiz = (quizId) => {
  const quiz = getQuizById(quizId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState(null);

  // Helper functions (pure)
  const getAttemptCount = (id) => {
    const saved = localStorage.getItem(`quiz-${id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.attempts || 0;
    }
    return 0;
  };

  const getQuizHistory = () => {
    const history = localStorage.getItem('quiz-history');
    return history ? JSON.parse(history) : [];
  };

  // 🟢 Submit FINAL quiz (only on last question)
  const submitQuiz = useCallback(() => {
    if (answers[currentQuestion] === undefined) {
      console.warn('[submitQuiz] Last question not answered');
      return;
    }

    const score = calculateScore(answers, quizId);
    setResults(score);
    setIsComplete(true);

    // Save to localStorage
    const quizResult = {
      quizId,
      answers,
      score,
      timestamp: new Date().toISOString(),
      attempts: getAttemptCount(quizId) + 1
    };

    localStorage.setItem(`quiz-${quizId}`, JSON.stringify(quizResult));

    // Save to global history
    const history = getQuizHistory();
    history.push(quizResult);
    localStorage.setItem('quiz-history', JSON.stringify(history));

    // Disable quiz navigation flag
    window.quizActive = false;
  }, [answers, currentQuestion, quizId]);

  // ➡️ Next question
  const nextQuestion = useCallback(() => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      // Optional: auto-scroll
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    }
  }, [currentQuestion, quiz.questions.length]);

  // ⬅️ Previous question
  const previousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    }
  }, [currentQuestion]);

  // ✏️ Select answer (auto-saved)
  const selectAnswer = useCallback((answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  }, [currentQuestion]);

  // 🔄 Retake
  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
    setResults(null);
    window.quizActive = true;
  };

  // 📌 Set quizActive flag for parent navigation control
  useEffect(() => {
    window.quizActive = !isComplete;
    return () => { window.quizActive = false; };
  }, [isComplete]);

  // Derived state
  const isAnswered = answers[currentQuestion] !== undefined;
  const isCorrect = isAnswered && answers[currentQuestion] === quiz.questions[currentQuestion].correctAnswer;
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return {
    quiz,
    currentQuestion,
    answers,
    isComplete,
    results,
    isAnswered,
    isCorrect,
    progress,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    retakeQuiz,
  };
};