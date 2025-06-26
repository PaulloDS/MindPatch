"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowRight,
  Target,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Schedule In Calendar",
      subtitle:
        "Generate calendar using advanced AI models. Explore workflow possibilities and bring your ideas to life in calendar.",
      buttonText: "Go To Calendar",
      buttonIcon: Calendar,
      bgGradient: "from-emerald-400 to-emerald-500",
    },
    {
      title: "Smart Task Management",
      subtitle:
        "Organize your tasks efficiently with AI-powered suggestions and intelligent scheduling.",
      buttonText: "Manage Tasks",
      buttonIcon: Target,
      bgGradient: "from-blue-400 to-blue-500",
    },
    {
      title: "Team Collaboration",
      subtitle:
        "Connect with your team seamlessly. Share calendars and coordinate meetings.",
      buttonText: "Join Team",
      buttonIcon: Users,
      bgGradient: "from-purple-400 to-purple-500",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-[65%]">
      <div className="relative bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-4xl overflow-hidden shadow-lg h[200px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-8 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-4 left-8 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
        </div>

        <div className="relative z-10 flex items-center justify-between p-6 px-10">
          {/* Content */}
          <div className="flex-1 pr-6">
            <h3 className="text-white text-xl font-bold mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="text-white/90 text-sm mb-4 line-clamp-2 max-w-md">
              {slides[currentSlide].subtitle}
            </p>
            <Button
              size="sm"
              className="bg-white text-gray-800 hover:bg-gray-100 font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              {React.createElement(slides[currentSlide].buttonIcon, {
                className: "w-4 h-4 mr-2",
              })}
              {slides[currentSlide].buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Illustration */}
          <div className="relative w-44 h-36 flex-shrink-0">
            <Image
              src="/dev.png"
              alt="Calendar illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-3 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-200 ${
              index === currentSlide
                ? "w-6 h-2 bg-emerald-500 rounded-full"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
