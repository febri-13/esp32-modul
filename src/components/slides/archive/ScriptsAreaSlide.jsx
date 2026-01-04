// src/components/slides/ScriptsAreaSlide.jsx
import { CheckCircle } from 'lucide-react';

export default function ScriptsAreaSlide() {
  return (
    <div className="h-full md:justify-center flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        📝 The Scripts Area
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">What is it?</h3>
            <p className="text-base sm:text-lg md:text-xl">
              The white workspace where you build your programs
            </p>
          </div>

          <div className="bg-white border-4 border-blue-300 p-5 sm:p-6 rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">How to use:</h3>
            <ul className="text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">1.</span>
                <span><strong>Drag</strong> blocks from the palette</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">2.</span>
                <span><strong>Snap</strong> them together</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">3.</span>
                <span><strong>Run</strong> your program!</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-100 border-l-6 sm:border-l-8 border-purple-500 p-4 sm:p-5 rounded-r-lg sm:rounded-r-2xl">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              ⚡ Each sprite has its <strong>own</strong> scripts — they can act independently!
            </p>
          </div>
        </div>

        <div className="bg-white border-4 border-green-400 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5 text-center">
            🔥 Try It Now!
          </h3>
          
          <div className="space-y-4 bg-gray-50 p-4 sm:p-5 rounded-xl">
            {[
              { step: 1, color: "bg-blue-500", text: "when 🚩 clicked" },
              { step: 2, color: "bg-orange-500", text: "move (10) steps" },
              { step: 3, color: "", text: "Click the cat on Stage" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold ${item.color}`}>
                  {item.step}
                </div>
                <div className={`font-mono text-sm sm:text-base md:text-lg ${item.color ? 'bg-gray-200 px-3 py-2 rounded-lg flex-1' : 'text-gray-700'}`}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 sm:mt-6 bg-green-100 border-2 border-green-400 p-3 sm:p-4 rounded-lg text-center">
            <p className="text-base sm:text-lg md:text-2xl font-bold text-green-800">
              ✅ First Program Complete!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}