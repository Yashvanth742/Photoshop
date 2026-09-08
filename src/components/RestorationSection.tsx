import { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  History, 
  ShieldCheck 
} from 'lucide-react';

interface RestorationSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function RestorationSection({ onOpenBooking }: RestorationSectionProps) {
  const [activeView, setActiveView] = useState<'restored' | 'original' | 'split'>('split');
  const [estimateDamage, setEstimateDamage] = useState('moderate');
  const [estimateColorize, setEstimateColorize] = useState(true);

  const featurePoints = [
    'Remove scratches, fungal spots, moisture stains & mold damage',
    'Repair severe cracks, fold creases & missing paper corners',
    'Restore faded silver-gelatin tones & natural chemical color vibrancy',
    'Recover authentic facial details with high-resolution manual retouching',
    'Permanent digital preservation cataloged in FrameCraft Photo Vault',
  ];

  const calculatePrice = () => {
    let base = 499;
    if (estimateDamage === 'heavy') base = 899;
    if (estimateDamage === 'severe') base = 1499;
    if (estimateColorize) base += 350;
    return base;
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fdfbf7] relative overflow-hidden border-b border-[#1a1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
                Ancestral Heritage Archive
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight leading-tight">
              Bring Old Memories{' '}
              <span className="italic font-light text-[#b5965e]">
                Back to Life.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#1a1a1a99] font-normal leading-relaxed">
              Damaged, faded or torn heirlooms deserve enduring life. Whether it is an 80-year-old
              wedding portrait of grandparents or a sun-damaged family record, our retouchers reconstruct
              every lost millimeter.
            </p>

            {/* Feature Points Checklist */}
            <div className="space-y-3 pt-2">
              {featurePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#b5965e]/15 flex items-center justify-center text-[#b5965e] mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-[#1a1a1a] font-medium leading-normal">{point}</span>
                </div>
              ))}
            </div>

            {/* Interactive Quick Estimate Card */}
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#1a1a1a1a] shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b5965e] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#b5965e]" />
                  Instant Restoration Estimate
                </span>
                <span className="text-[11px] text-[#1a1a1a66] font-mono">Includes 2400 DPI Optical Scan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#1a1a1a] mb-1.5 font-bold uppercase tracking-wider text-[10px]">
                    Damage Severity
                  </label>
                  <select
                    value={estimateDamage}
                    onChange={(e) => setEstimateDamage(e.target.value)}
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl px-3 py-2 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#b5965e]"
                  >
                    <option value="moderate">Moderate (Scratches & Fading)</option>
                    <option value="heavy">Heavy (Tears & Missing Folds)</option>
                    <option value="severe">Severe (Facial Reconstruction)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1a1a1a] mb-1.5 font-bold uppercase tracking-wider text-[10px]">
                    Authentic Colorization
                  </label>
                  <button
                    type="button"
                    onClick={() => setEstimateColorize(!estimateColorize)}
                    className={`w-full py-2 px-3 rounded-xl border text-left transition-colors flex items-center justify-between cursor-pointer font-medium ${
                      estimateColorize
                        ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                        : 'bg-[#fdfbf7] border-[#1a1a1a1a] text-[#1a1a1a]'
                    }`}
                  >
                    <span>{estimateColorize ? 'Colorized (+₹350)' : 'Keep Original B&W'}</span>
                    <span className="text-xs font-bold text-[#b5965e]">
                      {estimateColorize ? '✓' : '—'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1a1a1a1a] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-[#1a1a1a66] uppercase tracking-widest font-bold">
                    Estimated Investment
                  </div>
                  <div className="font-serif text-2xl font-black text-[#1a1a1a]">
                    ₹{calculatePrice()}{' '}
                    <span className="text-xs font-sans text-[#1a1a1a66] font-normal">
                      (Includes 8x12 lab print)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('Photo Restoration')}
                  className="px-6 py-3 rounded-full bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#b5965e] transition-colors shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <span>Restore Heirloom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Restoration Spotlight */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#ffffff] p-4 sm:p-6 rounded-3xl border border-[#1a1a1a1a] shadow-xl">
              {/* View Toggle Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveView('split')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeView === 'split'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'text-[#1a1a1a88] hover:text-[#1a1a1a] bg-[#f4f1e8]'
                    }`}
                  >
                    Split View
                  </button>
                  <button
                    onClick={() => setActiveView('original')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeView === 'original'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'text-[#1a1a1a88] hover:text-[#1a1a1a] bg-[#f4f1e8]'
                    }`}
                  >
                    Damaged Original
                  </button>
                  <button
                    onClick={() => setActiveView('restored')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeView === 'restored'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'text-[#1a1a1a88] hover:text-[#1a1a1a] bg-[#f4f1e8]'
                    }`}
                  >
                    Restored Master
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#b5965e] font-mono font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#b5965e]" />
                  <span>Archival Grade 75+ Yrs</span>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1a1a1a1a] bg-[#f4f1e8]">
                {activeView === 'original' && (
                  <img
                    src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=40&sepia=80"
                    alt="Original damaged photograph with creases and fading"
                    className="w-full h-full object-cover"
                  />
                )}

                {activeView === 'restored' && (
                  <img
                    src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=95"
                    alt="Restored portrait with authentic texture and clear details"
                    className="w-full h-full object-cover"
                  />
                )}

                {activeView === 'split' && (
                  <div className="relative w-full h-full flex">
                    {/* Left half: Damaged */}
                    <div className="w-1/2 h-full overflow-hidden relative border-r-2 border-[#b5965e]">
                      <img
                        src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=40&sepia=80"
                        alt="Damaged side"
                        className="absolute top-0 left-0 h-full max-w-none"
                        style={{ width: '200%' }}
                      />
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#1a1a1a]/85 text-[10px] uppercase font-mono text-white">
                        1962 Damaged
                      </span>
                    </div>

                    {/* Right half: Restored */}
                    <div className="w-1/2 h-full overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=95"
                        alt="Restored side"
                        className="absolute top-0 right-0 h-full max-w-none"
                        style={{ width: '200%' }}
                      />
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#1a1a1a]/85 text-[10px] uppercase font-mono text-[#b5965e] font-bold">
                        2025 Restored
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Caption & Vault Note */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#1a1a1a88]">
                <span>Case study: 60-year ancestral portrait preserved for Patil family</span>
                <span className="text-[#b5965e] font-mono font-bold">Vault ID #FC-4190</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
