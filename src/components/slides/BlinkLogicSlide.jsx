// src/components/slides/BlinkLogicSlide.jsx
import { Zap, RotateCcw, Hourglass, Lightbulb } from 'lucide-react';

export default function BlinkLogicSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-600 text-white mx-auto mb-4 shadow-md">
          <Lightbulb className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">The Blink Logic</h1>
        <p className="text-lg text-gray-600 mt-2">
          &ldquo;Hello World&rdquo; of Electronics
        </p>
      </div>

      {/* Intro */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
        <p className="text-blue-800 italic">
          Before we write code, let’s think like the ESP32.
        </p>
      </div>

      {/* Logic Steps — numbered timeline */}
      <div className="space-y-5 mb-8">
        {[
          {
            num: 1,
            title: "💡 Turn LED ON",
            desc: "Send power to the built-in blue LED (GPIO 2 → HIGH)",
            icon: Zap
          },
          {
            num: 2,
            title: "⏱️ Wait 1 second",
            desc: "Pause everything for 1,000 milliseconds",
            icon: Hourglass
          },
          {
            num: 3,
            title: "🌑 Turn LED OFF",
            desc: "Stop power to the LED (GPIO 2 → LOW)",
            icon: Zap
          },
          {
            num: 4,
            title: "⏱️ Wait 1 second",
            desc: "Pause again for 1,000 milliseconds",
            icon: Hourglass
          },
          {
            num: 5,
            title: "🔁 Repeat Forever",
            desc: "Go back to Step 1 and never stop (unless powered off)",
            icon: RotateCcw
          }
        ].map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center mt-1">
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Loop Diagram (text-based) */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
        <div className="text-center text-gray-700 font-mono text-sm md:text-base">
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">ON</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded">→</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded">Wait 1s</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded">→</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">OFF</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded">→</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded">Wait 1s</span>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center gap-1">
              <RotateCcw className="w-4 h-4 text-orange-600" />
              Then loop back to <strong>ON</strong> — forever!
            </span>
          </div>
        </div>
      </div>

      {/* Connection to Code */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
        <p className="text-emerald-800">
          This exact sequence will be translated into code in the next slide:  
          <code className="ml-1 bg-emerald-100 px-1.5 py-0.5 rounded font-mono text-sm">digitalWrite()</code> → <code className="bg-emerald-100 px-1.5 py-0.5 rounded font-mono text-sm">delay()</code> → <code className="bg-emerald-100 px-1.5 py-0.5 rounded font-mono text-sm">digitalWrite()</code> → <code className="bg-emerald-100 px-1.5 py-0.5 rounded font-mono text-sm">delay()</code> → repeat.
        </p>
      </div>
    </div>
  );
}