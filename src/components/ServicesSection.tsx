import React, { useState, ElementType } from 'react';
import { 
  Camera, 
  HeartHandshake, 
  FileBadge, 
  Sliders, 
  Sparkles, 
  Printer, 
  BookOpen, 
  HardDrive, 
  ArrowRight,
  Clock,
  Check,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigateRestoration: () => void;
}

const ICON_MAP: Record<string, ElementType> = {
  Camera,
  HeartHandshake,
  FileBadge,
  Sliders,
  Sparkles,
  Printer,
  BookOpen,
  HardDrive
};

export function ServicesSection({ onOpenBooking, onNavigateRestoration }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    if (service.id === 'photo-restoration') {
      onNavigateRestoration();
    } else {
      setSelectedService(service);
    }
  };

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Studio Capabilities
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Everything Your Photos Need. <span className="italic font-light text-[#b5965e]">Mastered.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#1a1a1a99] font-normal max-w-2xl mx-auto leading-relaxed">
            Professional camera capture and fine digital craft under one roof—from compliant biometric ID prints to heirloom wedding folios.
          </p>
        </div>

        {/* 8 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Camera;

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                className="group relative bg-[#ffffff] rounded-2xl overflow-hidden border border-[#1a1a1a1a] hover:border-[#b5965e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col cursor-pointer"
              >
                {/* Card Image with subtle zoom on hover */}
                <div className="relative h-48 overflow-hidden bg-[#f4f1e8]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon badge floating over image */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#fdfbf7] group-hover:bg-[#b5965e] transition-colors shadow-md">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Price Tag badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#1a1a1a]/90 backdrop-blur-md text-[10px] font-bold text-[#fdfbf7] font-mono uppercase tracking-wider">
                    Starts {service.startingPrice}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1a1a1a] group-hover:text-[#b5965e] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#1a1a1a88] leading-relaxed line-clamp-3 mb-4">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1a1a1a1a] flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-[11px] text-[#1a1a1a66] font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#b5965e]" /> {service.turnaround.split('/')[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#1a1a1a] uppercase tracking-wider text-[11px] group-hover:text-[#b5965e] group-hover:translate-x-1 transition-all">
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#1a1a1a] text-white border border-[#ffffff15] rounded-3xl overflow-hidden shadow-2xl animate-scaleUp">
            {/* Modal Header Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1a1a1a]/80 border border-[#ffffff22] flex items-center justify-center text-white hover:bg-[#b5965e] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#b5965e] font-bold">
                  FrameCraft Studio Service
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-[#d1d1d1] leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b5965e] mb-3">
                  Service Highlights & Guarantee
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#e5e5e5]">
                      <div className="w-4 h-4 rounded-full bg-[#b5965e]/20 flex items-center justify-center text-[#b5965e] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#262626] border border-[#ffffff15]">
                <div>
                  <div className="text-[10px] text-[#888] uppercase tracking-widest font-bold">
                    Turnaround Time
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {selectedService.turnaround}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#888] uppercase tracking-widest font-bold">
                    Base Pricing
                  </div>
                  <div className="text-sm font-bold text-[#b5965e] mt-0.5">
                    Starting {selectedService.startingPrice}
                  </div>
                </div>
                <button
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    onOpenBooking(svcName);
                  }}
                  className="px-6 py-3 rounded-full bg-[#b5965e] hover:bg-[#a3844e] text-white font-bold text-xs tracking-widest uppercase shadow-md transition-all cursor-pointer"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
