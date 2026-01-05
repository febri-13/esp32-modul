// src/InteractiveESP32Module.jsx
import { useState, useEffect, useCallback } from 'react';

// Layout
import Header from './components/layout/Header';
import SlideMenuSidebar from './components/layout/SlideMenuSidebar';

// Slides
import WelcomeSlide from './components/slides/WelcomeSlide';
import LearningObjectivesSlide from './components/slides/LearningObjectivesSlide';
import IslamicValueIntroSlide from './components/slides/IslamicValuesIntroSlide';
import WhatIsESP32Slide from './components/slides/WhatIsESP32Slide';
import ESP32VsArduinoSlide from './components/slides/Esp32VsArduinoSlide';
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
import QuizSlide from './components/slides/QuizSlide';

// ⚠️ HAPUS BoardAnatomySlide (sudah split jadi 2 slide)
// import BoardAnatomySlide from './components/slides/BoardAnatomySlide';

export default function InteractiveESP32Module() { // ✅ Perbaiki nama: bukan "PictoBlox"
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // ✅ Gunakan satu array konfigurasi: SLIDE_CONFIG
  const SLIDE_CONFIG = [
    { title: 'Welcome', component: <WelcomeSlide /> },
    { title: 'Learning Objectives', component: <LearningObjectivesSlide /> },
    { title: 'Islamic Values', component: <IslamicValueIntroSlide /> },
    { title: 'What Is ESP32?', component: <WhatIsESP32Slide /> },
    { title: 'ESP32 vs Arduino', component: <ESP32VsArduinoSlide /> },
    { title: 'Board Pinout (Visual)', component: <BoardPinoutVisualSlide /> },
    { title: 'Board Anatomy (Details)', component: <BoardAnatomyDetailsSlide /> },
    { 
      title: 'Quiz: ESP32 Basics', 
      component: <QuizSlide 
        quizId="esp32-general" 
        onNext={() => setCurrentSlide(p => p + 1)} 
        onPrev={() => setCurrentSlide(p => p - 1)} 
      /> 
    },
    { title: 'Tools & Setup', component: <ToolsAndSetupSlide /> },
    { title: 'Blink Logic', component: <BlinkLogicSlide /> },
    { title: 'Code Explained', component: <CodeExplainedSlide /> },
    { title: 'Wokwi Simulation', component: <WokwiSimulationSlide /> },
    { title: 'Upload to Board', component: <UploadToBoardSlide /> },
    { title: 'Mini Challenge', component: <MiniChallengeSlide /> },
    { title: 'Bonus: WiFi Scanner', component: <WifiScannerSlide /> },
    { title: 'Reflection', component: <ReflectionSlide /> },
    { title: 'Final Message', component: <FinalMessageSlide /> },
  ];

  const totalSlides = SLIDE_CONFIG.length;

  // Navigation
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const toggleMenu = useCallback(() => setShowMenu(prev => !prev), []);

  const markComplete = useCallback(() => {
    setCompletedSlides(prev => new Set(prev).add(currentSlide));
  }, [currentSlide]);

  // Progress
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  // Keyboard
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && !window.quizActive) nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape' && showMenu) setShowMenu(false);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, showMenu]);

  // Ambil slide saat ini
  const currentComponent = SLIDE_CONFIG[currentSlide]?.component || <div>Loading...</div>;

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      <Header
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full pt-20 sm:pt-6 md:pt-20 pb-20 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* ✅ Render komponen langsung */}
            <div className="animate-fadeIn">
              {currentComponent}
            </div>
          </div>
        </div>
      </div>

      <SlideMenuSidebar
        slides={SLIDE_CONFIG}
        currentSlide={currentSlide}
        completedSlides={completedSlides}
        onClose={toggleMenu}
        onSelect={goToSlide}
        isOpen={showMenu}
      />

      {/* Mark Complete Button */}
      <button
        onClick={markComplete}
        className={`hidden md:block fixed bottom-6 right-6 px-6 py-3 rounded-full shadow-lg font-semibold transition-all transform hover:scale-105 z-30 ${
          completedSlides.has(currentSlide)
            ? 'bg-green-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50 border'
        }`}
      >
        {completedSlides.has(currentSlide) ? '✓ Completed' : 'Mark Complete'}
      </button>
    </div>
  );
}