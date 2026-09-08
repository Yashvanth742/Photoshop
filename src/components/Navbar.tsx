import { useState, useEffect } from 'react';
import { Phone, Menu, X, Camera, Archive, Sparkles, ChevronRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenVault: () => void;
}

export function Navbar({ currentPage, setCurrentPage, onOpenBooking, onOpenVault }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView; highlight?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Restoration', page: 'restoration' },
    { label: 'Photo Vault', page: 'vault', highlight: true },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // safe fallback in iframe
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fdfbf7]/95 backdrop-blur-md border-b border-[#1a1a1a1a] shadow-sm py-3'
          : 'bg-[#fdfbf7]/90 backdrop-blur-sm border-b border-[#1a1a1a1a] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#fdfbf7] shadow-sm group-hover:bg-[#b5965e] transition-colors">
            <Camera className="w-4 h-4 text-[#fdfbf7]" />
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-black tracking-tighter italic text-[#1a1a1a] group-hover:text-[#b5965e] transition-colors">
              FrameCraft.
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[11px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`py-1 transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                currentPage === item.page
                  ? 'text-[#1a1a1a] border-b-2 border-[#1a1a1a]'
                  : 'text-[#1a1a1a88] hover:text-[#1a1a1a]'
              } ${item.highlight ? 'text-[#b5965e]' : ''}`}
            >
              {item.highlight && <Archive className="w-3.5 h-3.5 text-[#b5965e]" />}
              {item.label}
              {item.highlight && (
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-[#b5965e]/15 text-[#b5965e] font-mono tracking-normal">
                  ID Search
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="text-right group focus:outline-none"
            title="Call FrameCraft Studio"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#1a1a1a] opacity-50 font-bold">
              Call for inquiry
            </p>
            <p className="text-xs xl:text-sm font-bold italic text-[#b5965e] group-hover:underline">
              {STUDIO_INFO.phone}
            </p>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="bg-[#1a1a1a] text-white px-5 xl:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#b5965e] transition-colors shadow-sm active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Session</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#1a1a1a] text-white text-[11px] font-bold uppercase tracking-wider"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#f4f1e8] border border-[#1a1a1a1a] text-[#1a1a1a] hover:text-[#b5965e] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#fdfbf7]/98 backdrop-blur-xl z-50 overflow-y-auto border-t border-[#1a1a1a1a] flex flex-col p-6 animate-fadeIn">
          <div className="space-y-1 pb-6 border-b border-[#1a1a1a1a]">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm uppercase tracking-widest font-bold flex items-center justify-between transition-colors cursor-pointer ${
                  currentPage === item.page
                    ? 'bg-[#1a1a1a] text-white'
                    : 'text-[#1a1a1a] hover:bg-[#f4f1e8]'
                }`}
              >
                <span className="flex items-center gap-3">
                  {item.highlight && <Archive className="w-4 h-4 text-[#b5965e]" />}
                  {item.label}
                </span>
                {item.highlight ? (
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#b5965e]/20 text-[#b5965e] font-mono">
                    ID Search
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-[#1a1a1a66]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <div className="bg-[#f4f1e8] border border-[#1a1a1a1a] p-4 rounded-xl">
              <div className="text-[10px] uppercase tracking-widest text-[#1a1a1a] opacity-50 font-bold mb-1">
                Studio Assistance
              </div>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center gap-3 text-base text-[#1a1a1a] font-bold italic py-1"
              >
                <Phone className="w-4 h-4 text-[#b5965e]" />
                <span>{STUDIO_INFO.phone}</span>
              </a>
              <div className="text-xs text-[#1a1a1a88] mt-1">{STUDIO_INFO.hours.weekdays}</div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#b5965e] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Studio Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
