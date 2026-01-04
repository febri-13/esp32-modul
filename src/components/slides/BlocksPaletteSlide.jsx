// src/components/slides/BlocksPaletteSlide.jsx
import { CheckCircle } from 'lucide-react';

export default function BlocksPaletteSlide() {
  return (
    <div className="h-full flex flex-col justify-start md:justify-center pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
        🧩 The Blocks Palette
      </h2>
      <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-6">
        Color-coded tools for building your programs
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {[
          {
            title: "Events",
            color: "blue",
            iconBg: "bg-blue-500",
            desc: "Start a script",
            example: "when 🚩 clicked\nwhen [space] key pressed",
            bg: "from-blue-400 to-blue-600"
          },
          {
            title: "Motion",
            color: "orange",
            iconBg: "bg-orange-500",
            desc: "Move & rotate sprites",
            example: "move (10) steps\nturn ↻ (15) degrees",
            bg: "from-orange-400 to-orange-600"
          },
          {
            title: "Looks",
            color: "purple",
            iconBg: "bg-purple-500",
            desc: "Change appearance",
            example: "say [Hello!] for (2) secs\nswitch costume to [walk]",
            bg: "from-purple-400 to-purple-600"
          },
          {
            title: "Sound",
            color: "red",
            iconBg: "bg-red-500",
            desc: "Play audio",
            example: "play sound [meow]\nstop all sounds",
            bg: "from-red-400 to-red-600"
          }
        ].map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.bg} text-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md transform hover:scale-105 transition-transform`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white rounded-full p-2.5 sm:p-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.iconBg} rounded-lg`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-3">{item.desc}</p>
            <div className="bg-black bg-opacity-20 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm md:text-base whitespace-pre-line">
              {item.example}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 bg-yellow-100 border-2 border-yellow-400 p-3 sm:p-4 rounded-lg text-center">
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          💡 Blocks snap together like puzzle pieces — preventing mistakes!
        </p>
      </div>
    </div>
  );
}