import { Camera, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA } from '../data/mockData';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // safe fallback in iframe
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-[#dedede] pt-20 pb-12 border-t border-[#1a1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#ffffff15]">
          {/* Brand Info (col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b5965e] flex items-center justify-center text-white shadow-sm">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-black tracking-tight text-[#fdfbf7]">
                  FrameCraft
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#b5965e] -mt-1 font-bold">
                  Photo Studio & Retouch Lab
                </span>
              </div>
            </div>

            <p className="text-xs text-[#aaaaaa] leading-relaxed max-w-sm">
              Preserving family legacies, royal wedding traditions, and biometric portraits since
              2011. Based in the textile hub of Ichalkaranji, Maharashtra.
            </p>

            <div className="pt-2 text-xs text-[#cccccc] space-y-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#b5965e] shrink-0" />
                <span>Station Road, Near Rajwada Chowk, Ichalkaranji</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b5965e] shrink-0" />
                <span>{STUDIO_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b5965e] shrink-0" />
                <span>{STUDIO_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-black text-[#fdfbf7] tracking-wider uppercase text-xs">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#aaaaaa]">
              {([
                ['Home', 'home'],
                ['Services', 'services'],
                ['Portfolio', 'portfolio'],
                ['Photo Restoration', 'restoration'],
                ['Photo Vault (ID Search)', 'vault'],
                ['Pricing', 'pricing'],
                ['About Us', 'about'],
                ['Contact', 'contact'],
              ] as [string, PageView][]).map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      scrollToTop();
                    }}
                    className="hover:text-[#b5965e] transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Services (col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-black text-[#fdfbf7] tracking-wider uppercase text-xs">
              Studio Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#aaaaaa]">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBooking(s.title)}
                    className="hover:text-[#b5965e] transition-colors cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours & Vault Guarantee (col 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-base font-black text-[#fdfbf7] tracking-wider uppercase text-xs">
              Studio Hours
            </h4>
            <div className="text-xs text-[#aaaaaa] space-y-1">
              <p className="text-[#fdfbf7] font-bold">{STUDIO_INFO.hours.weekdays}</p>
              <p className="text-[#888888]">{STUDIO_INFO.hours.sunday}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#252525] border border-[#ffffff15] space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#b5965e] font-bold block">
                Permanent Photo Vault
              </span>
              <p className="text-xs text-[#bbbbbb] leading-snug">
                Lost your original wedding or visa prints? Simply enter your Studio Vault ID to reprint
                at any time.
              </p>
              <button
                onClick={() => {
                  onNavigate('vault');
                  scrollToTop();
                }}
                className="text-xs text-[#b5965e] hover:underline font-bold inline-block"
              >
                Search Photo Archive →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <div>
            © 2026 {STUDIO_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1.5 font-medium">
            <span>Designed with care</span>
            <Heart className="w-3.5 h-3.5 text-[#b5965e] fill-current" />
            <span>for enduring milestones</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#aaaaaa] hover:text-[#b5965e] transition-colors cursor-pointer font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
