// src/components/slides/QuizSlide.jsx
import React, { useEffect } from 'react';
import { useQuiz } from '../utils/useQuiz';
import { 
  CheckCircle, XCircle, ArrowRight, ArrowLeft, 
  RotateCcw, ChevronRight, ChevronLeft 
} from 'lucide-react';

export default function QuizSlide({ quizId }) {
  const {
    quiz,
    currentQuestion,
    answers,
    isComplete,
    results,
    isAnswered,
    progress,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    retakeQuiz,
  } = useQuiz(quizId);

  useEffect(() => {
    return () => { window.quizActive = false; };
  }, []);

  if (!quiz) {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <p className="text-2xl text-gray-600 text-center">
          Quiz tidak ditemukan.<br />
          Periksa ID quiz: <code>{quizId}</code>
        </p>
      </div>
    );
  }

 // 🎉 Result Screen
if (isComplete) {
  const getBadge = (percentage) => {
    if (percentage >= 90) return { emoji: '🏆', title: 'Luar Biasa!', color: 'from-yellow-400 to-orange-500' };
    if (percentage >= 70) return { emoji: '⭐', title: 'Keren Sekali!', color: 'from-blue-400 to-purple-500' };
    if (percentage >= 50) return { emoji: '👍', title: 'Bagus!', color: 'from-green-400 to-blue-500' };
    return { emoji: '💪', title: 'Ayo Coba Lagi!', color: 'from-gray-400 to-gray-600' };
  };

  const badge = getBadge(results.percentage);

  return (
    <div className="h-full flex flex-col justify-center items-center px-4 py-6 overflow-y-auto">
     
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">{badge.title}</h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-4 md:mb-6">Kuis Selesai!</h3>

      {/* Desktop: grid 2 kolom | HP: 1 kolom */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
        {/* Kolom Kiri: Nilai & Badge */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-8xl mb-3 sm:mb-4 items-center animate-bounce">{badge.emoji}</div>
          <div className={`bg-gradient-to-r ${badge.color} text-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md`}>
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg mb-2">Skor Kamu</p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {results.score}/{results.total}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold">{results.percentage}%</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Review Jawaban */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg w-full">
          <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Ulasan Jawaban:</h4>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {quiz.questions.map((question, index) => {
              const userAnswer = answers[index];
              const correct = userAnswer === question.correctAnswer;
              return (
                <div key={question.id} className="flex items-start gap-3 p-3 rounded bg-gray-50 text-sm sm:text-base">
                  {correct ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800">
                      <strong>Q{index + 1}:</strong> {question.question}
                    </p>
                    {!correct && userAnswer !== undefined && (
                      <p className="text-red-600 mt-1 text-sm">
                        ❌ Jawabanmu: <span className="font-mono">{question.options[userAnswer]}</span>
                      </p>
                    )}
                    {correct && (
                      <p className="text-green-600 mt-1 text-sm">
                        ✅ Benar!
                      </p>
                    )}
                    {!correct && (
                      <p className="text-gray-700 mt-1 text-xs sm:text-sm bg-gray-100 p-2 rounded">
                        Penjelasan: {question.explanation}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tombol Navigasi & Retake */}
      <div className="flex items-center justify-center flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full max-w-2xl">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'prev' }))}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-semibold shadow transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Prev Slide
        </button>

        <button
          onClick={retakeQuiz}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow transition"
        >
          <RotateCcw className="w-4 h-4" />
          Retake Quiz
        </button>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'next' }))}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow transition"
        >
          Next Slide
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

  // 📝 Question Screen
  const question = quiz.questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-6 overflow-y-auto">
      {/* Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:justify-center gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{quiz.title}</h2>
          <div className="bg-blue-100 px-4 py-2 rounded-full text-center">
            <p className="text-base md:text-lg font-semibold text-blue-700">
              Soal {currentQuestion + 1} dari {quiz.questions.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="bg-white border-2 md:border-4 border-purple-200 md:border-purple-300 rounded-xl md:rounded-2xl p-5 md:p-6 mb-5 shadow">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                className={`text-left p-4 rounded-lg text-base md:text-lg font-medium transition-all border-2 ${
                  isSelected
                    ? 'bg-blue-100 border-blue-500 text-blue-800'
                    : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold ${
                    isSelected
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-4 border-t border-gray-200">
        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg md:rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          Sebelumnya
        </button>

        <div className="flex gap-3 w-full sm:w-auto">
          {currentQuestion < quiz.questions.length - 1 ? (
            <button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className="flex-1 sm:flex-none px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg md:rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed transition shadow"
            >
              Berikutnya
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1 inline" />
            </button>
          ) : (
            <button
              onClick={submitQuiz}
              disabled={!isAnswered}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg md:rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed transition shadow"
            >
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
              Selesai & Kirim
            </button>
          )}
        </div>
      </div>
    </div>
  );
}