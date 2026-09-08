import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles, Phone, User } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { useToast } from './Toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  const { showToast } = useToast();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(
    typeof defaultService === 'string' && defaultService ? defaultService : 'Portrait Photography'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (typeof defaultService === 'string' && defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      showToast('Please enter your name and phone number', 'error');
      return;
    }

    const ref = `FC-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
    showToast(`Booking requested! Confirmation #${ref}`, 'success');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#ffffff] border border-[#1a1a1a1a] rounded-3xl shadow-2xl overflow-hidden animate-scaleUp">
        {/* Modal Top Accent Header */}
        <div className="p-6 pb-4 border-b border-[#1a1a1a1a] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#b5965e] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Reservation Desk</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1a1a1a] mt-0.5">
              {isSubmitted ? 'Booking Confirmed' : 'Book a Session'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-[#fdfbf7] border border-[#1a1a1a1a] text-[#1a1a1a88] hover:text-[#1a1a1a] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          /* Realistic Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#b5965e]/20 border border-[#b5965e] flex items-center justify-center text-[#b5965e] mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#b5965e] font-bold">
                ✓ Request Received
              </span>
              <h4 className="font-serif text-2xl font-black text-[#1a1a1a]">
                Thank you, {fullName}!
              </h4>
              <p className="text-sm text-[#1a1a1a88] max-w-xs mx-auto leading-relaxed">
                Our studio team will contact you at <strong>+91 {phone}</strong> shortly to confirm
                session timing and lighting setup.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#1a1a1a1a] text-xs space-y-2 text-left">
              <div className="flex items-center justify-between text-[#1a1a1a66]">
                <span>Booking Reference:</span>
                <span className="font-mono text-[#b5965e] font-bold">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between text-[#1a1a1a66]">
                <span>Selected Service:</span>
                <span className="text-[#1a1a1a] font-bold">{service}</span>
              </div>
              <div className="flex items-center justify-between text-[#1a1a1a66]">
                <span>Preferred Slot:</span>
                <span className="text-[#1a1a1a] font-medium">
                  {preferredDate || 'Earliest available'} at {preferredTime}
                </span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#b5965e] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[#1a1a1a] mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-[#1a1a1a55] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rohini Patil"
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#1a1a1a] placeholder-[#1a1a1a44] focus:border-[#b5965e] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1a1a1a] mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-[#1a1a1a55] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98220 12345"
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#1a1a1a] placeholder-[#1a1a1a44] focus:border-[#b5965e] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-[#1a1a1a] mb-1 font-bold uppercase tracking-wider text-[10px]">
                Service Needed
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl p-2.5 text-xs text-[#1a1a1a] focus:border-[#b5965e] focus:outline-none font-medium"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} (Starts {s.startingPrice})
                  </option>
                ))}
                <option value="Custom Event / Shoot">Custom Event / Shoot</option>
              </select>
            </div>

            {/* Preferred Date & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[#1a1a1a] mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-[#1a1a1a55] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#1a1a1a] focus:border-[#b5965e] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1a1a1a] mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="w-3.5 h-3.5 text-[#1a1a1a55] absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#1a1a1a] focus:border-[#b5965e] focus:outline-none font-medium"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Natural Light)</option>
                    <option value="11:30 AM">11:30 AM (Studio Session)</option>
                    <option value="02:30 PM">02:30 PM (Matrimonial Portrait)</option>
                    <option value="04:30 PM">04:30 PM (Golden Hour / Evening)</option>
                    <option value="06:30 PM">06:30 PM (After-work Passport/Prints)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message / Special requests */}
            <div>
              <label className="block text-[#1a1a1a] mb-1 font-bold uppercase tracking-wider text-[10px]">
                Message / Outfit / Special Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Need 16 visa prints urgently + 1 framed family portrait."
                className="w-full bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl p-2.5 text-xs text-[#1a1a1a] placeholder-[#1a1a1a44] focus:border-[#b5965e] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#b5965e] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
              >
                Request Booking
              </button>
              <p className="text-[10px] text-[#1a1a1a66] text-center mt-2 font-medium">
                Walk-ins also welcome daily at our Ichalkaranji studio.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
