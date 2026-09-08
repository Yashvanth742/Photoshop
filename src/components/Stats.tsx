import { useEffect, useState, useRef } from 'react';
import { Award, Users, Camera, Star } from 'lucide-react';

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: '15+',
      label: 'Years Experience',
      subtext: 'Mastering studio light & portraits since 2011',
      icon: Award,
    },
    {
      value: '2,000+',
      label: 'Happy Clients',
      subtext: 'Couples, families & executives across state',
      icon: Users,
    },
    {
      value: '10K+',
      label: 'Photos Delivered',
      subtext: 'High-res digital files & museum lab prints',
      icon: Camera,
    },
    {
      value: '4.9/5',
      label: 'Google Rating',
      subtext: 'Based on 480+ verified client testimonials',
      icon: Star,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-[#fdfbf7] border-b border-[#1a1a1a1a] py-10 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a1a]">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`pt-6 sm:pt-0 px-3 sm:px-6 flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#fdfbf7] shrink-0">
                    <Icon className="w-4 h-4 text-[#b5965e]" />
                  </div>
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#1a1a1a] tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#1a1a1a] mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#1a1a1a88] mt-1 font-normal leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
