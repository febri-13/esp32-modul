import { Zap, RotateCcw, Hourglass, Lightbulb } from 'lucide-react';

export default function BlinkLogicSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4 lg:p-6 flex flex-col lg:overflow-hidden">
      {/* Header */}
      <div className="text-center mb-4 lg:mb-5">
        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-orange-600 text-white mx-auto mb-2 shadow-md">
          <Lightbulb className="w-6 h-6 lg:w-7 lg:h-7" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">The Blink Logic</h1>
        <p className="text-sm lg:text-base text-gray-600 mt-1">
          &ldquo;Hello World&rdquo; of Electronics
        </p>
      </div>

      {/* Main Content - 2 Columns on Desktop */}
      <div className="flex-grow flex flex-col lg:flex-row gap-4 lg:gap-5 max-w-7xl mx-auto w-full lg:overflow-hidden">
        
        {/* Left Column - Logic Steps */}
        <div className="flex-1 lg:overflow-y-auto">
          {/* Intro */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center mb-4">
            <p className="text-blue-800 italic text-sm lg:text-base">
              Before we write code, let's think like the ESP32.
            </p>
          </div>

          {/* Logic Steps - Numbered Timeline */}
          <div className="space-y-3">
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
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Icon className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <h3 className="font-bold text-gray-800 text-sm lg:text-base">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs lg:text-sm">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Visual Diagram & Code Connection */}
        <div className="lg:w-96 flex flex-col gap-4">
          
          {/* Visual Loop Diagram */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-indigo-700 font-semibold mb-3 flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Visual Flow
            </h3>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-3">
              <div className="text-center text-gray-700 font-mono text-xs">
                <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-semibold">ON</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">→</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded font-semibold">Wait 1s</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">→</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded font-semibold">OFF</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">→</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded font-semibold">Wait 1s</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-300">
                  <span className="inline-flex items-center gap-1 text-xs">
                    <RotateCcw className="w-3 h-3 text-orange-600" />
                    Loop back to <strong>ON</strong> forever!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connection to Code */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-emerald-700 font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Next: The Code
            </h3>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-3">
              <p className="text-emerald-800 text-xs leading-relaxed">
                This sequence translates to:
              </p>
              <div className="mt-2 space-y-1 text-xs font-mono">
                <div className="flex items-center gap-1">
                  <span className="text-emerald-600">→</span>
                  <code className="bg-emerald-100 px-1.5 py-0.5 rounded">digitalWrite()</code>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-600">→</span>
                  <code className="bg-emerald-100 px-1.5 py-0.5 rounded">delay()</code>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-600">→</span>
                  <code className="bg-emerald-100 px-1.5 py-0.5 rounded">digitalWrite()</code>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-600">→</span>
                  <code className="bg-emerald-100 px-1.5 py-0.5 rounded">delay()</code>
                </div>
                <div className="flex items-center gap-1 text-orange-600 font-bold">
                  <RotateCcw className="w-3 h-3" />
                  <span>repeat</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}