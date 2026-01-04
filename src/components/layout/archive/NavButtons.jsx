// src/components/layout/NavButtons.jsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavButtons({
  onPrev,
  onNext,
  // onMarkComplete,
  currentSlide,
  totalSlides,
  // isCompleted,
}) {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <div className="fixed bottom-4 left-4 flex flex-row items-start gap-4 z-40">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="bg-white bg-opacity-90 backdrop-blur p-4 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-gray-700" />
      </button>

      {/* <button
        onClick={onMarkComplete}
        className={`px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg ${
          isCompleted
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-white bg-opacity-90 backdrop-blur text-gray-700 hover:bg-gray-100'
        }`}
      >
        {isCompleted ? '✓ Completed' : 'Mark Complete'}
      </button> */}

      <button
        onClick={onNext}
        disabled={isLast}
        className="bg-white bg-opacity-90 backdrop-blur p-4 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-gray-700" />
      </button>
    </div>
  );
}