Tentu, Pak/Bu Guru. Ini adalah materi lengkap untuk **Bab 2**.

Materi ini dirancang dengan alur: **Konsep Dasar (Input/Output) -> Praktek Output (LED Eksternal) -> Praktek Input (Push Button) -> Menggabungkan Keduanya (Logika If/Else).**

Saya menggunakan pendekatan **`INPUT_PULLUP`** untuk tombol. Ini adalah cara termudah untuk siswa karena **tidak memerlukan resistor tambahan** di rangkaian (memanfaatkan resistor internal ESP32), sehingga rangkaian fisik dan simulasi di Wokwi menjadi jauh lebih sederhana dan tidak ruwet.

Silakan disalin ke dalam file Markdown baru (misalnya: `Module_2_LED_Button.md`).

---

```markdown
# Module 2: Controlling the World (LEDs & Buttons)
**"Inputs, Outputs, and Logic"**

---

## 🎯 Learning Objectives
In this chapter, you will move beyond the built-in LED. You will learn to:
1.  Understand the difference between **Input** and **Output**.
2.  Build a circuit with an **External LED** and a **Resistor**.
3.  Use a **Push Button** to send commands to the ESP32.
4.  Write code using `if` and `else` to control the light with the button.

---

## 1. Input vs. Output: The Concept

To build smart devices, we need two things: Senses (Input) and Actions (Output).

| Type | Direction | Analogy | Examples |
| :--- | :--- | :--- | :--- |
| **OUTPUT** | ESP32 ➔ World | **Mouth/Hands.** The ESP32 talks or acts. | LED (Light), Buzzer (Sound), Motor (Move). |
| **INPUT** | World ➔ ESP32 | **Eyes/Ears.** The ESP32 listens or feels. | Push Button, Temperature Sensor, Motion Sensor. |

> **Key Concept:** > * **`digitalWrite()`** is used for **Outputs** (Turn ON/OFF).
> * **`digitalRead()`** is used for **Inputs** (Check if ON/OFF).

---

## 2. Activity 1: The External LED (Output)

Let's light up a real LED. But wait! We need a bodyguard called a **Resistor**.

### ⚠️ Why do we need a Resistor?
An LED is very fragile. If you give it too much electricity, it will pop (burn out).
* **The Resistor** acts like a bottleneck in a water pipe. It slows down the current so the LED is safe.
* **Value:** We usually use **220 Ohm** or **330 Ohm** resistors for LEDs.

### 🛠️ The Wiring (Schematic)
We will connect an LED to **GPIO 15**.

1.  **ESP32 GND** ➔ **LED Cathode** (Short leg / Flat side)
2.  **ESP32 Pin 15** ➔ **Resistor** ➔ **LED Anode** (Long leg)

*(In Wokwi: Click `+` > Select LED > Select Resistor. Click the Resistor to change value to 220).*

### 💻 The Code (Blink External)
```cpp
const int redLedPin = 15; // We use Pin 15 now

void setup() {
  pinMode(redLedPin, OUTPUT);
}

void loop() {
  digitalWrite(redLedPin, HIGH); // ON
  delay(500);
  digitalWrite(redLedPin, LOW);  // OFF
  delay(500);
}

```

---

## 3. Activity 2: The Push Button (Input)

Now, let's add a button. A button is just a bridge. When you press it, the bridge connects two wires.

### 🧠 The "Pull-Up" Secret

We will use a special mode called `INPUT_PULLUP`.

* Normally, if a wire is not connected, the ESP32 is confused (is it 0 or 1?). This is called "Floating".
* `INPUT_PULLUP` tells the ESP32: *"Keep this pin at HIGH voltage (3.3V) internally, until someone pulls it to Ground."*

**The Logic:**

* **Button NOT Pressed (Open):** Reading is **HIGH (1)**.
* **Button Pressed (Closed):** Connected to GND. Reading is **LOW (0)**.
* *(Yes, it is inverted/opposite!)*

### 🛠️ The Wiring

1. **Button Pin 1 (one side)** ➔ **ESP32 GPIO 4**
2. **Button Pin 2 (other side)** ➔ **ESP32 GND**

*(Note: No external resistor needed for the button! We use the internal one).*

### 💻 The Code (Button Check)

Open the **Serial Monitor** to see this working.

```cpp
const int buttonPin = 4;

void setup() {
  Serial.begin(115200);
  // Important: Use INPUT_PULLUP
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // Read the state of the button
  int buttonState = digitalRead(buttonPin);

  // Print the result
  Serial.print("Button State: ");
  Serial.println(buttonState);
  
  delay(100); // Small delay to make it readable
}

```

**Experiment:** Run this. When you don't press, it says `1`. When you press, it says `0`.

---

## 4. Activity 3: The Smart Switch (Combining IO)

Now, the final mission: **Turn on the LED when the button is pressed.**

### The Logic (If / Else)

We use a conditional statement:

* **IF** the button is pressed (State is LOW)...
* **THEN** turn LED ON.
* **ELSE** (if not pressed)...
* **THEN** turn LED OFF.

### 💻 The Final Code

```cpp
const int ledPin = 15;     // LED on GPIO 15
const int buttonPin = 4;   // Button on GPIO 4

void setup() {
  pinMode(ledPin, OUTPUT);
  // Remember: INPUT_PULLUP implies High when open, Low when pressed
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  // Remember: LOW means pressed because we use Pull-Up
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH); // Turn Light ON
  } else {
    digitalWrite(ledPin, LOW);  // Turn Light OFF
  }
}

```

---

## 🚀 Challenge: The Toggle Switch

Currently, the light is only on **while** you hold the button (Like a doorbell).
Can you change the code so the button acts like a **Light Switch**?

1. Press once: Light stays ON.
2. Press again: Light turns OFF.

*Hint: You will need a new variable to store the state, like `bool isLightOn = false;*`

---

## 📝 Troubleshooting (Help!)

If it doesn't work:

1. **LED backwards?** Check the Anode (+) and Cathode (-). The flat side of the LED is negative.
2. **Wrong Pin?** Check if your code says `15` but your wire is on `13`.
3. **Wokwi:** Did you click the Play button?
4. **Button Logic:** Remember, with `INPUT_PULLUP`, `LOW` means PRESSED.

```

### Penjelasan untuk Guru (Strategi Mengajar Bab ini):

1.  **Analogi Air:** Saat menjelaskan Resistor, analogi "Pipa Air yang dipencet sedikit" sangat efektif agar siswa paham kenapa kita perlu resistor (membatasi arus).
2.  **Input Pullup:** Ini konsep tersulit di bab ini. Jelaskan pelan-pelan bahwa:
    * Tanpa ditekan = Listrik 3.3V (HIGH)
    * Ditekan = Nyambung ke Tanah/Ground (LOW)
    * Jadi logikanya terbalik. Kalau ditekan justru nilainya 0 (LOW).
3.  **Wokwi:** Di Wokwi, siswa harus menambahkan komponen manual.
    * Klik tanda `+` biru.
    * Pilih `LED`, `Resistor`, dan `Pushbutton`.
    * Warna LED dan nilai Resistor bisa diubah dengan mengklik komponen tersebut.

Apakah Anda ingin lanjut ke **Bab 3 (Sensor Suhu DHT22)**?

```