// src/components/layout/SlideMenuSidebar.jsx
import { CheckCircle, Circle, X } from 'lucide-react';

export default function SlideMenuSidebar({ 
  slides, 
  currentSlide, 
  completedSlides, 
  onClose, 
  onSelect,
  isOpen 
}) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">All Slides</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm text-blue-100">
            {completedSlides.size} of {slides.length} completed
          </p>
          <div className="mt-3 bg-white bg-opacity-20 rounded-full h-2">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${(completedSlides.size / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Slides List */}
        <div className="overflow-y-auto h-[calc(100%-180px)] p-4">
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect(index);
                  onClose();
                }}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : completedSlides.has(index)
                    ? 'bg-green-50 hover:bg-green-100 text-gray-800 border border-green-200'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200'
                }`}
              >
                {completedSlides.has(index) ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                ) : currentSlide === index ? (
                  <div className="w-5 h-5 flex-shrink-0 rounded-full bg-white" />
                ) : (
                  <Circle className="w-5 h-5 flex-shrink-0 text-gray-400" />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium mb-1 ${
                    currentSlide === index ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    Slide {index + 1}
                  </p>
                  <p className="font-semibold truncate">{slide.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
          <p className="text-xs text-gray-500 text-center">
            Use ← → arrow keys or click slides to navigate
          </p>
        </div>
      </div>
    </>
  );
}