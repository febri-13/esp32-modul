// src/components/slides/PracticeIntroSlide.jsx
export default function PracticeIntroSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="text-6xl sm:text-8xl md:text-9xl mb-4 sm:mb-6 animate-bounce">🐾</div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800">
        Codie the Cat Goes for a Walk
      </h1>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">🎯 Your Mission:</h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Make the cat walk left/right with arrow keys, change costume, and play sound!
        </p>
      </div>
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {[
          { label: "⌨️ Arrow Keys", bg: "bg-blue-100", text: "text-blue-700" },
          { label: "👔 Costumes", bg: "bg-purple-100", text: "text-purple-700" },
          { label: "🔊 Sounds", bg: "bg-pink-100", text: "text-pink-700" }
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.bg} ${item.text} px-4 py-2 sm:px-5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}