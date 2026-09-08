import { useState } from 'react';
import { Sparkles, Palette, Layers, Eye, ArrowRight, Check } from 'lucide-react';

interface BuildYourPhotoProps {
  onOpenBooking: (serviceName?: string) => void;
}

type BackgroundOption = 'Studio' | 'Outdoor' | 'Office' | 'Wedding' | 'Custom';
type StyleOption = 'Natural' | 'Cinematic' | 'Classic' | 'Black & White';
type FinishOption = 'Matte' | 'Glossy' | 'Premium';

const BACKGROUND_IMAGES: Record<BackgroundOption, string> = {
  Studio: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  Outdoor: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
  Office: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
  Wedding: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85',
  Custom: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
};

export function BuildYourPhoto({ onOpenBooking }: BuildYourPhotoProps) {
  const [background, setBackground] = useState<BackgroundOption>('Studio');
  const [style, setStyle] = useState<StyleOption>('Cinematic');
  const [finish, setFinish] = useState<FinishOption>('Premium');

  const backgrounds: BackgroundOption[] = ['Studio', 'Outdoor', 'Office', 'Wedding', 'Custom'];
  const styles: StyleOption[] = ['Natural', 'Cinematic', 'Classic', 'Black & White'];
  const finishes: FinishOption[] = ['Matte', 'Glossy', 'Premium'];

  const getFilterStyle = () => {
    switch (style) {
      case 'Black & White':
        return 'grayscale contrast-125 brightness-95';
      case 'Cinematic':
        return 'contrast-115 saturate-110 sepia-[0.12] brightness-95';
      case 'Classic':
        return 'contrast-105 saturate-95 sepia-[0.25] brightness-98';
      case 'Natural':
      default:
        return 'contrast-100 saturate-100 brightness-100';
    }
  };

  const getFinishOverlay = () => {
    switch (finish) {
      case 'Glossy':
        return 'bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none';
      case 'Premium':
        return 'bg-[radial-gradient(ellipse_at_top_right,rgba(181,150,94,0.2),transparent_70%)] pointer-events-none';
      case 'Matte':
      default:
        return 'bg-black/5 pointer-events-none';
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fdfbf7] relative overflow-hidden border-b border-[#1a1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Visual Lab Simulation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Imagine Your Photo <span className="italic font-light text-[#b5965e]">Differently.</span>
          </h2>
          <p className="text-base text-[#1a1a1a99] leading-relaxed">
            Test how lighting backdrops, color grading curves, and museum-grade papers
            harmonize before booking your studio date.
          </p>
        </div>

        {/* Interactive Workspace: Controls on Left, Live Mock Preview on Right */}
        <div className="max-w-5xl mx-auto bg-[#ffffff] rounded-3xl border border-[#1a1a1a1a] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* 1. Background Option */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#b5965e]" />
                    <span>1. Background Environment</span>
                  </span>
                  <span className="text-xs text-[#b5965e] font-mono font-bold">{background}</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {backgrounds.map((bg) => (
                    <button
                      key={bg}
                      onClick={() => setBackground(bg)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                        background === bg
                          ? 'bg-[#1a1a1a] text-white shadow-sm'
                          : 'bg-[#fdfbf7] text-[#1a1a1a88] hover:text-[#1a1a1a] border border-[#1a1a1a1a]'
                      }`}
                    >
                      {bg}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Style Option */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-[#b5965e]" />
                    <span>2. Photoshop Tonal Curve</span>
                  </span>
                  <span className="text-xs text-[#b5965e] font-mono font-bold">{style}</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {styles.map((st) => (
                    <button
                      key={st}
                      onClick={() => setStyle(st)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                        style === st
                          ? 'bg-[#1a1a1a] text-white shadow-sm'
                          : 'bg-[#fdfbf7] border border-[#1a1a1a1a] text-[#1a1a1a88] hover:text-[#1a1a1a]'
                      }`}
                    >
                      <span>{st}</span>
                      {style === st && <Check className="w-3.5 h-3.5 text-[#b5965e]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Finish Option */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-[#b5965e]" />
                    <span>3. Physical Print Finish</span>
                  </span>
                  <span className="text-xs text-[#b5965e] font-mono font-bold">{finish}</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {finishes.map((fn) => (
                    <button
                      key={fn}
                      onClick={() => setFinish(fn)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                        finish === fn
                          ? 'bg-[#1a1a1a] text-white shadow-sm'
                          : 'bg-[#fdfbf7] border border-[#1a1a1a1a] text-[#1a1a1a88] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {fn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Prescription */}
              <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#1a1a1a1a] text-xs space-y-1">
                <span className="text-[#1a1a1a66] uppercase text-[10px] font-bold tracking-wider">
                  Simulated Formulation
                </span>
                <p className="text-[#1a1a1a] font-medium leading-relaxed">
                  {background} Backdrop • {style} Color Curve • {finish} Paper Finish
                </p>
              </div>
            </div>

            {/* Right Preview Column */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-[#1a1a1a] bg-[#f4f1e8]">
                {/* Visual Image with active dynamic filters */}
                <img
                  src={BACKGROUND_IMAGES[background]}
                  alt={`Simulated photo with ${background} backdrop in ${style} style`}
                  className={`w-full h-full object-cover transition-all duration-500 ${getFilterStyle()}`}
                />

                {/* Simulated Finish Sheen / Grain Overlay */}
                <div className={`absolute inset-0 ${getFinishOverlay()}`} />

                {/* Simulated Watermark Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1a1a1a]/85 backdrop-blur-md text-[10px] font-mono text-[#b5965e] font-bold uppercase tracking-wider">
                  Live Preview • {style}
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#1a1a1a]/85 backdrop-blur-md text-[10px] font-mono text-white font-bold">
                  {finish} Texture
                </div>
              </div>

              {/* Bottom CTA Hook */}
              <div className="w-full mt-6 text-center">
                <button
                  onClick={() => onOpenBooking(`Custom ${style} ${background} Session`)}
                  className="px-6 py-3 rounded-full bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#b5965e] transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book This Exact Look</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
