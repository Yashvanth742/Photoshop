import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Play, Pause } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Verified Client Stories
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Cherished by Families & <span className="italic font-light text-[#b5965e]">Creators.</span>
          </h2>
          <p className="text-base text-[#1a1a1a99]">
            Over 2,000 patrons have entrusted FrameCraft with their once-in-a-lifetime milestones.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#ffffff] rounded-3xl border border-[#1a1a1a1a] p-8 sm:p-12 shadow-xl overflow-hidden">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#1a1a1a08] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              {/* Customer Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#b5965e] shadow-md bg-[#f4f1e8]">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 text-[#b5965e]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs text-[#1a1a1a66] ml-2 font-mono">{current.date}</span>
                </div>

                {/* Quote Text */}
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1a1a1a] italic leading-relaxed font-bold">
                  "{current.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-2">
                  <div className="font-serif text-lg font-black text-[#1a1a1a]">
                    — {current.name}
                  </div>
                  <div className="text-xs text-[#b5965e] font-bold mt-0.5 uppercase tracking-wider">
                    Service: {current.service}
                  </div>
                  <div className="text-xs text-[#1a1a1a66]">{current.location}</div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 pt-6 border-t border-[#1a1a1a1a] flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#1a1a1a]' : 'w-2 bg-[#1a1a1a22] hover:bg-[#1a1a1a66]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrows & Autoplay Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2.5 rounded-full bg-[#fdfbf7] border border-[#1a1a1a1a] text-[#1a1a1a88] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-[#fdfbf7] border border-[#1a1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-[#fdfbf7] border border-[#1a1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
