// src/chapters/Chapter4/Chapter4Module.jsx
import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

const PlaceholderSlide = ({ title }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="mt-8 py-4 bg-gray-100 rounded-lg text-gray-600">
      🌞📏 Slide content under development.<br />
      Based on: LDR (analog), HC-SR04 (ultrasonic), automation logic.
    </div>
  </div>
);

export default function Chapter4Module({ onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slideConfig.length - 1));
  }, [slideConfig.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const markComplete = useCallback(() => {
    setCompletedSlides((prev) => new Set(prev).add(currentSlide));
  }, [currentSlide]);

  const slideConfig = [
    { title: 'Welcome to Module 4', render: () => <PlaceholderSlide title="Welcome to Module 4" /> },
    { title: 'Islamic Values in Innovation', render: () => <PlaceholderSlide title="Values: Creativity & Responsibility" /> },
    { title: 'Learning Objectives', render: () => <PlaceholderSlide title="Learning Objectives" /> },
    { title: 'Analog Input Deep Dive', render: () => <PlaceholderSlide title="Analog vs Digital Recap" /> },
    { title: 'Light Sensor: LDR', render: () => <PlaceholderSlide title="LDR: How It Works" /> },
    { title: 'LDR Circuit & Calibration', render: () => <PlaceholderSlide title="LDR Wiring & Reading" /> },
    { title: 'Distance Sensor: HC-SR04', render: () => <PlaceholderSlide title="HC-SR04: Principle & Pins" /> },
    { title: 'HC-SR04 Timing & Code', render: () => <PlaceholderSlide title="PulseIn & Distance Calc" /> },
    { title: 'Wokwi Simulation: LDR + HC-SR04', render: () => <PlaceholderSlide title="Dual-Sensor Simulation" /> },
    { title: 'Mini Project: Smart Night Light', render: () => <PlaceholderSlide title="LDR → LED Auto-On" /> },
    { title: 'Mini Project: Proximity Alarm', render: () => <PlaceholderSlide title="HC-SR04 → Buzzer Alert" /> },
    { title: 'Integrated Challenge: Auto Door', render: () => <PlaceholderSlide title="Combine LDR + HC-SR04" /> },
    { title: 'Quiz: Analog Sensors', render: () => <PlaceholderSlide title="Quiz: Light & Distance" /> },
    { title: 'Reflection', render: () => <PlaceholderSlide title="Reflection" /> },
    { title: 'Congratulations!', render: () => <PlaceholderSlide title="All Modules Complete!" /> },
  ];

  const progress = ((currentSlide + 1) / slideConfig.length) * 100;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape') setShowMenu(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 overflow-hidden">
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
        onBack={onBack}
        chapterTitle="Module 4: Light & Distance Sensors"
      />

      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full pt-20 sm:pt-6 md:pt-20 pb-20 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fadeIn">
              {slideConfig[currentSlide].render()}
            </div>
          </div>
        </div>
      </div>

      <SlideMenuSidebar
        slides={slideConfig}
        currentSlide={currentSlide}
        completedSlides={completedSlides}
        onClose={toggleMenu}
        onSelect={goToSlide}
        isOpen={showMenu}
      />

      <button
        onClick={markComplete}
        className={`hidden md:block fixed bottom-6 right-6 px-6 py-3 rounded-full shadow-lg font-semibold transition-all transform hover:scale-105 z-30 ${
          completedSlides.has(currentSlide)
            ? 'bg-green-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {completedSlides.has(currentSlide) ? '✓ Completed' : 'Mark Complete'}
      </button>
    </div>
  );
}