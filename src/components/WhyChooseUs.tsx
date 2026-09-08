import { Award, Zap, Layers, HeartHandshake, ShieldCheck } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Master Retouching',
      description:
        'Certified Adobe digital retouchers and master portrait photographers with 15+ years of craft in lighting, posing, and color science.',
      icon: Award,
    },
    {
      title: 'Rapid Turnaround',
      description:
        'Biometric passport prints delivered in 10 minutes, high-res portraits delivered within 24 hours, and urgent reprints on demand.',
      icon: Zap,
    },
    {
      title: 'One-Stop Studio',
      description:
        'Comprehensive photography, Photoshop editing, antique photo restoration, and fine-art 12-color printing under one trusted roof.',
      icon: Layers,
    },
    {
      title: 'Personal Attention',
      description:
        'Every wedding couple, family heirloom, and executive portrait receives one-on-one consultation, test proofs, and custom framing.',
      icon: HeartHandshake,
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
              The Studio Standard
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Why Discerning Clients <span className="italic font-light text-[#b5965e]">Choose Us.</span>
          </h2>
          <p className="text-base text-[#1a1a1a99] leading-relaxed">
            Built on integrity, calibrated optical optics, and profound respect for the milestones entrusted to our care.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#ffffff] rounded-3xl p-7 sm:p-8 border border-[#1a1a1a1a] hover:border-[#b5965e] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] group-hover:bg-[#b5965e] group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-black text-[#1a1a1a] group-hover:text-[#b5965e] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1a1a1a88] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1a1a1a1a] flex items-center justify-between text-[11px] text-[#1a1a1a66] font-mono">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-[#b5965e] font-bold">Studio Grade</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
