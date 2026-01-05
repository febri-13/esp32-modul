import { InfoIcon, AlertTriangleIcon, PlugIcon, BatteryIcon } from 'lucide-react';

export default function BoardAnatomyDetailsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4 flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Anatomy of the ESP32 Board</h1>
        <p className="text-lg text-gray-600 mt-2">
          Know your hardware before you code!
        </p>
      </div>

      {/* Key Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto w-full">
        
        {/* Component 1: Power Ports */}
        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
          <div className="flex items-start gap-3">
            <BatteryIcon size={24} className="text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Power Ports</h3>
              <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>VIN / 5V</strong>: Input power (5V). Safe for external supply.</li>
                <li><strong>3V3</strong>: Output voltage (3.3V). Never connect 5V sensors here!</li>
                <li><strong>GND</strong>: Ground. Always needed for complete circuit.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Component 2: GPIO Pins */}
        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
          <div className="flex items-start gap-3">
            <PlugIcon size={24} className="text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">GPIO Pins</h3>
              <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                <li>Use pins marked <span className="font-semibold text-green-700">Green</span> for most projects.</li>
                <li>Avoid <span className="font-semibold text-red-700">Red</span> pins (GPIO 6–11 — connected to flash).</li>
                <li>GPIO 34–39: Input only (no pull-up/down resistors).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Component 3: Special Pins */}
        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-500">
          <div className="flex items-start gap-3">
            <InfoIcon size={24} className="text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Special Pins</h3>
              <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>EN</strong>: Reset button. Pull to GND to restart.</li>
                <li><strong>BOOT</strong>: Hold while uploading if stuck at “Connecting…”.</li>
                <li><strong>TX/RX</strong> (GPIO 1/3): Used for Serial Monitor — avoid connecting devices during upload.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Component 4: Safety Rules */}
        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500">
          <div className="flex items-start gap-3">
            <AlertTriangleIcon size={24} className="text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Safety First!</h3>
              <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                <li>Never connect 5V signal directly to ESP32 (use logic level shifter).</li>
                <li>Never short GND to 3.3V or VIN — it can damage the chip.</li>
                <li>Always unplug USB before changing wires → Check → Plug in.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Tip */}
      <div className="mt-8 text-center max-w-3xl mx-auto">
        <blockquote className="text-xl italic text-gray-800 border-l-4 border-indigo-500 pl-4 py-2 bg-white/70 rounded-r-lg">
          “The best engineers know their tools — not just how to use them, but how to protect them.”
        </blockquote>
        <p className="mt-4 text-gray-600">
          You’ve now mastered the map. Time to start building! 💡
        </p>
      </div>
    </div>
  );
}