// src/components/slides/UploadToBoardSlide.jsx
import { Upload, Zap, RotateCcw, ShieldCheck } from 'lucide-react';

export default function UploadToBoardSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-600 text-white mx-auto mb-4 shadow-md">
          <Upload className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Upload to Physical ESP32</h1>
        <p className="text-lg text-gray-600 mt-2">
          Bring your code to life — with real hardware
        </p>
      </div>

      {/* Safety Reminder */}
      <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
        <h3 className="font-bold text-red-800 flex items-center gap-1 mb-1">
          <ShieldCheck className="w-4 h-4" /> ⚠️ Safety First!
        </h3>
        <p className="text-red-700 text-sm">
          🔌 Always <strong>unplug USB before wiring</strong>. Check → Double-check → Then plug in.
        </p>
      </div>

      {/* Step-by-step */}
      <div className="space-y-5 mb-8">
        {[
          {
            num: 1,
            title: "🔌 Connect the Board",
            desc: "Plug the ESP32 into your computer using a USB cable (data-capable).",
            icon: Zap
          },
          {
            num: 2,
            title: "⚙️ Setup Arduino IDE",
            desc: "Tools > Board > DOIT ESP32 DEVKIT V1 (or similar).",
            icon: RotateCcw
          },
          {
            num: 3,
            title: "📡 Select the Port",
            desc: "Tools > Port > Choose your COM port (e.g., COM3, /dev/ttyUSB0).",
            icon: Zap
          },
          {
            num: 4,
            title: "📋 Paste & Verify",
            desc: "Paste the blink code. Click the ✔️ Check button to verify.",
            icon: RotateCcw
          },
          {
            num: 5,
            title: "📤 Upload the Code",
            desc: "Click the ➡️ Upload button (right arrow).",
            icon: Upload
          },
          {
            num: 6,
            title: "🔄 Stuck? Use the BOOT Trick!",
            desc: "If it says “Connecting...”, hold the BOOT button for 2 seconds, then release.",
            icon: RotateCcw,
            highlight: true
          }
        ].map((step, i) => {
          const Icon = step.icon;
          return (
            <div 
              key={i} 
              className={`flex items-start gap-4 p-3 rounded-lg ${
                step.highlight 
                  ? "bg-amber-50 border border-amber-300" 
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${
                step.highlight ? "bg-amber-600" : "bg-amber-600"
              } text-white text-sm font-bold flex items-center justify-center mt-1`}>
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-5 h-5 ${
                    step.highlight ? "text-amber-600" : "text-amber-600"
                  } flex-shrink-0`} />
                  <h3 className="font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Observation */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Zap className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>
            🔵 Look for the <strong>built-in blue LED</strong> (GPIO 2) — it should blink at 1-second intervals.
          </span>
        </div>
      </div>

      {/* Next Step */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
        <p className="text-emerald-800">
          ✅ Success? Try the <strong>Mini Challenge</strong> next: Change <code className="bg-emerald-100 px-1 rounded font-mono">delay(1000)</code> to <code className="bg-emerald-100 px-1 rounded font-mono">delay(100)</code> for “Panic Mode”!
        </p>
      </div>
    </div>
  );
}