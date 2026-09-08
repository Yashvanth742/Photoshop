import { Camera, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export function AboutPage({ onOpenBooking }: AboutPageProps) {
  const equipment = [
    { name: 'Sony Alpha 7R V (61 Megapixels)', desc: 'Ultra-resolution sensors for lifelike skin texture and large-format gallery prints' },
    { name: 'Profoto B10X Plus Studio Strobes', desc: 'Consistent 5600K daylight-balanced illumination with soft, wrap-around light shapers' },
    { name: 'Epson SureColor 12-Color Archival Pigment Lab', desc: 'Museum-certified non-fading photographic prints rated for 75+ years' },
    { name: 'Epson Expression 2400 DPI Transparency Scanner', desc: 'Optical dust and scratch removal for antique glass plates, slides, and fragile family photographs' },
  ];

  return (
    <div className="py-24 bg-[#fdfbf7] text-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Our Heritage & Craft
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] tracking-tight">
            Preserving Ichalkaranji’s Most Precious Moments <span className="italic font-light text-[#b5965e]">Since 2011.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#1a1a1a99] leading-relaxed">
            What started as an artisan darkroom and digital retouching atelier has evolved into western
            Maharashtra’s most trusted full-service photographic studio.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#1a1a1a1a] shadow-xl bg-[#f4f1e8]">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=85"
                alt="FrameCraft Studio editing suite and master color grading workstation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#ffffff] border border-[#1a1a1a1a] shadow-xl hidden sm:block">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#b5965e] font-bold">STATION ROAD</span>
              <div className="font-serif text-xl font-black text-[#1a1a1a]">15+ Years of Light</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#1a1a1a]">
              Where Optical Science Meets Authentic Storytelling
            </h2>
            <p className="text-sm text-[#1a1a1a88] leading-relaxed">
              At FrameCraft Photo Studio, photography is not just clicking a shutter—it is an art of
              trust. When a family hands us a fragile, water-damaged photograph of their elders, or
              when a bride walks into our studio on her wedding morning, we understand the sacred value
              of that memory.
            </p>
            <p className="text-sm text-[#1a1a1a88] leading-relaxed">
              We never apply generic AI filters or artificial plastic smoothing. Instead, our certified
              retouchers hand-sculpt light, preserve authentic skin pores, reconstruct torn vintage
              prints, and print on archival Kodak and Fujifilm media that will remain radiant for generations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#1a1a1a1a]">
              <div>
                <span className="font-serif text-4xl font-black text-[#b5965e]">2,000+</span>
                <p className="text-xs text-[#1a1a1a66] mt-0.5 font-bold uppercase tracking-wider">Weddings & Families</p>
              </div>
              <div>
                <span className="font-serif text-4xl font-black text-[#b5965e]">100%</span>
                <p className="text-xs text-[#1a1a1a66] mt-0.5 font-bold uppercase tracking-wider">Zero-Rejection Visa Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Equipment & Calibration Standards */}
        <div className="bg-[#ffffff] border border-[#1a1a1a1a] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-[#b5965e] tracking-widest font-bold">
              OUR HARDWARE & OPTICS PIPELINE
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-black text-[#1a1a1a] mt-1">
              Studio Gear & Archival Calibration
            </h3>
            <p className="text-xs text-[#1a1a1a88] mt-2 leading-relaxed">
              We invest in world-class optical systems so your physical prints match exact colors without
              unpleasant color shifts or chromatic distortion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fdfbf7] border border-[#1a1a1a1a] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a1a1a] mb-1">{item.name}</h4>
                  <p className="text-xs text-[#1a1a1a88] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4">
            Ready to capture your next milestone?
          </h3>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-4 rounded-full bg-[#1a1a1a] hover:bg-[#b5965e] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
          >
            Book a Studio Session
          </button>
        </div>
      </div>
    </div>
  );
}
