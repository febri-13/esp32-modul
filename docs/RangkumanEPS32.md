# Module 1: Introduction to the ESP32
**"The Brain of Your Smart Projects"**

---

## 🎯 Learning Objectives
By the end of this chapter, you will be able to:
1.  Understand what a **Microcontroller** is.
2.  Identify the main parts of the **ESP32 board**.
3.  Use **Wokwi** to simulate your first program.
4.  Upload a "Blink" program to a physical ESP32 board.

---

## 1. What is the ESP32?

Imagine if you could take a computer, shrink it down to the size of a biscuit, and use it to control lights, motors, and read sensors. That is the **ESP32**.

It is a low-cost, low-power **System on a Chip (SoC)** microcontroller.

### Why is it special?
* 🧠 **It has a Brain (CPU):** It can think and process code.
* 📡 **It can Talk (Wi-Fi/Bluetooth):** It can connect to the internet (IoT) or your phone.
* ✋ **It has Hands (GPIO Pins):** It can turn things on/off and sense the world around it.

> **Analogy:** If a robot is a human body, the **ESP32** is the brain. The wires are the nerves, and the sensors are the eyes and ears.

---

## 2. Anatomy of the Board (The Hardware)

Before we code, we need to know the map of the board. The metal legs sticking out of the board are called **Pins**.

*(Insert an image of ESP32 Pinout here)*

### Key Pins to Remember:
1.  **Micro USB Port:** Used to power the board and send code from your computer.
2.  **GPIO (General Purpose Input/Output):** Pins like D2, D4, D5. We can program these to be **Inputs** (reading a switch) or **Outputs** (turning on an LED).
3.  **GND (Ground):** The negative (-) connection.
4.  **VIN / 5V:** The positive (+) power input.
5.  **EN (Enable):** Like a restart button.

---

## 3. The Tools We Will Use

We will use two methods to learn. If you don't have the hardware with you, you can always simulate!

