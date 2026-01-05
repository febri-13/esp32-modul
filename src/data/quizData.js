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
  },
  'esp32-coding':{
  id: 'esp32-coding',
  title: 'ESP32 Code Structure',
  description: 'Understand the building blocks of ESP32 programs in Arduino C++.',
  questions: [
    {
      question: "Which function runs only ONCE when the ESP32 powers on or resets?",
      options: [
        "loop()",
        "delay()",
        "setup()",
        "pinMode()"
      ],
      correctAnswer: 2,
      explanation: "`setup()` is for initialization (e.g., pinMode). It runs exactly once."
    },
    {
      question: "What does `pinMode(2, OUTPUT);` do?",
      options: [
        "Reads voltage from pin 2",
        "Configures pin 2 to send signals (e.g., turn on LED)",
        "Starts Wi-Fi on pin 2",
        "Sets pin 2 to input with pull-up resistor"
      ],
      correctAnswer: 1,
      explanation: "`pinMode(pin, OUTPUT)` tells the ESP32 this pin will *control* something (e.g., LED)."
    },
    {
      question: "What will `delay(2000);` do in your code?",
      options: [
        "Pause the program for 2 seconds",
        "Turn the LED on for 2 milliseconds",
        "Reset the board after 2 minutes",
        "Send a signal every 2 cycles"
      ],
      correctAnswer: 0,
      explanation: "`delay(ms)` pauses execution — 2000 ms = 2 seconds."
    },
    {
      question: "To turn an LED ON that’s connected to pin 2, you use:",
      options: [
        "`digitalRead(2, HIGH);`",
        "`digitalWrite(2, LOW);`",
        "`digitalWrite(2, HIGH);`",
        "`analogWrite(2, 255);`"
      ],
      correctAnswer: 2,
      explanation: "`digitalWrite(pin, HIGH)` applies 3.3V to the pin — turning the LED on."
    },
    {
      question: "What happens if you forget to call `pinMode()` for an LED pin?",
      options: [
        "The LED blinks randomly",
        "The program won’t compile",
        "The LED may not turn on reliably (undefined behavior)",
        "Wi-Fi stops working"
      ],
      correctAnswer: 2,
      explanation: "Without `pinMode()`, the pin state is undefined — it might work, or not."
    },
     {
      question: "In Wokwi, where do you paste your ESP32 code?",
      options: [
        "In the circuit diagram area",
        "In the Serial Monitor window",
        "In the left-side code editor (`sketch.ino`)",
        "In the 'Parts' menu"
      ],
      correctAnswer: 2,
      explanation: "Wokwi’s left panel is the code editor — `sketch.ino` is the main file."
    },
    {
      question: "After uploading code to a physical ESP32, how do you see `Serial.println()` output?",
      options: [
        "Open Tools → Serial Plotter",
        "Open Tools → Serial Monitor and set baud rate to 115200",
        "Check the Wokwi simulation tab",
        "Look at the LED blinking pattern"
      ],
      correctAnswer: 1,
      explanation: "Serial Monitor shows text output — baud rate must match `Serial.begin(...)`."
    },
    {
      question: "In Arduino IDE, where do you select the correct ESP32 board model?",
      options: [
        "File → Preferences",
        "Tools → Board",
        "Sketch → Include Library",
        "Edit → Copy for Forum"
      ],
      correctAnswer: 2,
      explanation: "`Tools → Board → ESP32 Arduino → DOIT ESP32 DEVKIT V1` (or similar)."
    },
    {
      question: "What does the green ‘Play’ button do in Wokwi?",
      options: [
        "Uploads code to a real ESP32",
        "Downloads the simulation as a video",
        "Starts the simulation",
        "Opens the Serial Monitor"
      ],
      correctAnswer: 2,
      explanation: "It compiles and runs your code in the simulated ESP32."
    },
    {
      question: "Which tool lets you simulate without owning hardware?",
      options: [
        "Arduino IDE",
        "PlatformIO",
        "Wokwi",
        "VS Code"
      ],
      correctAnswer: 2,
      explanation: "Wokwi is a browser-based simulator — perfect for learning anywhere."
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