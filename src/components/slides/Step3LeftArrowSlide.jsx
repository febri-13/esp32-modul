// src/components/slides/Step3LeftArrowSlide.jsx
import { ChevronLeft } from 'lucide-react';

export default function Step3LeftArrowSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col md:justify-center sm:flex-row items-center gap-3 sm:gap-4 mb-6">
        <div className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-md">
          3
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center sm:text-left">
          Duplicate for Left Arrow
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white border-4 border-orange-400 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-5">How to Duplicate:</h3>
          <div className="space-y-4">
            <div className="bg-orange-100 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm sm:text-base">1</span>
                <p className="text-base sm:text-lg text-gray-800">Right-click the script</p>
              </div>
            </div>
            <div className="bg-orange-100 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm sm:text-base">2</span>
                <p className="text-base sm:text-lg text-gray-800">Click <strong>"Duplicate"</strong></p>
              </div>
            </div>
            <div className="bg-orange-100 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm sm:text-base">3</span>
                <p className="text-base sm:text-lg text-gray-800">Edit the copy!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-800 rounded-xl md:rounded-2xl p-5 sm:p-6 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Change These Parts:</h3>
            <div className="space-y-2.5">
              <div className="bg-blue-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold">
                when [<span className="text-red-500 font-bold">← arrow</span>] key pressed
              </div>
              <div className="bg-orange-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
                move <span className="bg-red-600 text-white px-2 py-1 rounded text-xs sm:text-sm font-bold">(-10)</span> steps
              </div>
              <p className="text-xs sm:text-sm text-gray-300 ml-4 sm:ml-8">↑ Negative = move left!</p>
            </div>
          </div>

          <div className="bg-green-100 border-4 border-green-400 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">🎯 Test Time!</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-3">Press → and ← arrows</p>
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2">⬅️ 🐱 ➡️</div>
            <p className="text-sm sm:text-base text-green-700 font-bold">
              Codie walks and animates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}