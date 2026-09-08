import { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Maximize2,
  Calendar,
  UserCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/mockData';
import { PortfolioItem } from '../types';

const CATEGORIES = [
  'All',
  'Weddings',
  'Portraits',
  'Events',
  'Products',
  'Restoration',
  'Creative Editing'
] as const;

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="portfolio-section" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Selected Archives
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Curated <span className="italic font-light text-[#b5965e]">Portfolio.</span>
          </h2>
          <p className="text-base text-[#1a1a1a99] leading-relaxed">
            Every frame is captured with editorial precision, nuanced strobe lighting, and museum-grade color profiles.
            Select a genre or inspect any work full-screen.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#1a1a1a] text-white shadow-sm'
                  : 'bg-[#ffffff] text-[#1a1a1a88] hover:text-[#1a1a1a] border border-[#1a1a1a1a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#ffffff] border border-[#1a1a1a1a] cursor-pointer shadow-sm hover:shadow-2xl hover:border-[#b5965e] transition-all duration-400 hover:-translate-y-1"
            >
              <div
                className={`relative overflow-hidden ${
                  item.aspectRatio === 'tall'
                    ? 'aspect-[3/4]'
                    : item.aspectRatio === 'wide'
                    ? 'aspect-[16/10]'
                    : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1a1a1a]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#b5965e] font-bold">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#b5965e]" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#b5965e] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#d1d1d1] line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-[#aaa] font-mono">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/95 backdrop-blur-xl p-4 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-[#262626] hover:bg-[#b5965e] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-[#262626] hover:bg-[#b5965e] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-[#262626] hover:bg-[#b5965e] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-[#0e0e0e] border border-[#ffffff15]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Lightbox Metadata Bar */}
            <div className="w-full mt-4 bg-[#1a1a1a] border border-[#ffffff15] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#b5965e]/20 text-[#b5965e] text-xs font-mono font-bold">
                    {currentItem.category}
                  </span>
                  <span className="text-xs text-[#666]">•</span>
                  <span className="text-xs text-[#888] font-mono">
                    Frame {lightboxIndex! + 1} of {filteredItems.length}
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-black text-white">
                  {currentItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#ccc] mt-0.5">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#aaa] shrink-0 font-medium">
                <div className="flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#b5965e]" />
                  <span>{currentItem.client}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#b5965e]" />
                  <span>{currentItem.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
