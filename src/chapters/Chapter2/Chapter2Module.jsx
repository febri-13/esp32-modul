// src/chapters/Chapter2/Chapter2Module.jsx
import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

// Dummy placeholder slides (to be implemented later)
const PlaceholderSlide = ({ title }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="mt-8 py-4 bg-gray-100 rounded-lg text-gray-600">
      🛠️ Slide content under development.<br />
      Based on: Digital I/O, Push Button, LED, Buzzer, Relay circuits.
    </div>
  </div>
);

export default function Chapter2Module({ onBack }) {
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

  // Slide configuration for Module 2 — based on curriculum
  const slideConfig = [
    { title: 'Welcome to Module 2', render: () => <PlaceholderSlide title="Welcome to Module 2" /> },
    { title: 'Islamic Values in Engineering', render: () => <PlaceholderSlide title="Islamic Values in Engineering" /> },
    { title: 'Learning Objectives', render: () => <PlaceholderSlide title="Learning Objectives" /> },
    { title: 'Digital Input & Output Recap', render: () => <PlaceholderSlide title="Digital I/O Recap" /> },
    { title: 'Push Button Basics', render: () => <PlaceholderSlide title="Push Button Basics" /> },
    { title: 'Controlling an LED with Button', render: () => <PlaceholderSlide title="LED + Button Circuit" /> },
    { title: 'Debouncing Explained', render: () => <PlaceholderSlide title="Button Debouncing" /> },
    { title: 'Adding a Buzzer', render: () => <PlaceholderSlide title="Buzzer Integration" /> },
    { title: 'Controlling a Relay', render: () => <PlaceholderSlide title="Relay & High-Power Loads" /> },
    { title: 'Wokwi Simulation: Full Circuit', render: () => <PlaceholderSlide title="Wokwi: LED+Buzzer+Relay" /> },
    { title: 'Code Walkthrough: Multiple Outputs', render: () => <PlaceholderSlide title="Code: Multiple Outputs" /> },
    { title: 'Challenge: Traffic Light System', render: () => <PlaceholderSlide title="Traffic Light Challenge" /> },
    { title: 'Quiz: Digital Circuits', render: () => <PlaceholderSlide title="Quiz: Digital Circuits" /> },
    { title: 'Reflection', render: () => <PlaceholderSlide title="Reflection" /> },
    { title: 'Well Done!', render: () => <PlaceholderSlide title="Module 2 Complete!" /> },
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
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-100 via-teal-50 to-cyan-100 overflow-hidden">
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
        onBack={onBack}
        chapterTitle="Module 2: LED & Actuators with Push Button"
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