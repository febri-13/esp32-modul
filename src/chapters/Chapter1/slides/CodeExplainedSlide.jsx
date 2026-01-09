import { Code, Zap, RotateCcw, Info, BookOpen } from 'lucide-react';

export default function CodeExplainedSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 p-4 lg:p-6 flex flex-col lg:overflow-hidden">
      
      {/* Main Content - 2 Columns on Desktop */}
      <div className="flex-grow flex flex-col lg:flex-row gap-4 lg:gap-5 max-w-7xl mx-auto w-full lg:overflow-hidden">
        
        {/* Left Column - Header + Code Explanation */}
        <div className="flex-1 lg:overflow-y-auto space-y-4">
          
          {/* Header - Inside Left Column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 text-white mb-2 shadow-md">
              <Code className="w-6 h-6" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">The Blink Code</h1>
            <p className="text-sm lg:text-base text-gray-600 mt-1">
              From logic to C++ — line by line
            </p>
          </div>
          
          {/* setup() */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 lg:p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-7 h-7 bg-gray-800 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 flex items-center gap-1 flex-wrap text-sm lg:text-base">
                  <code className="bg-gray-100 px-2 py-0.5 rounded font-mono">void setup()</code>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">Runs ONCE</span>
                </h3>
              </div>
            </div>
            <pre className="bg-gray-900 text-green-400 text-xs p-2.5 rounded-lg overflow-x-auto mt-2">
{`pinMode(2, OUTPUT);  // 🧭 Tell ESP32: "GPIO 2 is an OUTPUT"`}
            </pre>
            <p className="text-gray-600 mt-2 text-xs">
              🔹 Like labeling a switch: "This one controls the LED."
            </p>
          </div>

          {/* loop() */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 lg:p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-7 h-7 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 flex items-center gap-1 flex-wrap text-sm lg:text-base">
                  <code className="bg-gray-100 px-2 py-0.5 rounded font-mono">void loop()</code>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Runs FOREVER</span>
                </h3>
              </div>
            </div>

            <div className="space-y-2.5 mt-2">
              <div>
                <pre className="bg-gray-900 text-green-400 text-xs p-2.5 rounded-lg overflow-x-auto">
{`digitalWrite(2, HIGH); // 💡 Turn LED ON (3.3V)`}
                </pre>
                <p className="text-gray-600 text-xs mt-1">🔹 Send power to GPIO 2 → LED lights up.</p>
              </div>

              <div>
                <pre className="bg-gray-900 text-green-400 text-xs p-2.5 rounded-lg overflow-x-auto">
{`delay(1000);         // ⏱️ Wait 1,000 ms (1 second)`}
                </pre>
                <p className="text-gray-600 text-xs mt-1">🔹 ESP32 pauses — nothing else happens.</p>
              </div>

              <div>
                <pre className="bg-gray-900 text-green-400 text-xs p-2.5 rounded-lg overflow-x-auto">
{`digitalWrite(2, LOW);  // 🌑 Turn LED OFF (0V)`}
                </pre>
                <p className="text-gray-600 text-xs mt-1">🔹 Cut power to GPIO 2 → LED turns off.</p>
              </div>

              <div>
                <pre className="bg-gray-900 text-green-400 text-xs p-2.5 rounded-lg overflow-x-auto">
{`delay(1000);         // ⏱️ Wait another second`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Analogy & Key Notes ONLY */}
        <div className="lg:w-80 flex flex-col gap-4">
          
          {/* Analogy */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-3 text-amber-700">
              <BookOpen className="w-5 h-5" />
              <h3 className="font-semibold">Code Analogy</h3>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r">
              <p className="text-amber-800 text-xs leading-relaxed">
                📖 <strong>Think of code like a recipe:</strong>
              </p>
              <div className="mt-2 space-y-1.5 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <p className="text-amber-800">
                    <code className="font-mono bg-amber-100 px-1 rounded">setup()</code> = prep work (once)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <p className="text-amber-800">
                    <code className="font-mono bg-amber-100 px-1 rounded">loop()</code> = cooking steps (repeat forever)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Notes */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-3 text-blue-700">
              <Info className="w-5 h-5" />
              <h3 className="font-semibold">Important Notes</h3>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0 mt-0.5">•</span>
                  <span className="text-blue-800">
                    All code inside <code className="bg-blue-100 px-1 rounded font-mono">loop()</code> repeats endlessly.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0 mt-0.5">•</span>
                  <span className="text-blue-800">
                    <code className="bg-blue-100 px-1 rounded font-mono">HIGH</code> = 3.3V, <code className="bg-blue-100 px-1 rounded font-mono">LOW</code> = 0V (GND).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0 mt-0.5">•</span>
                  <span className="text-blue-800">
                    <code className="bg-blue-100 px-1 rounded font-mono">delay()</code> is in <strong>milliseconds</strong> (1000 ms = 1 second).
                  </span>
                </li>
              </ul>
            </div>
          </div>

           {/* Visual Aid - Function Overview */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-3 text-sm">Function Overview</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
                <code className="font-mono font-semibold text-gray-800">pinMode()</code>
                <span className="text-gray-600">→ Set pin mode</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-200">
                <code className="font-mono font-semibold text-green-800">digitalWrite()</code>
                <span className="text-green-700">→ Control pin</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-amber-50 rounded border border-amber-200">
                <code className="font-mono font-semibold text-amber-800">delay()</code>
                <span className="text-amber-700">→ Wait/pause</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

 