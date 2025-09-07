'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import DynamicIconCloud from './DynamicIconCloud';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-[#f6fefb] text-[#01130b] overflow-hidden px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #f6fefb 40%, #1ded8f 100%)',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-28 gap-10 lg:gap-24">
        
        {/* 👉 Left Text Content */}
        <div className="text-center lg:text-left lg:max-w-xl px-2 sm:px-0" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            We are{' '}
            <br />
            {/* 🪄 Typewriter with reserved space */}
            <span className="relative inline-block min-h-[1.2em] bg-gradient-to-r from-[#1ded8f] via-[#8aa4f5] to-[#6f5bf1] bg-clip-text text-transparent">
  <Typewriter
    words={['Nova Squad']}
    loop={false}
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</span>

          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#01130bbb] leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0">
            A team of passionate MERN Stack Developers.
            <br className="hidden md:inline" />
            We build clean, scalable, and impactful web apps.
          </p>

          {/* 👉 CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-semibold rounded-full bg-[#6f5bf1] text-[#f6fefb] hover:bg-[#5a4bd1] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Meet Us
            </a>
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-semibold rounded-full border border-[#01130b] text-[#01130b] hover:bg-[#8aa4f5] hover:text-[#f6fefb] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* 👉 Right: Icon Cloud */}
        <div
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <DynamicIconCloud />
        </div>
      </div>
    </section>
  );
}
