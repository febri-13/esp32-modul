// src/components/slides/ReflectionSlide.jsx
export default function ReflectionSlide() {
  return (
    <div className="h-full flex md:justify-center flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-center">
        🧠 Check Your Understanding
      </h2>

      <div className="space-y-4 mb-6">
        {[
          {
            num: 1,
            bg: "from-purple-500 to-pink-500",
            color: "text-purple-700",
            question: "Why does <code className=\"bg-white bg-opacity-30 px-3 py-1 rounded font-mono text-xs sm:text-sm\">move (-10) steps</code> make the sprite go left?"
          },
          {
            num: 2,
            bg: "from-blue-500 to-cyan-500",
            color: "text-blue-700",
            question: "What happens if you remove <code className=\"bg-white bg-opacity-30 px-3 py-1 rounded font-mono text-xs sm:text-sm\">wait (0.1) seconds</code> from the walking script?"
          },
          {
            num: 3,
            bg: "from-orange-500 to-red-500",
            color: "text-orange-700",
            question: "Can one sprite run multiple scripts at once? (e.g., walking + talking) Test it!"
          }
        ].map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${item.bg} text-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className={`bg-white ${item.color} rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0`}>
                {item.num}
              </div>
              <div>
                <p className="text-base sm:text-lg md:text-xl font-semibold"
                   dangerouslySetInnerHTML={{ __html: item.question }}>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-3 sm:p-4 text-center">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold">
          💭 Discuss these with your classmates or teacher!
        </p>
      </div>
    </div>
  );
}