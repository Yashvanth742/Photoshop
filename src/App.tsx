import { useState } from 'react';
import { PageView } from './types';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { RestorationSection } from './components/RestorationSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BuildYourPhoto } from './components/BuildYourPhoto';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { InstagramGrid } from './components/InstagramGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PhotoVault } from './components/PhotoVault';
import { AboutPage } from './pages/AboutPage';
import { 
  ShieldCheck, 
  Search, 
  Printer, 
  ArrowLeft 
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);

  // Scroll to top on page navigation safely
  const handleNavigate = (page: PageView) => {
    if (typeof page === 'string') {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Ignore if iframe restricts window access
    }
  };

  const handleOpenBooking = (serviceName?: string | unknown) => {
    setBookingService(typeof serviceName === 'string' ? serviceName : undefined);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#fdfbf7] text-[#1a1a1a] font-sans selection:bg-[#b5965e]/20 selection:text-[#1a1a1a] relative">
        {/* Sticky Global Navigation */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={handleNavigate}
          onOpenBooking={handleOpenBooking}
          onOpenVault={() => handleNavigate('vault')}
        />

        {/* Page Content Rendering */}
        <main className="relative z-10">
          {currentPage === 'home' && (
            <>
              {/* 1. Full-screen Hero Section */}
              <Hero
                onOpenBooking={handleOpenBooking}
                onExploreWork={() => {
                  const el = document.getElementById('portfolio-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onNavigate={handleNavigate}
              />

              {/* 2. Trust / Business Stats Bar */}
              <Stats />

              {/* 3. Comprehensive Services Section */}
              <ServicesSection
                onOpenBooking={handleOpenBooking}
                onNavigateRestoration={() => handleNavigate('restoration')}
              />

              {/* 4. Interactive Before / After Editing Comparison Slider */}
              <BeforeAfterSlider />

              {/* 5. Photo Restoration Feature Section */}
              <RestorationSection onOpenBooking={handleOpenBooking} />

              {/* 6. Photo Vault & Lifelong Order Storage Spotlight Banner */}
              <section className="py-16 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative rounded-3xl bg-[#ffffff] border border-[#1a1a1a1a] p-8 sm:p-12 shadow-xl overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                      <div className="space-y-3 max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
                          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
                            Studio Archival Guarantee
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight">
                          Need That Same Photo Months Later?
                        </h3>
                        <p className="text-sm text-[#1a1a1a88] leading-relaxed">
                          Every photograph captured or restored at FrameCraft is preserved under a unique
                          Photo ID (e.g. <strong className="text-[#1a1a1a]">FC-8821</strong>). Whether you require 16 additional visa prints
                          or a framed canvas two years later, your master negatives and color curves remain secure.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                        <button
                          onClick={() => handleNavigate('vault')}
                          className="px-6 py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#b5965e] text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-2 cursor-pointer transition-all"
                        >
                          <Search className="w-4 h-4" />
                          <span>Search By Photo ID</span>
                        </button>
                        <button
                          onClick={() => handleOpenBooking('Photo Printing')}
                          className="px-6 py-3.5 rounded-full bg-[#ffffff] hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a1a] text-xs text-[#1a1a1a] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
                        >
                          <Printer className="w-4 h-4 text-[#b5965e]" />
                          <span>Order Lab Reprints</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Curated Masonry Portfolio Gallery with Lightbox */}
              <PortfolioSection />

              {/* 8. Imagine Your Photo Differently (Build Your Photo) */}
              <BuildYourPhoto onOpenBooking={handleOpenBooking} />

              {/* 9. Transparent Pricing Packages */}
              <PricingSection onSelectPlan={(plan) => handleOpenBooking(plan)} />

              {/* 10. Verified Testimonials Carousel */}
              <TestimonialsSection />

              {/* 11. Why Choose Us (4 Pillars) */}
              <WhyChooseUs />

              {/* 12. 4-Step Process Section */}
              <ProcessSection />

              {/* 13. Social Proof & Instagram Grid */}
              <InstagramGrid />

              {/* 14. Contact Section with Address, Hours, and Enquiry Form */}
              <ContactSection />
            </>
          )}

          {/* Dedicated Subpages */}
          {currentPage === 'services' && (
            <div className="pt-20">
              <SubpageHeader
                title="Our Studio Services"
                subtitle="Complete photographic capture, certified digital retouching, and museum-grade printing under one roof."
                onBack={() => handleNavigate('home')}
              />
              <ServicesSection
                onOpenBooking={handleOpenBooking}
                onNavigateRestoration={() => handleNavigate('restoration')}
              />
            </div>
          )}

          {currentPage === 'portfolio' && (
            <div className="pt-20">
              <SubpageHeader
                title="Photography Portfolio"
                subtitle="Explore our body of work spanning royal Indian weddings, executive portraits, and creative digital composites."
                onBack={() => handleNavigate('home')}
              />
              <PortfolioSection />
            </div>
          )}

          {currentPage === 'restoration' && (
            <div className="pt-20">
              <SubpageHeader
                title="Ancestral Photo Restoration"
                subtitle="Preserving faded, scratched, and water-damaged photographs with 2400 DPI optical scanning and digital reconstruction."
                onBack={() => handleNavigate('home')}
              />
              <RestorationSection onOpenBooking={handleOpenBooking} />
              <BeforeAfterSlider />
            </div>
          )}

          {currentPage === 'vault' && (
            <div className="pt-20">
              <SubpageHeader
                title="FrameCraft Photo Vault & Order Lookup"
                subtitle="Search your permanent Studio Photo ID or registered phone number to download original high-res soft copies or order lab reprints."
                onBack={() => handleNavigate('home')}
              />
              <PhotoVault />
            </div>
          )}

          {currentPage === 'pricing' && (
            <div className="pt-20">
              <SubpageHeader
                title="Studio Rates & Packages"
                subtitle="Transparent pricing for passport photos, studio portraits, and comprehensive wedding coverage."
                onBack={() => handleNavigate('home')}
              />
              <PricingSection onSelectPlan={(plan) => handleOpenBooking(plan)} />
            </div>
          )}

          {currentPage === 'about' && (
            <div className="pt-20">
              <AboutPage onOpenBooking={handleOpenBooking} />
            </div>
          )}

          {currentPage === 'contact' && (
            <div className="pt-20">
              <SubpageHeader
                title="Contact FrameCraft Studio"
                subtitle="Visit our climate-controlled studio on Station Road, Ichalkaranji, or reach out to reserve your session."
                onBack={() => handleNavigate('home')}
              />
              <ContactSection />
            </div>
          )}
        </main>

        {/* Global Dark Luxury Footer */}
        <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

        {/* Mobile Sticky Bar: Call Now | Book Session | Photo Vault */}
        <MobileStickyBar
          onOpenBooking={() => handleOpenBooking()}
          onOpenVault={() => handleNavigate('vault')}
        />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          defaultService={bookingService}
        />
      </div>
    </ToastProvider>
  );
}

// Subpage Header Helper
function SubpageHeader({
  title,
  subtitle,
  onBack,
}: {
  title: string;
  subtitle: string;
  onBack: () => void;
  }) {
  return (
    <div className="bg-[#ffffff] border-b border-[#1a1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a88] hover:text-[#b5965e] transition-colors mb-4 cursor-pointer font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-[#1a1a1a88] mt-2 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
