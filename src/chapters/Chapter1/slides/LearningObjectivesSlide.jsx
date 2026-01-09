// src/components/slides/LearningObjectivesSlide.jsx
import { Target, CheckCircle, Lightbulb, Cpu, Wifi, Zap } from 'lucide-react';

export default function LearningObjectivesSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-center md:justify-center gap-3 sm:gap-4 mb-6">
        <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 flex-shrink-0" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center sm:text-left">
          Learning Objectives
        </h2>
      </div>
      
      <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-6 text-center sm:text-left">
        By the end of this module, you will be able to:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
        {[
          {
            title: "Understand Microcontrollers",
            desc: "Explain what the ESP32 is and why it's called 'the brain of smart projects'",
            bg: "from-blue-500 to-blue-600",
            icon: Cpu
          },
          {
            title: "Identify Board Parts",
            desc: "Locate and describe key pins: GPIO, GND, VIN, USB, and EN",
            bg: "from-teal-500 to-teal-600",
            icon: Wifi // represents hardware connectivity
          },
          {
            title: "Use Wokwi Simulator",
            desc: "Simulate and run your first program directly in the browser",
            bg: "from-purple-500 to-purple-600",
            icon: Wifi
          },
          {
            title: "Upload to Physical ESP32",
            desc: "Compile, upload, and run the 'Blink' program on real hardware",
            bg: "from-amber-500 to-amber-600",
            icon: Zap
          }
        ].map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={i}
              className={`bg-gradient-to-br ${item.bg} text-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md`}
            >
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-6 bg-emerald-100 border-l-4 border-emerald-500 p-3 sm:p-4 rounded-r-lg sm:rounded-r-xl">
        <p className="text-sm sm:text-base md:text-xl text-gray-700 flex items-start gap-2">
          <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
          <span>
            These objectives follow the official <strong>ESP32 Module 1</strong> roadmap — starting with the <em>“Hello World” of electronics: Blink</em>.
          </span>
        </p>
      </div>
    </div>
  );
}