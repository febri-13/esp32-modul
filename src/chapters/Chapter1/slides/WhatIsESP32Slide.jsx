// src/components/slides/WhatIsESP32Slide.jsx
import { Cpu, Wifi, Zap, RotateCcw, BarChart3, ShieldCheck } from 'lucide-react';

export default function WhatIsESP32Slide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-600 text-white mx-auto mb-4 shadow-md">
          <Cpu className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">What is the ESP32?</h1>
        <p className="text-lg text-gray-600 mt-2 italic">
          &ldquo;The Brain of Your Smart Projects&rdquo;
        </p>
      </div>

      {/* Part 1: Definition & Analogy */}
      <div className="mb-8 bg-blue-50 rounded-2xl p-5 md:p-6 border border-blue-200">
        <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5" /> Imagine This...
        </h2>
        <p className="text-gray-700 mb-4">
          Take a computer, shrink it to the size of a biscuit, and use it to control lights, motors, and sensors.
          <br />
          <strong>That’s the ESP32.</strong>
        </p>
        <div className="bg-white rounded-lg p-4 border border-blue-100">
          <p className="italic text-gray-800">
            <span className="font-bold">Analogy:</span> If a robot is a human body, the <span className="text-blue-700">ESP32 is the brain</span>, the wires are the nerves, and the sensors are the eyes and ears.
          </p>
        </div>
      </div>

      {/* Part 2: Why is it Special? */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Why is the ESP32 Special?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Cpu,
              title: "🧠 Brain (CPU)",
              desc: "Processes code at up to 240 MHz — fast enough for real projects."
            },
            {
              icon: Wifi,
              title: "📡 Talk (Wi-Fi + Bluetooth)",
              desc: "Connects to the internet (IoT) or your phone — no extra hardware needed."
            },
            {
              icon: RotateCcw,
              title: "✋ Hands (GPIO Pins)",
              desc: "General Purpose I/O: Turn things on/off and sense the world."
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-emerald-800 mb-1">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}