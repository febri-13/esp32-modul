// src/components/slides/TheStageSlide.jsx
import { Globe } from 'lucide-react'; // hanya jika perlu; kalau tidak, hapus

export default function TheStageSlide() {
  return (
    <div className="h-full flex flex-col justify-start items-center md:justify-center pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        🎬 The Stage
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4">
          <div className="bg-blue-100 border-l-6 sm:border-l-8 border-blue-500 p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-2">What is it?</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              The main <strong>480 × 360 pixel screen</strong> where your story unfolds
            </p>
          </div>

          <div className="bg-purple-100 border-l-6 sm:border-l-8 border-purple-500 p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-2">What happens here?</h3>
            <ul className="text-base sm:text-lg md:text-xl text-gray-700 space-y-1.5">
              <li>• Sprites move and interact</li>
              <li>• Characters talk and act</li>
              <li>• Your story comes alive!</li>
            </ul>
          </div>

          <div className="bg-orange-100 border-l-6 sm:border-l-8 border-orange-500 p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-800 mb-2">Customize it!</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Click <strong>Stage → Backdrops tab</strong> to change background
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl flex items-center">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl sm:text-8xl mb-3 sm:mb-4">🎭</div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600">The Stage</p>
              <p className="text-base sm:text-lg text-gray-500 mt-1.5 sm:mt-2">480 × 360 pixels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}