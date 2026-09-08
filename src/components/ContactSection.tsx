import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Navigation, 
  ArrowRight
} from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';
import { useToast } from './Toast';

export function ContactSection() {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Please provide your name and phone number', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you, ${name}! Your enquiry has been received. Our studio desk will call you shortly.`, 'success');
      setName('');
      setPhone('');
      setMessage('');
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-[#1a1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Address & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
                  Visit Our Studio
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
                Let's Create Something <span className="italic font-light text-[#b5965e]">Beautiful.</span>
              </h2>
              <p className="text-base text-[#1a1a1a99] leading-relaxed">
                Whether planning a wedding celebration, restoring a treasured family portrait, or requiring an instant visa print,
                we look forward to welcoming you to our physical studio.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-3.5 text-sm">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#ffffff] border border-[#1a1a1a1a] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a66]">
                    Studio Address
                  </div>
                  <div className="text-sm font-bold text-[#1a1a1a] mt-0.5 leading-snug">
                    {STUDIO_INFO.address}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#ffffff] border border-[#1a1a1a1a] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a66]">
                    Direct Telephone
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4 mt-0.5">
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-sm font-bold text-[#b5965e] hover:underline"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                    <span className="hidden sm:inline text-[#1a1a1a33]">•</span>
                    <a
                      href={`tel:${STUDIO_INFO.secondaryPhone}`}
                      className="text-sm font-medium text-[#1a1a1a88] hover:text-[#1a1a1a]"
                    >
                      {STUDIO_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#ffffff] border border-[#1a1a1a1a] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] shrink-0 mt-0.5 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a66]">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-sm font-bold text-[#1a1a1a] hover:text-[#b5965e] mt-0.5 block"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#ffffff] border border-[#1a1a1a1a] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#b5965e] shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a66]">
                    Opening Hours
                  </div>
                  <div className="text-xs text-[#1a1a1a] font-medium mt-0.5">
                    <div>{STUDIO_INFO.hours.weekdays}</div>
                    <div className="text-[#1a1a1a88]">{STUDIO_INFO.hours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Google Maps Card Placeholder */}
            <div className="relative rounded-3xl overflow-hidden border border-[#1a1a1a1a] bg-[#ffffff] p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-xs text-[#1a1a1a88]">
                <span className="flex items-center gap-1.5 font-bold text-[#1a1a1a]">
                  <Navigation className="w-3.5 h-3.5 text-[#b5965e]" />
                  Ichalkaranji Central Station Road
                </span>
                <span className="text-[11px] font-mono text-[#1a1a1a66]">Near Rajwada Chowk</span>
              </div>
              <div className="relative h-28 rounded-2xl overflow-hidden bg-[#f4f1e8] border border-[#1a1a1a1a] flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] text-[#b5965e] flex items-center justify-center shadow-md font-bold mb-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#1a1a1a]">FrameCraft Studio</span>
                  <span className="text-[10px] text-[#1a1a1a66]">Free dedicated parking in front of studio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] border border-[#1a1a1a1a] rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#b5965e] font-bold">
                  FAST IN-STUDIO DISPATCH
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-black text-[#1a1a1a] mt-1">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-[#1a1a1a88] mt-1">
                  Fill out your details below and our lead studio manager will respond within 2 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1a1a1a] mb-1.5 font-bold uppercase tracking-wider text-[10px]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Patil"
                      className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl p-3.5 text-xs text-[#1a1a1a] placeholder-[#1a1a1a44] focus:border-[#b5965e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1a1a1a] mb-1.5 font-bold uppercase tracking-wider text-[10px]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98220 00000"
                      className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl p-3.5 text-xs text-[#1a1a1a] placeholder-[#1a1a1a44] focus:border-[#b5965e] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1a1a1a] mb-1.5 font-bold uppercase tracking-wider text-[10px]">
                    Service of Interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl p-3.5 text-xs text-[#1a1a1a] focus:border-[#b5965e] focus:outline-none font-medium"
                  >
                    <option value="General Enquiry">General Studio Enquiry</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Wedding & Event Photography">Wedding & Event Photography</option>
                    <option value="Passport & Visa ID Photos">Passport & Visa ID Photos</option>
                    <option value="Photo Restoration">Photo Restoration</option>
                    <option value="Lab Photo Printing">Lab Photo Printing & Framing</option>
                    <option value="Album Design">Album Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1a1a1a] mb-1.5 font-bold uppercase tracking-wider text-[10px]">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about dates, preferred session aesthetic, or photo restoration specifications..."
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl p-3.5 text-xs text-[#1a1a1a] placeholder-[#1a1a1a44] focus:border-[#b5965e] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#1a1a1a] text-white hover:bg-[#b5965e] font-bold text-xs uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
