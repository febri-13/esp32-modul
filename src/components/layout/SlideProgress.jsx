// src/components/layout/SlideProgress.jsx
export default function SlideProgress({ progress }) {
  return (
    <div className="fixed top-0 left-0 h-2 bg-gray-200 z-50 w-full">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}