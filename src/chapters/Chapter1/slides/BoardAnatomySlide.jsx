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

     
    </div>
  );
}