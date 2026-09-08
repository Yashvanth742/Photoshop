import { Check, Shield, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing-section" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Investment Tiers
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Investment in <span className="italic font-light text-[#b5965e]">Permanence.</span>
          </h2>
          <p className="text-base text-[#1a1a1a99] leading-relaxed">
            Transparent, honest pricing with zero lab surprises. Every booking includes strobe lighting,
            calibrated master retouching, and lifetime Photo Vault digital preservation.
          </p>
        </div>

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl flex flex-col justify-between p-7 sm:p-9 transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-[#1a1a1a] text-white border-2 border-[#b5965e] shadow-2xl -translate-y-2'
                  : 'bg-[#ffffff] text-[#1a1a1a] border border-[#1a1a1a1a] shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    plan.isPopular
                      ? 'bg-[#b5965e] text-white shadow-md'
                      : 'bg-[#1a1a1a] text-white'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-1 ${
                  plan.isPopular ? 'text-[#b5965e]' : 'text-[#1a1a1a66]'
                }`}>
                  {plan.category}
                </div>
                <h3 className={`font-serif text-2xl sm:text-3xl font-black mb-3 ${
                  plan.isPopular ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${
                  plan.isPopular ? 'text-[#ccc]' : 'text-[#1a1a1a88]'
                }`}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className={`py-5 border-y mb-6 ${
                  plan.isPopular ? 'border-[#ffffff15]' : 'border-[#1a1a1a1a]'
                }`}>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom Quote' && (
                      <span className={`text-xs ${
                        plan.isPopular ? 'text-[#888]' : 'text-[#1a1a1a66]'
                      }`}>/ package</span>
                    )}
                  </div>
                  <div className={`text-[11px] font-mono font-bold mt-1 ${
                    plan.isPopular ? 'text-[#b5965e]' : 'text-[#b5965e]'
                  }`}>
                    Turnaround: {plan.turnaround}
                  </div>
                </div>

                {/* Feature Inclusions Checklist */}
                <div className="space-y-3 mb-8">
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${
                    plan.isPopular ? 'text-[#b5965e]' : 'text-[#1a1a1a66]'
                  }`}>
                    Package Inclusions:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                          plan.isPopular
                            ? 'bg-[#b5965e] text-[#1a1a1a]'
                            : 'bg-[#b5965e]/20 text-[#b5965e]'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={`leading-snug ${
                        plan.isPopular ? 'text-[#ddd]' : 'text-[#1a1a1a]'
                      }`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-[#b5965e] hover:bg-[#a3844e] text-white shadow-md'
                    : 'border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
