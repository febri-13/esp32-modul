// src/components/utils/useSlideNavigation.js
import { useState, useEffect, useCallback } from 'react';

export const useSlideNavigation = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(prev => prev + 1);
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  const markComplete = () => {
    setCompletedSlides(prev => new Set([...prev, currentSlide]));
  };

  // Keyboard handling - UPDATED to respect quiz state
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Check if quiz is active - if yes, ignore keyboard navigation
      if (window.quizActive) {
        // Only allow ESC for menu
        if (e.key === 'Escape') {
          setShowMenu(prev => !prev);
        }
        return;
      }

      // Normal keyboard navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setShowMenu(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  const progress = Math.round(((currentSlide + 1) / totalSlides) * 100);

  return {
    currentSlide,
    completedSlides,
    showMenu,
    progress,
    nextSlide,
    prevSlide,
    goToSlide,
    markComplete,
    setShowMenu,
  };
};