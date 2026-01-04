// src/components/layout/Header.jsx
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({
  currentSlide,
  totalSlides,
  progress,
  onPrev,
  onNext,
  onMenuToggle,
  showMenu
}) {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo/Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-800">PictoBlox Level 7</h1>
              <p className="text-xs text-gray-500">Stage 1: Welcome to Coding</p>
            </div>
          </div>

          {/* Center: Progress Info */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              {currentSlide + 1}/{totalSlides}
              <span className="text-blue-600 ml-1">({Math.round(progress)}%)</span>
            </span>
          </div>

          {/* Right: Navigation Buttons */}
          <div className="flex items-center gap-2">
            {/* Navigation Arrows */}
            <button
              onClick={onPrev}
              disabled={isFirst}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous slide"
              title="Previous (←)"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={onNext}
              disabled={isLast}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next slide"
              title="Next (→)"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Menu Toggle */}
            <button
              onClick={onMenuToggle}
              className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition-all"
              aria-label="Toggle menu"
              title="Menu (ESC)"
            >
              {showMenu ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Progress Bar (below header on small screens) */}
        <div className="md:hidden pb-2">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-gray-700">
              {currentSlide + 1}/{totalSlides}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}