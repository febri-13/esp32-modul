// src/components/layout/KeyboardHint.jsx

export default function KeyboardHint() {
  return (
    <div className="hidden md:block fixed bottom-8 right-8 bg-white bg-opacity-90 backdrop-blur px-6 py-3 rounded-full shadow-lg z-40">
      <p className="text-sm text-gray-600">
        Use <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">←</kbd> 
        <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">→</kbd> or 
        <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">ESC</kbd> for menu
      </p>
    </div>
  );
}