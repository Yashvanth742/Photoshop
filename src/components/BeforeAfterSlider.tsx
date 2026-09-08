import { useState, useRef, useCallback, useEffect } from 'react';
import { SlidersHorizontal, Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';
import { COMPARISON_EXAMPLES } from '../data/mockData';

export function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeExample = COMPARISON_EXAMPLES[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const onMouseUp = () => setIsDragging(false);

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };
    const onTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Master Retouching
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            See The <span className="italic font-light text-[#b5965e]">Difference.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#1a1a1a99] font-normal leading-relaxed">
            Professional color grading and skin texture retouching completely transforms a photograph.
            Drag the slider to inspect the precision of certified Photoshop artisans.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {COMPARISON_EXAMPLES.map((example, index) => (
            <button
              key={example.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeTab === index
                  ? 'bg-[#1a1a1a] text-white shadow-sm'
                  : 'bg-[#ffffff] text-[#1a1a1a88] hover:text-[#1a1a1a] border border-[#1a1a1a1a]'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Slider Visual Container */}
        <div className="max-w-4xl mx-auto bg-[#ffffff] p-3 sm:p-4 rounded-3xl border border-[#1a1a1a1a] shadow-xl">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl cursor-ew-resize select-none border border-[#1a1a1a1a]"
            onMouseDown={(e) => {
              handleMouseDown();
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              handleMouseDown();
              if (e.touches.length > 0) handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Full background layer) */}
            <img
              src={activeExample.afterImage}
              alt={`${activeExample.title} - After Professional Editing`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Before Image (Clipped layer based on sliderPos) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeExample.beforeImage}
                alt={`${activeExample.title} - Before Editing`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />
            </div>

            {/* Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#b5965e] pointer-events-none shadow-[0_0_10px_rgba(181,150,94,0.6)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Draggable Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1a1a1a] border-2 border-[#b5965e] shadow-xl flex items-center justify-center text-[#fdfbf7] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform">
                <MoveHorizontal className="w-4 h-4 text-[#b5965e]" />
              </div>
            </div>

            {/* Left Label: BEFORE */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#1a1a1a]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white shadow-lg pointer-events-none">
              Original / Raw Capture
            </div>

            {/* Right Label: AFTER */}
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full bg-[#1a1a1a]/85 backdrop-blur-md border border-[#b5965e]/60 text-[10px] font-mono uppercase tracking-wider text-[#b5965e] shadow-lg pointer-events-none flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3 h-3 text-[#b5965e]" />
              FrameCraft Retouched
            </div>

            {/* Bottom Draggable Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md text-[10px] text-[#ccc] pointer-events-none uppercase tracking-widest font-mono">
              ↔ Drag to compare
            </div>
          </div>

          {/* Details below slider */}
          <div className="mt-6 pt-5 border-t border-[#1a1a1a1a] px-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="max-w-xl">
              <h4 className="font-serif text-lg font-bold text-[#1a1a1a]">
                {activeExample.title}
              </h4>
              <p className="text-xs text-[#1a1a1a88] leading-relaxed mt-1">
                {activeExample.description}
              </p>
            </div>

            {/* Improvements Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1a1a1a] shrink-0 font-medium">
              {activeExample.improvements.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b5965e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
