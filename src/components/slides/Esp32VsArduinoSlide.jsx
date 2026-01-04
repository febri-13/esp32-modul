// src/components/slides/Esp32VsArduinoSlide.jsx
import { BarChart3, ShieldCheck, Zap, Bluetooth } from 'lucide-react';

export default function Esp32VsArduinoSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600 text-white mx-auto mb-4 shadow-md">
          <BarChart3 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">ESP32 vs Arduino Uno</h1>
        <p className="text-lg text-gray-600 mt-2">
          Why choose ESP32 for modern projects?
        </p>
      </div>

      {/* Two-column layout: Table (left) | Notes (right, full height) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left: Comparison Table */}
        <div className="flex-1 lg:max-w-[65%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            Feature Comparison
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100">
                  <th className="border border-gray-300 px-3 py-2 font-bold text-purple-800 whitespace-nowrap text-left">Feature</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-purple-800 whitespace-nowrap text-center">Arduino Uno</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-purple-800 whitespace-nowrap text-center">ESP32</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-purple-800 whitespace-nowrap text-center">Winner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "🧠 CPU Speed", uno: "16 MHz", esp: "240 MHz", winner: "🏆 ESP32" },
                  { feature: "📶 Wi-Fi", uno: "❌ No", esp: "✅ Yes", winner: "🏆 ESP32" },
                  { feature: "uetooth", uno: "❌ No", esp: "✅ Yes", winner: "🏆 ESP32" },
                  { feature: "💾 Flash Memory", uno: "32 KB", esp: "~4,000 KB", winner: "🏆 ESP32" },
                  { feature: "⚡ Voltage", uno: "5V", esp: "3.3V", winner: "⚠️ Caution" },
                  { feature: "🔌 Digital I/O", uno: "14", esp: "Up to 34", winner: "🏆 ESP32" },
                  { feature: "📈 Analog Input", uno: "6 (A0–A5)", esp: "Up to 18 (ADC)", winner: "🏆 ESP32" },
                  { feature: "🎯 Analog Output", uno: "PWM only", esp: "2 DAC + PWM", winner: "🏆 ESP32" },
                  { feature: "🔄 Interfaces", uno: "1× each", esp: "2× SPI, 2× I²C, 3× UART", winner: "🏆 ESP32" }
                ].map((row, i) => {
                  const isBluetooth = row.feature.includes('uetooth');
                  return (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700 text-sm md:text-base">
                        {isBluetooth ? (
                          <span className="flex items-center gap-1">
                            <Bluetooth className="w-4 h-4 text-blue-600" />
                            Bluetooth
                          </span>
                        ) : row.feature}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-center text-gray-700 text-sm md:text-base">{row.uno}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center text-gray-700 text-sm md:text-base">{row.esp}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold text-gray-800 text-sm md:text-base">{row.winner}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Full-height Important Notes */}
        <div className="lg:w-[40%] md:mt-12 flex flex-col gap-6">
          {/* Important Pin Notes — now full height */}
          <div className="flex-1 bg-amber-50 border border-amber-300 rounded-xl p-5 shadow-sm flex flex-col">
            <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Important Pin Notes
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-amber-800 text-sm md:text-base flex-grow">
              <li>
                <strong>Arduino:</strong> Has dedicated analog pins (A0–A5).
              </li>
              <li>
                <strong>ESP32:</strong> No "A" pins. Analog input uses <em>ADC on GPIO</em>.
              </li>
              <li>
                Only <strong>GPIO 25 & 26</strong> support true analog <em>output</em> (DAC).
              </li>
              <li className="text-amber-900 font-medium">
                ⚠️ <strong>GPIO 34–39</strong> are <strong>input-only</strong> — no <code className="bg-amber-200 px-1 rounded">digitalWrite()</code>!
              </li>
              <li>
                Always double-check your devkit’s pinout — not all ESP32 boards expose every pin.
              </li>
            </ul>
          </div>

          {/* Conclusion Box — sticks to bottom of right column */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
            <p className="text-purple-800 font-medium text-sm md:text-base">
              ✅ <strong>Arduino Uno</strong>: Simple & robust for starters.<br />
              ✅ <strong>ESP32</strong>: IoT-ready, powerful, and future-proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}