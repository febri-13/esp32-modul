// src/components/slides/Step1CostumesSlide.jsx
import { CheckCircle } from 'lucide-react';

export default function Step1CostumesSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 md:justify-center pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
        <div className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-md">
          1
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center sm:text-left">
          Prepare the Cat's Costumes
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4">
          <div className="bg-white border-4 border-blue-300 p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">Steps:</h3>
            <ol className="space-y-3 text-base sm:text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">1</span>
                <span>Click the cat sprite (<strong>Sprite1</strong>)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">2</span>
                <span>Go to the <strong>Costumes tab</strong> (top-right)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">3</span>
                <span>Rename the costumes</span>
              </li>
            </ol>
          </div>

          <div className="bg-blue-100 border-l-6 sm:border-l-8 border-blue-500 p-4 sm:p-5 rounded-r-lg sm:rounded-r-2xl">
            <h4 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">📝 Why rename?</h4>
            <p className="text-sm sm:text-base text-gray-700">
              Clear names help you understand your code later — a sign of a great coder!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
            Rename Costumes:
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 p-4 sm:p-5 rounded-xl backdrop-blur">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-2">
                <span className="text-base sm:text-lg font-mono line-through opacity-80">costume1</span>
                <span className="text-xl">→</span>
                <span className="text-base sm:text-lg font-mono font-bold">standing</span>
              </div>
              <p className="text-xs sm:text-sm opacity-90">The default, standing pose</p>
            </div>

            <div className="bg-white bg-opacity-20 p-4 sm:p-5 rounded-xl backdrop-blur">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-2">
                <span className="text-base sm:text-lg font-mono line-through opacity-80">costume2</span>
                <span className="text-xl">→</span>
                <span className="text-base sm:text-lg font-mono font-bold">walking</span>
              </div>
              <p className="text-xs sm:text-sm opacity-90">The walking animation pose</p>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 bg-white bg-opacity-30 p-3 sm:p-4 rounded-xl text-center">
            <p className="text-sm sm:text-base font-semibold">
              💡 Double-click the name to edit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}