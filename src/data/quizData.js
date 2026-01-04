// src/data/quizData.js

export const quizzes = [
  {
    id: 'quiz-interface',
    title: 'Quiz: PictoBlox Interface',
    description: 'Test your knowledge about the PictoBlox interface',
    relatedSlides: [3, 4, 5, 6, 7],
    passingScore: 60, // Percentage
    questions: [
      {
        id: 1,
        question: "What is the size of the Stage in PictoBlox?",
        type: "multiple-choice",
        options: [
          "480 × 360 pixels",
          "640 × 480 pixels",
          "800 × 600 pixels",
          "1024 × 768 pixels"
        ],
        correctAnswer: 0,
        explanation: "The Stage is 480 × 360 pixels where your sprites move, talk, and interact."
      },
      {
        id: 2,
        question: "Which block category is used to start a script?",
        type: "multiple-choice",
        options: [
          "Motion (Orange)",
          "Events (Blue)",
          "Looks (Purple)",
          "Sound (Red)"
        ],
        correctAnswer: 1,
        explanation: "Events blocks (blue) are triggers that start your scripts, like 'when flag clicked' or 'when key pressed'."
      },
      {
        id: 3,
        question: "What does the Sprite List show?",
        type: "multiple-choice",
        options: [
          "Only the background images",
          "All characters and objects in your project",
          "The code blocks available",
          "The programming language options"
        ],
        correctAnswer: 1,
        explanation: "The Sprite List shows all characters and objects (sprites) in your project, like the cat, birds, or any objects you add."
      },
      {
        id: 4,
        question: "Which tab would you use to change how a sprite looks?",
        type: "multiple-choice",
        options: [
          "Code tab",
          "Sounds tab",
          "Costumes tab",
          "Stage tab"
        ],
        correctAnswer: 2,
        explanation: "The Costumes tab contains different visual poses for your sprite, like 'standing' and 'walking' for the cat."
      },
      {
        id: 5,
        question: "What color are Motion blocks?",
        type: "multiple-choice",
        options: [
          "Blue",
          "Purple",
          "Orange",
          "Red"
        ],
        correctAnswer: 2,
        explanation: "Motion blocks are orange and are used to move and rotate sprites in your project."
      }
    ]
  },
  {
    id: 'quiz-coding',
    title: 'Quiz: Coding Codie the Cat',
    description: 'Test your understanding of the Codie walking project',
    relatedSlides: [9, 10, 11, 12],
    passingScore: 60,
    questions: [
      {
        id: 6,
        question: "Why does 'move (-10) steps' make the sprite go left?",
        type: "multiple-choice",
        options: [
          "It's a bug in PictoBlox",
          "Negative numbers move in the opposite direction",
          "It only works for cats",
          "You need to press the shift key"
        ],
        correctAnswer: 1,
        explanation: "Negative values in move blocks reverse the direction. Positive moves right, negative moves left."
      },
      {
        id: 7,
        question: "What does the 'wait (0.1) seconds' block do in the walking script?",
        type: "multiple-choice",
        options: [
          "Makes the sprite move faster",
          "Creates a brief pause for smooth animation",
          "Stops the program",
          "Changes the sprite's color"
        ],
        correctAnswer: 1,
        explanation: "The wait block creates a brief pause so the walking costume stays visible for a moment before returning to standing."
      },
      {
        id: 8,
        question: "Why do we rename costumes from 'costume1' to 'standing'?",
        type: "multiple-choice",
        options: [
          "It makes the program run faster",
          "PictoBlox requires it",
          "Clear names help understand code better",
          "It's just for decoration"
        ],
        correctAnswer: 2,
        explanation: "Clear, descriptive names help you (and others) understand your code later. It's a sign of good coding practice!"
      },
      {
        id: 9,
        question: "Which block makes Codie speak when clicked?",
        type: "multiple-choice",
        options: [
          "when flag clicked",
          "when this sprite clicked",
          "when space key pressed",
          "when I receive message"
        ],
        correctAnswer: 1,
        explanation: "'when this sprite clicked' is an Events block that triggers when you click on the sprite directly."
      },
      {
        id: 10,
        question: "Can one sprite run multiple scripts at the same time?",
        type: "multiple-choice",
        options: [
          "No, only one script per sprite",
          "Yes, sprites can run multiple scripts simultaneously",
          "Only if you press shift",
          "Only the cat sprite can do this"
        ],
        correctAnswer: 1,
        explanation: "Yes! Each sprite can run multiple scripts at once. That's why Codie can walk AND talk at the same time."
      }
    ]
  }
];

// Helper functions
export const getQuizById = (id) => {
  return quizzes.find(quiz => quiz.id === id);
};

export const getTotalQuestions = (quizId) => {
  const quiz = getQuizById(quizId);
  return quiz ? quiz.questions.length : 0;
};

export const calculateScore = (answers, quizId) => {
  const quiz = getQuizById(quizId);
  if (!quiz) return { score: 0, total: 0, percentage: 0 };
  
  let correctCount = 0;
  quiz.questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correctCount++;
    }
  });
  
  const percentage = Math.round((correctCount / quiz.questions.length) * 100);
  
  return {
    score: correctCount,
    total: quiz.questions.length,
    percentage,
    passed: percentage >= quiz.passingScore
  };
};