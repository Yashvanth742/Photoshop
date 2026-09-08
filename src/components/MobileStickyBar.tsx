import { Phone, Calendar, Archive } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
  onOpenVault: () => void;
}

export function MobileStickyBar({ onOpenBooking, onOpenVault }: MobileStickyBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-md border-t border-[#1a1a1a1a] px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2.5">
      {/* Call Now */}
      <a
        href={`tel:${STUDIO_INFO.phone}`}
        className="flex-1 py-3 px-3 rounded-full bg-[#ffffff] border border-[#1a1a1a1a] text-[#1a1a1a] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:bg-[#f4f1e8] transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#b5965e]" />
        <span>Call</span>
      </a>

      {/* Lookup Photo ID */}
      <button
        onClick={() => onOpenVault()}
        className="py-3 px-4 rounded-full bg-[#ffffff] border border-[#1a1a1a1a] text-[#b5965e] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#f4f1e8] transition-colors"
        title="Find previously taken photo by ID"
      >
        <Archive className="w-3.5 h-3.5" />
        <span>Vault</span>
      </button>

      {/* Book Session CTA */}
      <button
        onClick={() => onOpenBooking()}
        className="flex-1 py-3 px-3 rounded-full bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5 text-[#b5965e]" />
        <span>Book</span>
      </button>
    </div>
  );
}
