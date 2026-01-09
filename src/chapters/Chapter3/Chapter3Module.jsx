// src/chapters/Chapter3/Chapter3Module.jsx
import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

const PlaceholderSlide = ({ title }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="mt-8 py-4 bg-gray-100 rounded-lg text-gray-600">
      🌡️ Slide content under development.<br />
      Based on: DHT22, analog/digital sensing, Serial Monitor, error handling.
    </div>
  </div>
);

export default function Chapter3Module({ onBack }) {
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
    { title: 'Welcome to Module 3', render: () => <PlaceholderSlide title="Welcome to Module 3" /> },
    { title: 'Islamic Values & Environmental Awareness', render: () => <PlaceholderSlide title="Values: Stewardship of Earth" /> },
    { title: 'Learning Objectives', render: () => <PlaceholderSlide title="Learning Objectives" /> },
    { title: 'Analog vs Digital Sensors', render: () => <PlaceholderSlide title="Sensor Types" /> },
    { title: 'Introducing DHT22', render: () => <PlaceholderSlide title="DHT22: Specs & Wiring" /> },
    { title: 'Circuit Setup (Wokwi & Physical)', render: () => <PlaceholderSlide title="DHT22 Circuit" /> },
    { title: 'Library Setup: DHT.h', render: () => <PlaceholderSlide title="Installing DHT Library" /> },
    { title: 'Code Structure: Reading Sensor', render: () => <PlaceholderSlide title="Reading Temp & Humidity" /> },
    { title: 'Handling Errors (NaN)', render: () => <PlaceholderSlide title="Error Handling" /> },
    { title: 'Displaying Data on Serial Monitor', render: () => <PlaceholderSlide title="Serial Output" /> },
    { title: 'Mini Project: Alert System', render: () => <PlaceholderSlide title="Temp > 30°C → Buzzer!" /> },
    { title: 'Challenge: Log Data Over Time', render: () => <PlaceholderSlide title="Data Logging Challenge" /> },
    { title: 'Quiz: Sensors & Data', render: () => <PlaceholderSlide title="Quiz: Sensors" /> },
    { title: 'Reflection', render: () => <PlaceholderSlide title="Reflection" /> },
    { title: 'Well Done!', render: () => <PlaceholderSlide title="Module 3 Complete!" /> },
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
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 overflow-hidden">
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
        onBack={onBack}
        chapterTitle="Module 3: DHT22 Sensor (Temp & Humidity)"
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