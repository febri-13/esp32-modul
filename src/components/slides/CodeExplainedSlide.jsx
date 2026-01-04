// src/components/slides/CodeExplainedSlide.jsx
import { Code, Zap, RotateCcw, Info } from 'lucide-react';

export default function CodeExplainedSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-800 text-white mx-auto mb-4 shadow-md">
          <Code className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">The Blink Code</h1>
        <p className="text-lg text-gray-600 mt-2">
          From logic to C++ — line by line
        </p>
      </div>

      {/* Analogy */}
      <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
        <p className="text-amber-800 italic">
          📖 <strong>Think of code like a recipe:</strong><br />
          <code className="font-mono">setup()</code> = prep work (once),<br />
          <code className="font-mono">loop()</code> = cooking steps (repeat forever).
        </p>
      </div>

      {/* Code Explanation */}
      <div className="space-y-5 mb-8">
        {/* setup() */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 flex items-center gap-1">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">void setup()</code>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded ml-1">Runs ONCE</span>
              </h3>
            </div>
          </div>
          <pre className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto mt-2">
{`pinMode(2, OUTPUT);  // 🧭 Tell ESP32: "GPIO 2 is an OUTPUT"`}
          </pre>
          <p className="text-gray-600 mt-2 text-sm">
            🔹 Like labeling a switch: “This one controls the LED.”
          </p>
        </div>

        {/* loop() */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 flex items-center gap-1">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">void loop()</code>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded ml-1">Runs FOREVER</span>
              </h3>
            </div>
          </div>

          <div className="space-y-3 mt-2">
            <div>
              <pre className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto">
{`digitalWrite(2, HIGH); // 💡 Turn LED ON (3.3V)`}
              </pre>
              <p className="text-gray-600 text-sm mt-1">🔹 Send power to GPIO 2 → LED lights up.</p>
            </div>

            <div>
              <pre className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto">
{`delay(1000);         // ⏱️ Wait 1,000 ms (1 second)`}
              </pre>
              <p className="text-gray-600 text-sm mt-1">🔹 ESP32 pauses — nothing else happens.</p>
            </div>

            <div>
              <pre className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto">
{`digitalWrite(2, LOW);  // 🌑 Turn LED OFF (0V)`}
              </pre>
              <p className="text-gray-600 text-sm mt-1">🔹 Cut power to GPIO 2 → LED turns off.</p>
            </div>

            <div>
              <pre className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto">
{`delay(1000);         // ⏱️ Wait another second`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Key Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-bold text-blue-800 flex items-center gap-1 mb-2">
          <Info className="w-4 h-4" /> Important!
        </h3>
        <ul className="list-disc pl-5 text-blue-800 text-sm space-y-1">
          <li>All code inside <code className="bg-blue-100 px-1 rounded font-mono">loop()</code> repeats endlessly.</li>
          <li><code className="bg-blue-100 px-1 rounded font-mono">HIGH</code> = 3.3V, <code className="bg-blue-100 px-1 rounded font-mono">LOW</code> = 0V (GND).</li>
          <li><code className="bg-blue-100 px-1 rounded font-mono">delay()</code> is in <strong>milliseconds</strong> (1000 ms = 1 second).</li>
        </ul>
      </div>
    </div>
  );
}