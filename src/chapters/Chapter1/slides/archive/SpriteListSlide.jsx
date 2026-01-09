// src/components/slides/SpriteListSlide.jsx
import { Cat, CheckCircle } from 'lucide-react';

export default function SpriteListSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row md:justify-center items-center gap-3 sm:gap-4 mb-6">
        <Cat className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 flex-shrink-0" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          🐱 Sprite List & Info Panel
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">What is a Sprite?</h3>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Any character or object in your project
            </p>
            <div className="text-4xl sm:text-5xl md:text-6xl mt-3">🐱 🚀 🎈 ⚽ 🦅</div>
          </div>

          <div className="bg-white border-4 border-orange-300 p-5 sm:p-6 rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Default Sprite</h3>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Sprite1</strong> — a friendly cat 🐱
            </p>
          </div>
        </div>

        <div className="bg-white border-4 border-purple-300 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-5">Each Sprite has 3 Tabs:</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 sm:p-5 rounded-lg border-l-6 sm:border-l-8 border-blue-500">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">1. Costumes</h4>
              <p className="text-sm sm:text-base text-gray-700">
                Different visual poses
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Example: cat standing, cat walking
              </p>
            </div>

            <div className="bg-red-100 p-4 sm:p-5 rounded-lg border-l-6 sm:border-l-8 border-red-500">
              <h4 className="text-xl sm:text-2xl font-bold text-red-800 mb-2">2. Sounds</h4>
              <p className="text-sm sm:text-base text-gray-700">
                Audio clips it can play
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Example: meow, pop, footsteps
              </p>
            </div>

            <div className="bg-green-100 p-4 sm:p-5 rounded-lg border-l-6 sm:border-l-8 border-green-500">
              <h4 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">3. Code</h4>
              <p className="text-sm sm:text-base text-gray-700">
                Personal script area
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Build programs for this sprite only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}