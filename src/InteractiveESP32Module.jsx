// src/InteractiveESP32Module.jsx
import { useState, useEffect, useCallback } from 'react';

// Import komponen layout BARU
import Header from './components/layout/Header';
import SlideMenuSidebar from './components/layout/SlideMenuSidebar';

// Import slide components (sesuaikan dengan file Anda)
import WelcomeSlide from './components/slides/WelcomeSlide';
import LearningObjectivesSlide from './components/slides/LearningObjectivesSlide';
import IslamicValueIntroSlide from './components/slides/IslamicValuesIntroSlide';
import WhatIsESP32Slide from './components/slides/WhatIsESP32Slide';
import ESP32VsArduinoSlide from './components/slides/Esp32VsArduinoSlide';
import BoardAnatomySlide from './components/slides/BoardAnatomySlide';
import ToolsAndSetupSlide from './components/slides/ToolsAndSetupSlide';
import BlinkLogicSlide from './components/slides/BlinkLogicSlide';
import CodeExplainedSlide from './components/slides/CodeExplainedSlide';


export default function InteractiveESP32Module() {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // Slide configuration
  const slides = [
    { title: 'Welcome to PictoBlox!', component: <WelcomeSlide /> },
    { title: 'Learning Objectives', component: <LearningObjectivesSlide /> },
    { title: 'Islamic Value', component: <IslamicValueIntroSlide /> },
    { title: 'What Is ESP32 ', component: <WhatIsESP32Slide />},
    { tilte: 'ESP32 Vs Arduino', component: <ESP32VsArduinoSlide />},
    { tilte: 'Board Anatomy ESP32', component: <BoardAnatomySlide />},
    { tilte: 'Tools and Setup', component: <ToolsAndSetupSlide />},
    { tilte: 'Blink Logic', component: <BlinkLogicSlide />},
    { tilte: 'Code Explained', component: <CodeExplainedSlide />},
  ];

  // Calculate progress
  const progress = ((currentSlide + 1) / slides.length) * 100;

  // Navigation functions with useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        if (showMenu) {
          setShowMenu(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, showMenu]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      
      {/* Header Modern - menggantikan SlideProgress, SlideCounter, MenuButton, NavButtons */}
      <Header
        currentSlide={currentSlide}
        totalSlides={slides.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
      />

      {/* Main Content Area */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Render current slide */}
          <div className="animate-fadeIn">
            {slides[currentSlide].component}
          </div>
        </div>
      </div>

      {/* Sidebar Menu - menggantikan SlideMenuOverlay */}
      <SlideMenuSidebar
        slides={slides}
        currentSlide={currentSlide}
        completedSlides={completedSlides}
        onClose={toggleMenu}
        onSelect={goToSlide}
        isOpen={showMenu}
      />

      {/* Optional: Mark Complete Button (floating) */}
      <button
        onClick={markComplete}
        className={`fixed bottom-6 right-6 px-6 py-3 rounded-full shadow-lg font-semibold transition-all transform hover:scale-105 ${
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