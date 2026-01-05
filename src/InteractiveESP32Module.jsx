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
import BoardPinoutVisualSlide from './components/slides/BoardPinoutVisualSlide';
import BoardAnatomyDetailsSlide from './components/slides/BoardAnatomyDetailsSlide';
import ToolsAndSetupSlide from './components/slides/ToolsAndSetupSlide';
import BlinkLogicSlide from './components/slides/BlinkLogicSlide';
import CodeExplainedSlide from './components/slides/CodeExplainedSlide';
import WokwiSimulationSlide from './components/slides/WokwiSimulationSlide';
import UploadToBoardSlide from './components/slides/UploadToBoardSlide';
import MiniChallengeSlide from './components/slides/MiniChallengeSlide';
import WifiScannerSlide from './components/slides/WifiScannerSlide';
import ReflectionSlide from './components/slides/ReflectionSlide';
import FinalMessageSlide from './components/slides/FinalMessageSlide';

export default function InteractivePictoBloxModule() {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // Navigation functions with useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, 18)); // Total 19 slides (0-18)
  }, []);

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

  const slides = [
    { title: 'Welcome to PictoBlox!', component: <WelcomeSlide /> },
    { title: 'Learning Objectives', component: <LearningObjectivesSlide /> },
    { title: 'Islamic Value', component: <IslamicValueIntroSlide /> },
    { title: 'What Is ESP32 ', component: <WhatIsESP32Slide />},
    { title: 'ESP32 Vs Arduino', component: <ESP32VsArduinoSlide />},
    { title: 'Board Anatomy ESP32', component: <BoardAnatomySlide />},
    { title: 'Board Pinout Visual', component: <BoardPinoutVisualSlide />},
    { title: 'Board Anatomy Details', component: <BoardAnatomyDetailsSlide />},
    { title: 'Tools and Setup', component: <ToolsAndSetupSlide />},
    { title: 'Blink Logic', component: <BlinkLogicSlide />},
    { title: 'Code Explained', component: <CodeExplainedSlide />},
    { title: 'Wokwi Simulation', component: <WokwiSimulationSlide />},
    { title: 'Upload To Board', component: <UploadToBoardSlide />},
    { title: 'Mini Challenge', component: <MiniChallengeSlide />},
    { title: 'Bonus : Wifi Scanner', component: <WifiScannerSlide />},
    { title: 'Reflection', component: <ReflectionSlide />},
    { title: 'Final Message', component: <FinalMessageSlide />},
  ];



  // Calculate progress
  const progress = ((currentSlide + 1) / slideConfig.length) * 100;

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
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      
      {/* Header Modern */}
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
      />

      {/* Main Content Area - SCROLLABLE di mobile */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full pt-20 sm:pt-6 md:pt-20 pb-20 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* ✅ Render current slide dengan memanggil function */}
            <div className="animate-fadeIn">
              {slideConfig[currentSlide].render()}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <SlideMenuSidebar
        slides={slideConfig}
        currentSlide={currentSlide}
        completedSlides={completedSlides}
        onClose={toggleMenu}
        onSelect={goToSlide}
        isOpen={showMenu}
      />

      {/* Mark Complete Button - HIDDEN di mobile (< 768px) */}
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