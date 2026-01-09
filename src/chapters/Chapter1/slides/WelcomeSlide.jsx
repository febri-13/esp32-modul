// src/components/slides/WelcomeSlide.jsx
import { Cpu, Wifi, Zap, BookOpen } from 'lucide-react';

export default function WelcomeSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <img 
        src="/logo.webp" 
        alt="SMP ABBS Logo" 
        className="h-16 sm:h-20 md:h-24 w-auto mb-4 sm:mb-6"
      />
      <Cpu className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-500 mb-4 sm:mb-6" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-4">
        ESP32 Introduction
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-600 mb-6 sm:mb-8">
        Module 1 — The Brain of Your Smart Projects
      </h2>
      <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-gray-700 px-4 sm:px-6 md:px-8 max-w-4xl">
        &ldquo;You don’t need a lab or a genius brain—just curiosity and a biscuit-sized computer that talks to the world.&rdquo;
      </blockquote>
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
        <div className="bg-blue-100 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-blue-700 font-semibold text-base sm:text-lg flex items-center gap-1">
          <Cpu size={18} /> Microcontroller
        </div>
        <div className="bg-green-100 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-green-700 font-semibold text-base sm:text-lg flex items-center gap-1">
          <Wifi size={18} /> Wi-Fi & Bluetooth
        </div>
        <div className="bg-amber-100 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-amber-700 font-semibold text-base sm:text-lg flex items-center gap-1">
          <Zap size={18} /> 3.3V — Handle with Care!
        </div>
      </div>
    </div>
  );
}