// src/components/slides/ChallengesSlide.jsx
export default function ChallengesSlide() {
  return (
    <div className="h-full flex md:justify-center flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-3 text-center">
        🧪 Try These Extensions!
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 text-center">
        Pick 1–2 to challenge yourself
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {[
          { emoji: "🎨", title: "Change Background", desc: "Click Stage → Backdrops tab → choose blue sky or park", diff: "⭐", bg: "from-pink-400 to-red-500" },
          { emoji: "🦅", title: "Add a Flying Bird", desc: "+ Sprite → pick bird → forever + move (5) + if on edge, bounce", diff: "⭐⭐", bg: "from-blue-400 to-cyan-500" },
          { emoji: "⚖️", title: "Grow on SPACE", desc: "When space pressed → change size (20) → wait (0.5) → change size (-20)", diff: "⭐⭐", bg: "from-purple-400 to-indigo-500" },
          { emoji: "🎵", title: "Record Your Sound", desc: "Sounds tab → + → Record → say \"Step!\" → save as footstep", diff: "⭐", bg: "from-orange-400 to-yellow-500" }
        ].map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.bg} text-white p-4 sm:p-5 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform`}
          >
            <div className="text-4xl sm:text-5xl mb-2">{item.emoji}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-xs sm:text-sm mb-3 leading-relaxed">{item.desc}</p>
            <div className="bg-white bg-opacity-30 px-2.5 py-1.5 rounded text-xs font-semibold">
              Difficulty: {item.diff}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}