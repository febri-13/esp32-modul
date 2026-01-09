// src/components/slides/Step2RightArrowSlide.jsx
import { ChevronRight } from 'lucide-react';

export default function Step2RightArrowSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col md:justify-center sm:flex-row items-center gap-3 sm:gap-4 mb-6">
        <div className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-md">
          2
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center sm:text-left">
          Code Right Arrow Movement
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-gray-800 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">The Script:</h3>
          <div className="space-y-2.5">
            <div className="bg-blue-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold">
              when [→ arrow] key pressed
            </div>
            <div className="bg-red-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
              play sound [meow] until done
            </div>
            <div className="bg-purple-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
              switch costume to [walking]
            </div>
            <div className="bg-orange-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
              move (10) steps
            </div>
            <div className="bg-green-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
              wait (0.1) seconds
            </div>
            <div className="bg-purple-400 px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-mono text-sm sm:text-base text-gray-900 font-semibold ml-4 sm:ml-8">
              switch costume to [standing]
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-yellow-100 border-4 border-yellow-400 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-800 mb-3">🔧 Where to find blocks:</h3>
            <div className="space-y-2.5 text-sm sm:text-base text-gray-700">
              <div className="bg-white p-3 sm:p-4 rounded-lg">
                <strong className="text-blue-600">[→ arrow]:</strong> Events → when [key] pressed → dropdown
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg">
                <strong className="text-red-600">play sound:</strong> Sound category
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg">
                <strong className="text-green-600">wait:</strong> Control → change 1 to 0.1
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">✨ What happens:</h3>
            <ol className="space-y-1.5 text-sm sm:text-base">
              <li>1. Press → arrow key</li>
              <li>2. Cat says "meow"</li>
              <li>3. Changes to walking costume</li>
              <li>4. Moves 10 steps right</li>
              <li>5. Brief pause (0.1 sec)</li>
              <li>6. Back to standing costume</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}