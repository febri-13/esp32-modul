// src/components/layout/MenuButton.jsx
export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-2 left-2 md:top-6 md:left-6 bg-white bg-opacity-90 backdrop-blur p-2 sm:p-3 rounded-full shadow z-40 hover:bg-gray-100 transition text-gray-700"
      aria-label="Open menu"
    >
      <span className="text-lg sm:text-xl">☰</span>
    </button>
  );
}