import { useState, FormEvent } from 'react';
import { Star, Clock, ArrowRight, ShieldCheck, Sparkles, ChevronRight, Sliders } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
  onExploreWork: () => void;
  onNavigate: (page: PageView) => void;
}

export function Hero({ onOpenBooking, onExploreWork, onNavigate }: HeroProps) {
  const [quickOrderId, setQuickOrderId] = useState('');

  const handleQuickLookup = (e: FormEvent) => {
    e.preventDefault();
    onNavigate('vault');
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 border-b border-[#1a1a1a1a] bg-[#fdfbf7] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] lg:min-h-[820px]">
        {/* Left Column: Bold Editorial Typography & Headline (60% on desktop) */}
        <div className="w-full lg:w-[60%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between relative z-10">
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 z-0 opacity-[0.04] flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <span className="text-[260px] sm:text-[340px] font-black font-serif transform -rotate-12 text-[#1a1a1a]">
              FC
            </span>
          </div>

          {/* Top Eyebrow */}
          <div className="relative z-10 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b5965e]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
                Est. 2011 • Ichalkaranji
              </span>
            </div>
          </div>

          {/* Main Editorial Statement */}
          <div className="relative z-10 space-y-6 max-w-2xl my-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] xl:text-[96px] leading-[0.88] font-black tracking-tighter font-serif text-[#1a1a1a]">
              Your Moments.{' '}
              <span className="italic font-light text-[#b5965e] block sm:inline">
                Perfectly
              </span>{' '}
              Captured.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#1a1a1a99] max-w-xl font-normal">
              From cinematic wedding albums to certified passport prints and ancestral heritage photo restoration,
              we turn your life memories into timeless visual art.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#b5965e] transition-colors shadow-sm active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWork}
                className="px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
              >
                Explore Portfolio
              </button>

              {/* Client Proof Counter */}
              <div className="flex items-center gap-3 px-2 py-1">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#fdfbf7] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#fdfbf7] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#fdfbf7] object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center text-[#b5965e]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#1a1a1a88] tracking-tight">
                    2k+ Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footnote / Features List */}
          <div className="relative z-10 pt-10 mt-6 border-t border-[#1a1a1a1a] flex flex-wrap items-center gap-6 sm:gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a88]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
              Photoshop Master Retouching
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
              2400 DPI Optical Archiving
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
              10-Min Certified Passport Prints
            </span>
          </div>
        </div>

        {/* Right Column: Dark Contrast Panel (40% on desktop) with Client Portal & Live Studio Highlights */}
        <div className="w-full lg:w-[40%] bg-[#1a1a1a] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-6 relative border-t lg:border-t-0 lg:border-l border-[#1a1a1a1a]">
          <div className="space-y-6">
            {/* 1. Client History Portal Box (from Bold Typography theme) */}
            <div className="bg-[#262626] rounded-2xl p-6 sm:p-7 border border-[#ffffff15] shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#b5965e]" />
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#b5965e] font-bold">
                    Client History Portal
                  </h3>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[9px] rounded-md uppercase font-bold tracking-widest">
                  Secure System
                </span>
              </div>
              <p className="text-xs text-[#a3a3a3] mb-4 leading-relaxed">
                Access your studio archive. Search by Order ID to retrieve lifelong high-res digital files or reprint history.
              </p>
              <form onSubmit={handleQuickLookup} className="flex gap-2">
                <input
                  type="text"
                  value={quickOrderId}
                  onChange={(e) => setQuickOrderId(e.target.value)}
                  placeholder="Enter Order ID (e.g. FC-8821)"
                  className="flex-1 bg-[#151515] border border-[#ffffff22] rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-white placeholder:text-[#666] focus:outline-none focus:border-[#b5965e]"
                />
                <button
                  type="submit"
                  className="bg-[#b5965e] hover:bg-[#a3844e] px-4 rounded-xl text-white font-bold text-sm transition-colors cursor-pointer flex items-center justify-center"
                  title="Open Photo Vault"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#737373]">
                <span>Demo IDs: <strong>FC-8821</strong>, <strong>FC-9402</strong></span>
                <button
                  type="button"
                  onClick={() => onNavigate('vault')}
                  className="text-[#b5965e] font-bold hover:underline"
                >
                  Open Vault →
                </button>
              </div>
            </div>

            {/* 2. Photo Restoration Teaser Card */}
            <div className="bg-[#262626] rounded-2xl p-6 border border-[#ffffff15] shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#b5965e]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#b5965e] font-bold">
                    Master Restoration
                  </span>
                </div>
                <span className="text-[10px] text-[#888] font-mono">1948 Ancestral Archive</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-3 group cursor-pointer" onClick={() => onNavigate('restoration')}>
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Restored Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#b5965e]" />
                      Interactive Before / After
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b5965e] bg-[#1a1a1a]/90 px-2 py-0.5 rounded">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Optical defect elimination, tear reconstruction, and museum sepia toning for heirlooms up to 100 years old.
              </p>
            </div>
          </div>

          {/* 3. Studio Availability Today */}
          <div className="pt-4 border-t border-[#ffffff15] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white">Studio Open Today</p>
                <p className="text-[11px] text-[#888]">Station Rd, Ichalkaranji • 9 AM - 9:30 PM</p>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking('Passport & ID Photos')}
              className="text-xs font-bold uppercase tracking-wider text-[#b5965e] hover:underline cursor-pointer"
            >
              Walk In →
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToServices}
        className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-[#1a1a1a66] hover:text-[#b5965e] transition-colors focus:outline-none cursor-pointer"
        aria-label="Scroll down to services"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-bold">
          Explore Services
        </span>
        <ChevronRight className="w-3.5 h-3.5 transform rotate-90" />
      </button>
    </section>
  );
}
