// src/data/quizData.js
export const QUIZZES = {
  'esp32-general': {
    id: 'esp32-general',
    title: 'ESP32 Basics & Safety',
    questions: [
      {
        question: "Which voltage does the ESP32 use for its GPIO pins?",
        options: ["5V", "3.3V", "12V", "1.8V"],
        correctAnswer: 1,
        explanation: "ESP32 uses 3.3V logic. Connecting 5V signals directly can damage the chip."
      },
      {
        question: "What should you do if the Arduino IDE gets stuck at 'Connecting...'?",
        options: [
          "Unplug and replug the USB cable",
          "Hold the BOOT button for ~2 seconds",
          "Press the EN (Reset) button repeatedly",
          "Change the board to 'Arduino Uno'"
        ],
        correctAnswer: 1,
        explanation: "Holding the BOOT button forces the ESP32 into flashing mode."
      },
      {
        question: "Which pins should you avoid using for general I/O on ESP32 DEVKIT V1?",
        options: ["GPIO 0–5", "GPIO 6–11", "GPIO 12–17", "GPIO 32–33"],
        correctAnswer: 1,
        explanation: "GPIO 6–11 are connected to internal SPI flash — using them may crash your program."
      },
      {
        question: "What does 'GND' stand for?",
        options: [
          "Ground; it completes the electrical circuit",
          "General Node Device",
          "Global Network Data",
          "GPIO Neutral Drain"
        ],
        correctAnswer: 0,
        explanation: "GND (Ground) is the 0V reference — essential for current flow."
      },
      {
        question: "Before changing wiring, you should always:",
        options: [
          "Open the Serial Monitor",
          "Unplug the USB cable",
          "Press the EN button",
          "Comment out loop()"
        ],
        correctAnswer: 1,
        explanation: "Unplugging prevents short circuits and protects you and the board."
      }
    ]
  }
};

export const getQuizById = (id) => QUIZZES[id] || null;

export const calculateScore = (answers, quizId) => {
  const quiz = getQuizById(quizId);
  if (!quiz?.questions?.length) return { correct: 0, total: 0, percentage: 0, passed: false };

  let correct = 0;
  quiz.questions.forEach((q, i) => {
    if (answers[i] != null && answers[i] === q.correctAnswer) correct++;
  });

  const total = quiz.questions.length;
  const percentage = Math.round((correct / total) * 100);

  return { correct, total, percentage, passed: percentage >= 60 };
};