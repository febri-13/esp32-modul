// src/components/slides/MiniChallengeSlide.jsx
import { Zap, Heart, Lightbulb, RotateCcw } from 'lucide-react';

export default function MiniChallengeSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-4 px-4 sm:px-6 md:px-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-600 text-white mx-auto mb-4 shadow-md">
          <Zap className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Mini Challenges</h1>
        <p className="text-lg text-gray-600 mt-2">
          Modify the blink — no new parts needed!
        </p>
      </div>

      {/* Challenge 1: Panic Mode */}
      <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-bold text-red-800">🚨 The Panic Mode</h2>
        </div>
        <p className="text-red-700 mb-3">
          Make the LED blink *very fast* — like a police siren!
        </p>
        <div className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto font-mono">
{`digitalWrite(2, HIGH);
delay(100);
digitalWrite(2, LOW);
delay(100);`}
        </div>
        <p className="text-red-700 text-sm mt-2">
          🔁 Change <code className="bg-red-100 px-1 rounded">1000</code> to <code className="bg-red-100 px-1 rounded">100</code> ms → 10x faster!
        </p>
      </div>

      {/* Challenge 2: Heartbeat */}
      <div className="mb-6 bg-pink-50 border border-pink-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-pink-600" />
          <h2 className="text-xl font-bold text-pink-800">❤️ The Heartbeat</h2>
        </div>
        <p className="text-pink-700 mb-3">
          Create a heartbeat rhythm: <em>beat-beat... pause</em>.
        </p>
        <div className="bg-gray-900 text-green-400 text-sm md:text-base p-3 rounded-lg overflow-x-auto font-mono">
{`// beat
digitalWrite(2, HIGH); delay(200);
digitalWrite(2, LOW);  delay(200);
// beat
digitalWrite(2, HIGH); delay(200);
digitalWrite(2, LOW);  delay(500); // longer pause`}
        </div>
        <p className="text-pink-700 text-sm mt-2">
          💡 Try: short ON/OFF ×2, then longer OFF for “rest”.
        </p>
      </div>

      {/* Reflection Question */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 mb-6">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-800">🤔 Think & Predict</h3>
            <p className="text-amber-800 mt-1">
              If you change <code className="bg-amber-100 px-1 rounded font-mono">delay(1000)</code> to <code className="bg-amber-100 px-1 rounded font-mono">delay(5000)</code>, how many seconds will the LED stay **ON**?
            </p>
            <p className="text-amber-900 font-medium mt-1">
              ✅ Answer: <strong>5 seconds</strong> — because <code>delay(5000)</code> = 5000 ms = 5 seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Encouragement */}
      <div className="text-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
        <p className="text-emerald-800 font-medium">
          🔁 Remember: Small changes → big effects.<br />
          You’re not just copying code — you’re <strong>thinking like an engineer</strong>.
        </p>
      </div>
    </div>
  );
}