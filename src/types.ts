export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  turnaround: string;
  startingPrice: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Portraits' | 'Events' | 'Products' | 'Restoration' | 'Creative Editing';
  image: string;
  client: string;
  year: string;
  description: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface ComparisonExample {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  improvements: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  category: string;
  price: string;
  turnaround: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  service: string;
  quote: string;
  date: string;
}

export interface PhotoArchiveRecord {
  id: string; // e.g. "FC-8821"
  customerName: string;
  phoneNumber: string;
  email?: string;
  serviceType: string;
  dateArchived: string;
  imageUrl: string;
  thumbnailUrl?: string;
  resolution: string;
  printSize: string;
  finish: 'Matte' | 'Glossy' | 'Lustre' | 'Metallic';
  reprintCount: number;
  notes: string;
  tags: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export type PageView = 'home' | 'services' | 'portfolio' | 'restoration' | 'vault' | 'pricing' | 'about' | 'contact';
