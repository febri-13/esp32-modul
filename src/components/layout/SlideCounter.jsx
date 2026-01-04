// src/components/layout/SlideCounter.jsx
export default function SlideCounter({ current, total, progress }) {
  return (
    <div className="fixed top-2 right-2 md:top-6 md:right-6 bg-white bg-opacity-90 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow z-40">
      <p className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1.5">
        {current} / {total}
        <span className="hidden sm:inline text-xs text-blue-600">
          ({Math.round(progress)}%)
        </span>
      </p>
    </div>
  );
}