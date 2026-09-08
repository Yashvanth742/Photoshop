import { MessageSquare, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Concept',
      description: 'Select your session type—from biometric passport compliance to fine-art portraits or ancestral photo restoration.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Optical Capture & Scan',
      description: 'Visit our studio on Station Road for your shoot, or drop off your damaged physical prints for 2400 DPI optical scanning.',
      icon: Camera,
    },
    {
      number: '03',
      title: 'Master Retouching',
      description: 'Certified Photoshop artisans color grade, calibrate skin textures, and send digital soft proofs for your satisfaction.',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'Delivery & Vault Archive',
      description: 'Collect archival lab prints, receive soft copies instantly via WhatsApp, and access files anytime with your Photo Vault ID.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Four Refined Steps
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Simple, <span className="italic font-light text-[#b5965e]">Seamless Process.</span>
          </h2>
          <p className="text-base text-[#1a1a1a99] leading-relaxed">
            From initial consultation to lifelong digital preservation, every milestone is transparent and effortless.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[1px] bg-[#1a1a1a1a] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-[#ffffff] rounded-3xl p-7 border border-[#1a1a1a1a] hover:border-[#b5965e] transition-all duration-300 relative group flex flex-col justify-between shadow-sm hover:shadow-xl"
                >
                  <div>
                    {/* Top Row with Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] group-hover:bg-[#b5965e] group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-4xl font-black text-[#1a1a1a22] group-hover:text-[#b5965e] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-black text-[#1a1a1a] group-hover:text-[#b5965e] transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#1a1a1a88] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#1a1a1a1a] text-[11px] uppercase font-mono text-[#1a1a1a66] flex items-center justify-between">
                    <span>Phase 0{index + 1}</span>
                    <span className="text-[#b5965e] font-bold">Step {index + 1} of 4</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