### A. The Simulator: Wokwi
**Wokwi** is a free online simulator. It lets you connect wires and write code in your browser without breaking any real parts.
* **Website:** [https://wokwi.com](https://wokwi.com)

### B. The Code Editor (IDE)
To talk to the ESP32, we use a programming language called **C++**. We usually type this into the **Arduino IDE** software.

---

## 4. Activity 1: The "Hello World" of Electronics

In programming, the first thing you learn is printing "Hello World." In electronics, the first thing we learn is **Blinking an LED**.

### Step 1: The Logic
We want the ESP32 to:
1.  Turn the internal blue Light (LED) **ON**.
2.  Wait for 1 second.
3.  Turn the internal blue Light (LED) **OFF**.
4.  Wait for 1 second.
5.  Repeat forever.

### Step 2: The Code
Copy this code below. Do not worry if you don't understand every line yet.

```
// The Built-in LED is usually connected to GPIO pin 2 on the ESP32
const int ledPin = 2; 

void setup() {
  // This runs once when you turn the board on
  // We tell the ESP32 that pin 2 is an OUTPUT (sending power out)
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // This runs continuously forever
  digitalWrite(ledPin, HIGH);  // Turn the LED ON (HIGH voltage)
  delay(1000);                 // Wait for 1000 milliseconds (1 second)
  digitalWrite(ledPin, LOW);   // Turn the LED OFF (LOW voltage)
  delay(1000);                 // Wait for 1000 milliseconds (1 second)
}
```

## 5. Lab Practice
### 🅰 Option A: Using Wokwi (Simulation)

* Open Wokwi.com.
* Select ESP32.
* You will see the board on the right and the code editor on the left.
* Paste the code above into sketch.ino.
* Click the green Play Button.
* Observation: Look closely at the board. Do you see the tiny blue light blinking?

### 🅱 Option B: Using Physical ESP32

* Connect your ESP32 to your computer using the USB cable.
* Open Arduino IDE.
* Select your Board: Tools > Board > DOIT ESP32 DEVKIT V1 (or similar).
* Select your Port: Tools > Port > COM...
* Paste the code.
* Click the Arrow Icon (Upload).
> Note: If it gets stuck at "Connecting...", hold the BOOT button on the ESP32 for 2 seconds.

## 6. Understanding the Code

| Function | Description | Real Life Example |
| :--- | :--- | :--- |
| `void setup()` | Runs **once** when the device starts. Used for settings. | Like packing your bag before school. You only do it once in the morning. |
| `void loop()` | Runs **forever** in a circle. Used for the main action. | Like breathing or blinking your eyes. You keep doing it all day. |

* pinMode(pin, mode): Configures the pin. Is it an Input or Output?
* digitalWrite(pin, value): Sends electricity (HIGH) or stops it (LOW).
* delay(ms): Pauses the program. 1000ms = 1 second.

## 🚀 Mini Challenge

Now that you have the light blinking, try to modify the code to solve these challenges:

1. The Panic Mode: Make the LED blink very fast (like a police car).
	* Hint: Change the number 1000 to a smaller number like 100 or 200.

2. The Heartbeat: Make a heartbeat pattern (On-Off-On... Long pause).

Question to think about: If you change delay(1000) to delay(5000), how many seconds will the light stay on?


## ⚠️ Important: Safety Rules!
Before we touch the wires, we must follow the **"No Magic Smoke"** rules. Electronics run on smoke; if you let the smoke out, it stops working!

1.  **Voltage Warning (3.3V):**
    * Most Arduinos use 5 Volts.
    * **ESP32 uses 3.3 Volts.**
    * *Rule:* Never connect a 5V sensor signal directly to an ESP32 pin, or you might fry the brain!
2.  **Short Circuits:**
    * Never touch the **GND** (Ground) wire directly to the **3.3V** or **VIN** wire. This creates a short circuit and gets very hot.
3.  **Unplug First:**
    * Always unplug the USB cable before changing wires. Change wiring -> Check again -> Plug in.

---

## ⚡ ESP32 vs. Arduino Uno
Why are we learning ESP32? Let's compare it to the famous Arduino Uno.

| Feature | Arduino Uno | ESP32 | Winner? |
| :--- | :--- | :--- | :--- |
| **Brain Speed** | 16 MHz (Slow) | 240 MHz (Fast!) | 🏆 **ESP32** |
| **Wi-Fi** | No | **Yes** | 🏆 **ESP32** |
| **Bluetooth** | No | **Yes** | 🏆 **ESP32** |
| **Memory (Flash)** | 32 KB | 4000 KB (4MB) | 🏆 **ESP32** |
| **Voltage** | 5 Volts | 3.3 Volts | 🤝 Tie |

> **Conclusion:** The Arduino Uno is strong and simple, but the **ESP32 is faster and smarter** because it can connect to the Internet.

---

## 📡 Bonus Activity: The WiFi Scanner
Let's prove that the ESP32 can "talk" wirelessly. We will write a code to search for all WiFi networks in your classroom.

### The Code
Copy and upload this code. Open the **Serial Monitor** (Magnifying glass icon) to see the results.

```cpp
#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  
  // Set WiFi to Station mode (like a phone)
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done. Ready to scan!");
}

void loop() {
  Serial.println("Scanning for WiFi networks...");

  // WiFi.scanNetworks returns the number of networks found
  int n = WiFi.scanNetworks();
  
  if (n == 0) {
    Serial.println("No networks found.");
  } else {
    Serial.print(n);
    Serial.println(" networks found!");
    
    // Print the name of each network
    for (int i = 0; i < n; ++i) {
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i)); // Network Name
      Serial.print(" (Signal: ");
      Serial.print(WiFi.RSSI(i)); // Signal Strength
      Serial.println(")");
      delay(10);
    }
  }
  Serial.println("");
  
  // Wait 5 seconds before scanning again
  delay(5000);
} 
```

Instruction:

1. Upload the code.
2. Open Serial Monitor (Tools > Serial Monitor).
3. Set the speed (bottom right) to 115200 baud.
4. Challenge: Can you find the School's WiFi name in the list? Which one has the strongest signal (number closest to 0)?


---

### Cara Menyelipkan Materi Ini:

1.  Sisipkan bagian **"Safety Rules"** setelah bagian **"Anatomy of the Board"**.
2.  Sisipkan bagian **"ESP32 vs Arduino"** setelah bagian **"What is ESP32?"**.
3.  Sisipkan **"Bonus Activity: WiFi Scanner"** di paling akhir bab sebagai materi pengayaan