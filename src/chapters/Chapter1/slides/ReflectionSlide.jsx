import { LightbulbIcon, CompassIcon, UsersIcon, HeartIcon } from 'lucide-react';

export default function ReflectionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-600 text-white mb-4">
          <LightbulbIcon size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Reflection</h1>
        <p className="text-lg text-gray-600 mt-2">
          Beyond the Code — Wisdom, Responsibility, and Purpose
        </p>
      </div>

      {/* Reflection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        
        {/* Card 1: Knowledge & Curiosity */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
          <div className="flex items-start gap-3">
            <LightbulbIcon size={24} className="text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Seek Knowledge—Even in Circuits</h3>
              <p className="mt-2 text-gray-700">
                The Prophet ﷺ said: <em>“Seeking knowledge is obligatory upon every Muslim.”* </em> 
                From blinking LEDs to scanning WiFi — each experiment builds iqra’ (reading, understanding, reflecting).
              </p>
              <p className="text-sm text-gray-500 mt-2">*Sunan Ibn Majah 224</p>
            </div>
          </div>
        </div>

        {/* Card 2: Technology & Amanah */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
          <div className="flex items-start gap-3">
            <CompassIcon size={24} className="text-emerald-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Tech as Amanah (Trust)</h3>
              <p className="mt-2 text-gray-700">
                ESP32 is neutral—but how we use it reflects our intention (niyyah).  
                Will your project serve truth, justice, education, or harm?  
                <em>“Indeed, Allah commands justice and excellence.”</em> (Q.S. An-Nahl 16:90)
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Community & Contribution */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <UsersIcon size={24} className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Build for Ummah, Not Just Yourself</h3>
              <p className="mt-2 text-gray-700">
                Open-source (like Arduino) embodies ta’awun (mutual cooperation).  
                Share your code. Help peers. Mentor juniors.  
                <em>“Cooperate in righteousness and piety.”</em> (Q.S. Al-Ma’idah 5:2)
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Humility & Tawakkul */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-3">
            <HeartIcon size={24} className="text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">Success ≠ Skill Alone</h3>
              <p className="mt-2 text-gray-700">
                The circuit works not just because of `pinMode()`—but by the will of Allah.  
                Strive with excellence (ihsan), then trust (tawakkul):  
                <em>“And when you have decided, then rely upon Allah.”</em> (Q.S. Ali ‘Imran 3:159)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="mt-10 text-center max-w-3xl mx-auto">
        <blockquote className="text-xl italic text-gray-800 border-l-4 border-amber-500 pl-4 py-2 bg-white/70 rounded-r-lg">
          “The best of people are those who bring most benefit to others.”  
          <footer className="mt-2 text-lg text-amber-700 font-semibold">
            — Hadith (Al-Mu’jam al-Awsaṭ 6192, Hasan)
          </footer>
        </blockquote>
        <p className="mt-6 text-gray-600">
          May your journey with ESP32 be a step toward becoming that person. 🌱
        </p>
      </div>
    </div>
  );
}