// src/components/slides/Step4ClickToSpeakSlide.jsx
import { MousePointerClick } from 'lucide-react';

export default function Step4ClickToSpeakSlide() {
  return (
    <div className="h-full flex flex-col justify-start md:justify-center pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
        <div className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-md">
          4
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center sm:text-left">
          Add Click-to-Speak Feature
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">New Script (Separate!):</h3>
            <div className="space-y-2.5">
              <div className="bg-blue-300 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold">
                when this sprite clicked
              </div>
              <div className="bg-purple-300 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
                say [Hi! I'm Codie 😺] for (2) seconds
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-6 sm:border-l-8 border-yellow-500 p-4 sm:p-5 rounded-r-lg sm:rounded-r-2xl">
            <p className="text-sm sm:text-base text-gray-700">
              💡 <strong>Tip:</strong> Don't attach this to the arrow scripts — keep it separate!
            </p>
          </div>
        </div>

        <div className="bg-white border-4 border-pink-400 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-5 text-center">
            ✨ Try Different Messages!
          </h3>
          
          <div className="space-y-3">
            <div className="bg-pink-100 p-3 sm:p-4 rounded-xl border-2 border-pink-300">
              <p className="text-sm sm:text-base font-mono text-gray-800">
                "Teach me a new trick!"
              </p>
            </div>
            <div className="bg-purple-100 p-3 sm:p-4 rounded-xl border-2 border-purple-300">
              <p className="text-sm sm:text-base font-mono text-gray-800">
                "Race me!"
              </p>
            </div>
            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl border-2 border-blue-300">
              <p className="text-sm sm:text-base font-mono text-gray-800">
                "Let's code together!"
              </p>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 sm:p-5 md:p-6 rounded-xl text-center">
            <p className="text-base sm:text-lg font-bold">
              🖱️ Click Codie — he talks!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}