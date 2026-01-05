// src/components/slides/FinalMessageSlide.jsx
import { RocketIcon, GraduationCapIcon, SparklesIcon, TrophyIcon } from 'lucide-react';

export default function FinalMessageSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white mb-4">
          <RocketIcon size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Congratulations! 🎉</h1>
        <p className="text-lg text-gray-600 mt-2">
          You’ve just taken your first step into the world of smart devices.
        </p>
      </div>

      {/* Core Message */}
      <div className="max-w-3xl mx-auto w-full bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <div className="text-5xl mb-4">💡</div>
        <h2 className="text-2xl font-bold text-gray-800">
          You didn’t just blink an LED—  
          You commanded a microcontroller to obey your logic.
        </h2>
        <p className="mt-4 text-gray-700">
          That tiny light? It’s the beginning of robots, smart farms, disaster alerts, and solutions for our ummah.
        </p>
      </div>

      {/* Next Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
          <GraduationCapIcon size={28} className="text-blue-600 mb-2" />
          <h3 className="font-bold text-lg">➡️ What’s Next?</h3>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc pl-5">
            <li>Module 2: Control an external LED & button</li>
            <li>Module 3: Read sensors (temperature, light)</li>
            <li>Module 4: Send data to the cloud (IoT!)</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-amber-500">
          <SparklesIcon size={28} className="text-amber-600 mb-2" />
          <h3 className="font-bold text-lg">🛠️ Keep Practicing</h3>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc pl-5">
            <li>Try the WiFi Scanner on real hardware</li>
            <li>Modify the blink speed 10 different ways</li>
            <li>Document your experiments in a lab journal</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-500">
          <TrophyIcon size={28} className="text-purple-600 mb-2" />
          <h3 className="font-bold text-lg">🕌 With Purpose</h3>
          <p className="mt-3 text-gray-700">
            Let every line of code reflect:
            <br />
            <span className="font-semibold">Niyyah</span> (for the benefit of others),  
            <span className="font-semibold">Amanah</span> (responsibility),  
            <span className="font-semibold">Shukr</span> (gratitude for this knowledge).
          </p>
        </div>
      </div>

      {/* Closing Verse + Signature */}
      <div className="mt-10 text-center max-w-3xl mx-auto">
        <blockquote className="text-xl italic text-gray-800 bg-white/70 py-4 px-6 rounded-xl">
          “And prepare against them whatever you are able of power…”  
          <span className="block mt-2 font-bold text-emerald-700">— Q.S. Al-Anfāl 8:60</span>
        </blockquote>
        <p className="mt-6 text-gray-600">
          May your hands build, your mind question, and your heart remain humble.  
          <br />
          <span className="font-semibold">The future isn’t just coming — you’ll help shape it.</span>
        </p>
        <div className="mt-8 text-sm text-gray-500">
          Module 1 Complete ✅ | ESP32 Adventure, Day 1
        </div>
      </div>
    </div>
  );
}