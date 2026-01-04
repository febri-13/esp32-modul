// src/components/layout/SlideMenuOverlay.jsx
import { CheckCircle, Circle } from 'lucide-react';

export default function SlideMenuOverlay({ slides, currentSlide, completedSlides, onClose, onSelect }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Navigation Menu</h2>
          <button
            onClick={onClose}
            className="text-4xl text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(index);
                onClose();
              }}
              className={`text-left p-4 rounded-xl transition-all flex items-center gap-4 ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : completedSlides.has(index)
                  ? 'bg-green-100 hover:bg-green-200 text-gray-800'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {completedSlides.has(index) ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 flex-shrink-0" />
              )}
              <div>
                <p className="text-sm opacity-70">Slide {index + 1}</p>
                <p className="font-semibold">{slide.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}