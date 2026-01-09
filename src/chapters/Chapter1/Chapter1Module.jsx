// src/chapters/Chapter1/Chapter1Module.jsx
import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

// Import all required slides
import WelcomeSlide from './slides/WelcomeSlide';
import IslamicValuesIntroSlide from './slides/IslamicValuesIntroSlide';
import LearningObjectivesSlide from './slides/LearningObjectivesSlide';
import WhatIsESP32Slide from './slides/WhatIsESP32Slide';
import Esp32VsArduinoSlide from './slides/Esp32VsArduinoSlide';
import BoardAnatomySlide from './slides/BoardAnatomySlide';
import BoardAnatomyDetailsSlide from './slides/BoardAnatomyDetailsSlide';
import BoardPinoutVisualSlide from './slides/BoardPinoutVisualSlide';
import ToolsAndSetupSlide from './slides/ToolsAndSetupSlide';
import WokwiSimulationSlide from './slides/WokwiSimulationSlide';
import BlinkLogicSlide from './slides/BlinkLogicSlide';
import CodeExplainedSlide from './slides/CodeExplainedSlide';
import UploadToBoardSlide from './slides/UploadToBoardSlide';
import WifiScannerSlide from './slides/WifiScannerSlide';
import MiniChallengeSlide from './slides/MiniChallengeSlide';
import QuizSlide from './slides/QuizSlide';
import ReflectionSlide from './slides/ReflectionSlide';
import FinalMessageSlide from './slides/FinalMessageSlide';

export default function Chapter1Module({ onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // ✅ FIX: slideConfig declared FIRST — before any useCallback that uses it
  const slideConfig = [
    { title: 'Welcome to ESP32!', render: () => <WelcomeSlide /> },
    { title: 'Islamic Values in Tech', render: () => <IslamicValuesIntroSlide /> },
    { title: 'Learning Objectives', render: () => <LearningObjectivesSlide /> },
    { title: 'What is ESP32?', render: () => <WhatIsESP32Slide /> },
    { title: 'ESP32 vs Arduino', render: () => <Esp32VsArduinoSlide /> },
    { title: 'Board Anatomy Overview', render: () => <BoardAnatomySlide /> },
    { title: 'Board Components Deep Dive', render: () => <BoardAnatomyDetailsSlide /> },
    { title: 'Pinout & GPIO Guide', render: () => <BoardPinoutVisualSlide /> },
    { title: 'Tools & Setup', render: () => <ToolsAndSetupSlide /> },
    { title: 'Wokwi Simulation Intro', render: () => <WokwiSimulationSlide /> },
    { title: 'Understanding Blink Logic', render: () => <BlinkLogicSlide /> },
    { title: 'Code Explained: setup() & loop()', render: () => <CodeExplainedSlide /> },
    { title: 'Upload to ESP32 Board', render: () => <UploadToBoardSlide /> },
    { title: 'Mini Project: WiFi Scanner', render: () => <WifiScannerSlide /> },
    { title: 'Mini Challenge', render: () => <MiniChallengeSlide /> },
    { 
      title: 'Quiz: ESP32 Basics', 
      render: () => <QuizSlide 
        quizId="quiz-esp32-basics" 
        onNext={() => setCurrentSlide(prev => Math.min(prev + 1, slideConfig.length - 1))}
        onPrev={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
      /> 
    },
    { title: 'Reflection', render: () => <ReflectionSlide /> },
    { title: 'Well Done!', render: () => <FinalMessageSlide /> },
  ];

  // ✅ Now safe: slideConfig is already initialized
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slideConfig.length - 1));
  }, [slideConfig.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu(prev => !prev);
  }, []);

  const markComplete = useCallback(() => {
    setCompletedSlides(prev => new Set(prev).add(currentSlide));
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / slideConfig.length) * 100;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape' && showMenu) setShowMenu(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, showMenu]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
        onBack={onBack}
        chapterTitle="Module 1: Introduction to ESP32"
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