// src/components/slides/SavingSlide.jsx
export default function SavingSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="text-center mb-6">
        <div className="text-6xl sm:text-8xl mb-3 sm:mb-4">💾</div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
          Save Your Work!
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {[
          { step: 1, title: "Click File → Save Project", bg: "from-blue-500 to-blue-600" },
          { step: 2, title: "Sign in with Google or email", bg: "from-purple-500 to-purple-600" },
          { step: 3, title: "Name your project", bg: "from-pink-500 to-pink-600" },
          { step: 4, title: "Click Save!", bg: "from-orange-500 to-orange-600" }
        ].map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.bg} text-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md text-center`}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">{item.step}</div>
            <p className="text-sm sm:text-base md:text-lg font-semibold leading-tight">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border-4 border-green-400 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md text-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-3">✅ Project Name Example:</h3>
        <div className="bg-gray-100 p-3 sm:p-4 rounded-lg inline-block">
          <p className="text-lg sm:text-xl md:text-2xl font-mono text-gray-800">Codie_Walk_Level7</p>
        </div>
      </div>

      <div className="bg-blue-100 border-l-6 sm:border-l-8 border-blue-500 p-4 sm:p-5 rounded-r-lg sm:rounded-r-2xl">
        <p className="text-sm sm:text-base md:text-xl text-gray-700">
          📌 <strong>Teacher Tip:</strong> Save after every major change. Rule: <strong>Save → Test → Save again</strong>
        </p>
      </div>
    </div>
  );
}