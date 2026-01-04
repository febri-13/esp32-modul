// src/components/slides/FinalMessageSlide.jsx
export default function FinalMessageSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="text-6xl sm:text-8xl md:text-9xl mb-4 sm:mb-6 animate-bounce">🌟</div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Congratulations!
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        You've Completed Stage 1!
      </h2>
      
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl max-w-2xl w-full mb-6">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          "Coding is about <strong>experimenting</strong>. If something breaks — great! Now you get to fix it. That's how you learn."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { emoji: "✅", title: "Interface Mastered", bg: "bg-blue-100" },
          { emoji: "🎨", title: "First Project Created", bg: "bg-purple-100" },
          { emoji: "🚀", title: "Ready for Stage 2", bg: "bg-pink-100" }
        ].map((item, i) => (
          <div key={i} className={`${item.bg} p-4 sm:p-5 rounded-xl`}>
            <div className="text-3xl sm:text-4xl mb-2">{item.emoji}</div>
            <p className="text-sm sm:text-base font-semibold text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>

      <p className="text-base sm:text-lg text-gray-600">
        Keep exploring and happy coding! 💻✨
      </p>
    </div>
  );
}