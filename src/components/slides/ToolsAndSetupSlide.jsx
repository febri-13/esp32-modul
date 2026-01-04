// src/components/slides/ToolsAndSetupSlide.jsx
import { Monitor, Code, Play, Upload } from 'lucide-react';

export default function ToolsAndSetupSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white mx-auto mb-4 shadow-md">
          <Monitor className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Tools & Setup</h1>
        <p className="text-lg text-gray-600 mt-2">
          Two ways to learn — with or without hardware
        </p>
      </div>

      {/* Two Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Option A: Wokwi */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-5 flex flex-col h-full">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Play className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-800">A. Wokwi (Simulator)</h2>
              <p className="text-blue-700 text-sm">Browser-based, no hardware needed</p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base flex-grow">
            <li>Go to <a href="https://wokwi.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">wokwi.com</a></li>
            <li>Select <strong>ESP32</strong> from the template list</li>
            <li>Code appears in <code className="bg-blue-100 px-1 rounded">sketch.ino</code> (left panel)</li>
            <li>Click <span className="inline-flex items-center gap-1 font-mono text-blue-800"><Play className="w-3 h-3" /> Play</span> to run</li>
            <li>✅ Safe, instant, and perfect for class</li>
          </ul>
          <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-3 text-sm">
            <strong>💡 Tip:</strong> Look for the tiny <span className="text-blue-900">🔵 blue LED</span> on the simulated board — it blinks!
          </div>
        </div>

        {/* Option B: Arduino IDE */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-5 flex flex-col h-full">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-800">B. Arduino IDE (Physical Board)</h2>
              <p className="text-purple-700 text-sm">For real-world experiments</p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base flex-grow">
            <li>Install <a href="https://www.arduino.cc/en/software" target="_blank" rel="noreferrer" className="text-purple-600 underline">Arduino IDE</a></li>
            <li>Add ESP32 support: File {'>'} Preferences {'>'} Additional Boards URL:<br />
              <code className="bg-purple-100 px-1 rounded break-all">https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</code>
            </li>
            <li>Tools {'>'} Board {'>'} <strong>DOIT ESP32 DEVKIT V1</strong></li>
            <li>Tools {'>'} Port {'>'} Select your COM port</li>
            <li>Click <span className="inline-flex items-center gap-1 font-mono text-purple-800"><Upload className="w-3 h-3" /> Upload</span></li>
          </ul>
          <div className="mt-4 bg-purple-100 border border-purple-300 rounded-lg p-3 text-sm">
            <strong>⚠️ Stuck at "Connecting..."?</strong><br />
            Hold the <strong>BOOT button</strong> for 2 seconds while uploading.
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
        <p className="text-gray-700 font-medium">
          🔄 <strong>Start with Wokwi</strong> to learn the logic → <strong>Then try Arduino IDE</strong> with real hardware.
        </p>
      </div>
    </div>
  );
}