// src/components/slides/BoardAnatomySlide.jsx
import { MapPin, Zap, ShieldCheck, Info } from 'lucide-react';

export default function BoardAnatomySlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-600 text-white mx-auto mb-4 shadow-md">
          <MapPin className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Board Anatomy</h1>
        <p className="text-lg text-gray-600 mt-2">
          Know the map before you explore!
        </p>
      </div>

      {/* Part 1: Key Pins */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-teal-600" /> Key Parts of the ESP32
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "🔌 Micro USB Port",
              desc: "Power source & upload cable. Connects to your computer.",
              icon: Zap
            },
            {
              title: "⚡ GPIO Pins",
              desc: "General Purpose I/O (e.g., D2, D4, D5). Can be input (sensor) or output (LED).",
              icon: MapPin
            },
            {
              title: "➖ GND (Ground)",
              desc: "Negative (–) reference point. Always needed to complete a circuit.",
              icon: ShieldCheck
            },
            {
              title: "➕ VIN / 5V",
              desc: "Positive (+) power input (for external power supply).",
              icon: Zap
            },
            {
              title: "🔄 EN (Enable)",
              desc: "Reset button. Press to restart the program.",
              icon: Info
            },
            {
              title: "🔵 Built-in LED",
              desc: "Connected to GPIO 2. Your first “Hello World” output!",
              icon: Zap
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3">
                <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Safety Rules — Full-width card */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-6">
        <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" /> ⚠️ Safety Rules: “No Magic Smoke!”
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-red-800 text-sm md:text-base">
          <li>
            <strong>3.3V Warning:</strong> ESP32 runs on 3.3V — <em>never connect a 5V signal directly</em> to its pins.
          </li>
          <li>
            <strong>No Short Circuits:</strong> Never connect GND directly to 3.3V/VIN — it causes overheating.
          </li>
          <li>
            <strong>Unplug First:</strong> Always disconnect USB before wiring. Double-check → Then power on.
          </li>
          <li>
            <strong>GPIO 34–39:</strong> Input-only pins — cannot be used with <code className="bg-red-100 px-1 rounded">digitalWrite()</code>.
          </li>
        </ul>
      </div>

      {/* Footer Tip */}
      <div className="text-center text-gray-500 text-sm md:text-base bg-gray-50 p-3 rounded-lg border border-gray-200">
        🔍 Tip: Find your board’s pinout online (e.g., “ESP32 DevKit V1 Pinout”) before connecting sensors.
      </div>
    </div>
  );
}