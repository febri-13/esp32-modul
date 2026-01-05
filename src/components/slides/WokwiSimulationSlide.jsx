// src/components/slides/WokwiSimulationSlide.jsx
import { Monitor, Play, Copy, Eye } from 'lucide-react';

export default function WokwiSimulationSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-600 text-white mx-auto mb-4 shadow-md">
          <Monitor className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Wokwi Simulation</h1>
        <p className="text-lg text-gray-600 mt-2">
          Run your first ESP32 program — in your browser!
        </p>
      </div>

      {/* Intro */}
      <div className="mb-6 bg-cyan-50 border border-cyan-200 rounded-xl p-4 text-center">
        <p className="text-cyan-800 italic">
          ✅ No hardware needed. ✅ Safe. ✅ Instant feedback.
        </p>
      </div>

      {/* Step-by-step */}
      <div className="space-y-5 mb-8">
        {[
          {
            num: 1,
            title: "🌐 Go to Wokwi.com",
            desc: "Open your browser and visit",
            url: "https://wokwi.com",
            icon: Monitor
          },
          {
            num: 2,
            title: "🔌 Start a New Project",
            desc: "Click “New Project” → Search for “ESP32” → Select it.",
            icon: Play
          },
          {
            num: 3,
            title: "📋 Paste the Blink Code",
            desc: "Replace the default code in sketch.ino (left panel) with your blink code.",
            icon: Copy
          },
          {
            num: 4,
            title: "▶️ Click Play",
            desc: "Press the green ▶️ button at the top.",
            icon: Play
          },
          {
            num: 5,
            title: "👀 Observe the LED",
            desc: "Look closely at the simulated board. Do you see the tiny blue LED blinking?",
            icon: Eye
          }
        ].map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white text-sm font-bold flex items-center justify-center mt-1">
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.desc}
                  {step.url && (
                    <a 
                      href={step.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="ml-1 text-cyan-700 underline"
                    >
                      {step.url}
                    </a>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Cue */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Eye className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>
            🔵 <strong>Look for this:</strong> A small blue LED near the USB port — it blinks at 1-second intervals.
          </span>
        </div>
      </div>

      {/* Next Step */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
        <p className="text-emerald-800">
          ✅ Success? Now try the <strong>Mini Challenge</strong>: Change <code className="bg-emerald-100 px-1 rounded font-mono">delay(1000)</code> to <code className="bg-emerald-100 px-1 rounded font-mono">delay(200)</code> for “Panic Mode”!
        </p>
      </div>
    </div>
  );
}