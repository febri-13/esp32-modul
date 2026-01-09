// src/components/slides/IslamicValuesIntroSlide.jsx
import React from 'react';
import { Cpu, Wifi, Zap, BookOpen } from 'lucide-react';

export default function IslamicValuesIntroSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-y-auto">
      {/* Icon — tech + knowledge fusion */}
      <div className="mb-4">
        <div className="relative inline-block">
          <Cpu className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-600 mx-auto" />
          <BookOpen className="w-8 h-8 absolute -bottom-2 -right-2 text-amber-500" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 px-2">
        Knowledge, Technology & Trust
      </h1>

      {/* Arabic Verse — kept for authenticity (with translation below) */}
      <div className="mb-6 w-full max-w-2xl">
        <p
          dir="rtl"
          lang="ar"
          className="text-2xl sm:text-3xl md:text-4xl font-mirza text-gray-900 leading-relaxed tracking-wide"
          style={{ 
            fontFamily: "'Amiri', 'Mirza', serif",
            lineHeight: '1.8',
            wordSpacing: '0.1em'
          }}
        >
          وَقُل رَّبِّ زِدْنِي عِلْمًا
        </p>
        <p className="text-base sm:text-lg text-gray-500 mt-2">
          — Surah Taha, 20:114
        </p>
      </div>

      {/* Transliteration & Translation — in English */}
      <div className="w-full bg-emerald-50 rounded-xl p-4 sm:p-5 border border-emerald-200 mb-6">
        <div className="text-left space-y-3">
          <div>
            <span className="font-bold text-emerald-700 text-sm sm:text-base">Transliteration:</span>  
            <p className="text-base sm:text-lg text-gray-700 mt-1">
              <em>Wa qul, Rabbi zidnī ‘ilmā.</em>
            </p>
          </div>
          <div>
            <span className="font-bold text-emerald-700 text-sm sm:text-base">Translation:</span>  
            <p className="text-base sm:text-lg text-gray-700 mt-1">
              <em>“And say: ‘My Lord, increase me in knowledge.’”</em>
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-emerald-200">
            <p className="text-sm sm:text-base text-gray-700 italic">
              Today, that knowledge includes understanding tiny, powerful chips like the ESP32 —  
              a “biscuit-sized brain” with Wi-Fi, Bluetooth, and the ability to bring ideas to life.
            </p>
          </div>
        </div>
      </div>

      {/* Reflection — in English, value-based */}
      <div className="w-full bg-white rounded-xl p-4 sm:p-5 border border-gray-200 shadow-sm mb-6">
        <p className="text-sm sm:text-base text-gray-700">
          Learning ESP32 programming is more than coding —  
          it’s an act of <strong>gratitude</strong> for intellect,  
          <strong>patience</strong> during debugging,  
          and <strong>responsibility</strong> in building beneficial technology.
        </p>
      </div>

      {/* Value Tags — English + ESP32 context */}
      <div className="flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
          <Cpu size={14} /> Microcontroller → Amanah (Trust)
        </span>
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-blue-100 text-blue-800 rounded-full flex items-center gap-1">
          <Wifi size={14} /> Wireless Tech → Shukr (Gratitude)
        </span>
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-amber-100 text-amber-800 rounded-full flex items-center gap-1">
          <Zap size={14} /> 3.3V Safety → Iḥtiyāth (Caution)
        </span>
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-purple-100 text-purple-800 rounded-full">
          Debugging → Ṣabr & Tawakkul (Patience & Reliance on Allah)
        </span>
      </div>
    </div>
  );
}