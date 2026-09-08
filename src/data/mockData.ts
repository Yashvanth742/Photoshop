import { 
  ServiceItem, 
  PortfolioItem, 
  ComparisonExample, 
  PricingPlan, 
  Testimonial, 
  PhotoArchiveRecord 
} from '../types';

export const STUDIO_INFO = {
  name: 'FrameCraft Photo Studio',
  tagline: 'Professional Photography • Editing • Printing',
  address: 'Station Road, Near Rajwada Chowk, Ichalkaranji, Maharashtra 416115',
  phone: '+91 98220 14890',
  secondaryPhone: '+91 230 242 8890',
  email: 'contact@framecraftstudio.in',
  instagram: '@framecraft_studio',
  hours: {
    weekdays: 'Mon–Sat: 9:00 AM – 8:30 PM',
    sunday: 'Sunday: 10:00 AM – 5:00 PM'
  },
  stats: {
    yearsExperience: '15+',
    happyCustomers: '2,000+',
    photosDelivered: '10K+',
    rating: '4.9/5'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'portrait',
    title: 'Portrait Photography',
    shortDesc: 'Professional portraits for personal, professional, matrimonial and social profiles.',
    fullDesc: 'Shot with master strobe lighting in our climate-controlled studio. We coach poses, adjust lighting ratios, and deliver flattering, magazine-grade headshots and portraits.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    iconName: 'Camera',
    turnaround: 'Same-day soft copy / 24 hrs prints',
    startingPrice: '₹999',
    features: ['High-end strobe lighting setup', 'Wardrobe & posture guidance', 'Subtle natural skin frequency separation', 'Print & high-res digital release']
  },
  {
    id: 'wedding',
    title: 'Wedding Photography',
    shortDesc: 'Capture every sacred ritual and joyful emotion of your special day forever.',
    fullDesc: 'Specialized in Maharashtrian, South Indian, and contemporary royal weddings. Dual-cinematographer setups, candid storytelling, pre-wedding couple shoots, and heirloom albums.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    iconName: 'HeartHandshake',
    turnaround: 'Highlights in 48 hrs / Full album in 15 days',
    startingPrice: 'Custom Quote',
    features: ['Multi-camera 4K coverage', 'Pre-wedding outdoor shoot', 'Traditional ritual coverage (Haldi, Sangeet)', 'Custom leatherette album included']
  },
  {
    id: 'passport',
    title: 'Passport & ID Photos',
    shortDesc: 'Professional, biometric-compliant photographs for passports, visas, and government exams.',
    turnaround: 'Ready in 5–10 minutes',
    startingPrice: '₹199',
    fullDesc: 'Strictly formatted to international specifications: Indian Passport, US Visa 2x2, Schengen, Canadian PR, OCI, and civil service exam criteria with zero-rejection guarantee.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    iconName: 'FileBadge',
    features: ['Exact millimeter calibration', 'Pure white or matte off-white background', 'Soft diffuse lighting for no shadows', 'Printed on archival Kodak paper + digital email']
  },
  {
    id: 'photoshop-editing',
    title: 'Photoshop & Photo Editing',
    shortDesc: 'Professional retouching, background removal, color grading, and creative digital artistry.',
    fullDesc: 'Our certified Adobe digital artists perform non-destructive dodge & burn, frequency separation, object removal, lighting harmonization, and editorial compositing.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sliders',
    turnaround: 'Within 4 to 12 hours',
    startingPrice: '₹299',
    features: ['Frequency separation skin retouching', 'Stray hair cleanup & teeth whitening', 'Background replacement & lighting match', 'Photoshop PSD raw archives preserved']
  },
  {
    id: 'photo-restoration',
    title: 'Photo Restoration',
    shortDesc: 'Restore damaged, faded, scratched, and water-damaged photographs to pristine condition.',
    fullDesc: 'Preserve your ancestral heritage. We carefully scan fragile prints at 2400 DPI, digitally reconstruct tears, remove severe creases, correct faded chemical dyes, and re-print.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
    turnaround: '2 to 4 business days',
    startingPrice: '₹499',
    features: ['Tear, crease & scratch repair', 'Colorization of black & white photos', 'Facial feature digital reconstruction', 'Archival preservation guarantee']
  },
  {
    id: 'photo-printing',
    title: 'Photo Printing',
    shortDesc: 'Lab-grade photographic prints in standard, large-format, canvas, and fine-art finishes.',
    fullDesc: 'Using original 12-color pigment archival inks and genuine Fujifilm & Kodak professional photo paper that will not fade for 75+ years.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    iconName: 'Printer',
    turnaround: '15 minutes while you wait',
    startingPrice: '₹30',
    features: ['Sizes from 4x6" to 24x36" poster frames', 'Lustre, Glossy, Metallic & Canvas media', 'True color-calibrated printing pipeline', 'Custom frame fitting available']
  },
  {
    id: 'album-design',
    title: 'Album Design',
    shortDesc: 'Handcrafted luxury wedding, birthday, and anniversary layflat photo books.',
    fullDesc: 'Custom-designed layouts with flush-mount rigid pages, Italian leatherette or acrylic glass covers, gold foil embossing, and magnetic closure keepsake presentation boxes.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    iconName: 'BookOpen',
    turnaround: '7 to 10 working days',
    startingPrice: '₹4,500',
    features: ['Seamless layflat panorama spreads', 'Velvet & silk touch laminate finishes', 'Laser-etched gold monogram cover', 'Digital flip-book proofing prior to print']
  },
  {
    id: 'digitization',
    title: 'Old Photo Digitization',
    shortDesc: 'Convert physical photographs, negatives, slides, and old albums into permanent digital files.',
    fullDesc: 'High-resolution archival scanning up to 4800 DPI with dust and scratch optical reduction. Delivered on secure cloud vault link and customized USB drives.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    iconName: 'HardDrive',
    turnaround: '1 to 3 days',
    startingPrice: '₹15 / photo',
    features: ['High-density flatbed & transparency scanner', 'TIFF and lossless JPEG formats', 'Color revival during scan pass', 'Permanent FrameCraft Photo Vault ID assignment']
  }
];

export const COMPARISON_EXAMPLES: ComparisonExample[] = [
  {
    id: 'portrait-retouching',
    title: 'Studio Portrait Retouching',
    category: 'Portrait & Skin',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=60&sat=-20&bri=-10',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90',
    description: 'High-end frequency separation preserves authentic pore texture while harmonizing skin tone, refining catchlights, and polishing studio shadows.',
    improvements: ['Natural micro-texture preservation', 'Catchlight enhancement in pupils', 'Subtle blemish & stray hair cleanup', 'Color harmony & depth grading']
  },
  {
    id: 'vintage-restoration',
    title: '1970s Vintage Family Restoration',
    category: 'Restoration',
    beforeImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=40&sepia=80',
    afterImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=90',
    description: 'Severely faded silver gelatin print scanned at 2400 DPI, digitally cleared of water stains and fold cracks, followed by authentic historical tinting.',
    improvements: ['Crease & tear line reconstruction', 'Chemical stain removal', 'Contrast curve rebalancing', 'Archival clarity enhancement']
  },
  {
    id: 'wedding-grading',
    title: 'Indian Wedding Cinematic Color Grading',
    category: 'Wedding',
    beforeImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=50&sat=-40&con=-20',
    afterImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=95',
    description: 'Raw sensor capture transformed into a rich, golden Indian wedding palette with luminous bridal jewelry highlights and velvet shadow tone curves.',
    improvements: ['Deep royal gold and crimson saturation', 'Highlight roll-off protection', 'Shadow detail recovery in silk garments', 'Cinematic editorial warmth']
  },
  {
    id: 'background-replacement',
    title: 'Studio Background Replacement & Lighting Match',
    category: 'Photoshop Artistry',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=60&sat=-15',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90',
    description: 'Extraction of complex hair strands, seamless composite onto luxury architectural studio backdrop with matched ambient bounce lighting.',
    improvements: ['Sub-pixel hair alpha matting', 'Directional rim lighting synthesis', 'Depth-of-field blur gradient', 'Ambient color temperature balance']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Royal Maharashtrian Bridal Portrait',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    client: 'Pooja & Rohan Deshmukh',
    year: '2025',
    description: 'Traditional Paithani sari with antique gold jewelry, captured in soft directional window light.',
    aspectRatio: 'tall'
  },
  {
    id: 'p2',
    title: 'Executive Studio Headshot',
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    client: 'Aditya Kulkarni, Tech Founder',
    year: '2025',
    description: 'Clean charcoal background with three-point rim light for LinkedIn and press releases.',
    aspectRatio: 'square'
  },
  {
    id: 'p3',
    title: '1962 Grandfather Portrait Restored',
    category: 'Restoration',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    client: 'Patil Family Archive',
    year: '2024',
    description: 'Repaired severe center fold tear and fungal spots on a 60-year-old passport size print.',
    aspectRatio: 'square'
  },
  {
    id: 'p4',
    title: 'Sangeet Night Dance Energy',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    client: 'Mehta & Shah Wedding Celebration',
    year: '2025',
    description: 'High-speed sync flash capturing vibrant motion blur and genuine laughter.',
    aspectRatio: 'wide'
  },
  {
    id: 'p5',
    title: 'Handcrafted Kolhapuri Footwear',
    category: 'Products',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    client: 'Heritage Leather Craft',
    year: '2024',
    description: 'Macro studio photography highlighting authentic stitching, leather grain, and brass studs.',
    aspectRatio: 'tall'
  },
  {
    id: 'p6',
    title: 'Surreal Double Exposure Portrait',
    category: 'Creative Editing',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    client: 'Vogue India Contest Submission',
    year: '2025',
    description: 'Blended profile portrait with blooming gulmohar foliage and golden sunlight flare.',
    aspectRatio: 'tall'
  },
  {
    id: 'p7',
    title: 'The Sacred Pheras Ritual',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    client: 'Snehal & Amit Jadhav',
    year: '2025',
    description: 'Cinematic sacred fire embers creating magical backlight during solemn wedding vows.',
    aspectRatio: 'wide'
  },
  {
    id: 'p8',
    title: 'Maternity Glow in Studio',
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    client: 'Dr. Neha & Shrikant',
    year: '2025',
    description: 'Warm cream drapery with soft butterfly lighting capturing motherly anticipation.',
    aspectRatio: 'square'
  },
  {
    id: 'p9',
    title: 'Handcrafted Silk Sari Textile Shoot',
    category: 'Products',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    client: 'Ichalkaranji Weaver Guild',
    year: '2024',
    description: 'High-resolution color fidelity photography for luxury textile catalog printing.',
    aspectRatio: 'tall'
  },
  {
    id: 'p10',
    title: 'Faded 1984 Wedding Album Reconstruction',
    category: 'Restoration',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    client: 'Savant Family',
    year: '2025',
    description: 'Full page de-warping, color restoration of magenta dye shift, and 8x12 archival reprint.',
    aspectRatio: 'wide'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic / ID Photos',
    badge: 'Express In-Studio',
    category: 'Passport & Quick Services',
    price: '₹199',
    turnaround: '10 Minutes',
    description: 'Guaranteed compliance with passport, US/Schengen visa, OCI, and civil exam regulations.',
    features: [
      '4–8 Physical Lab Prints',
      'Professional Studio Strobe Lighting',
      'Basic Skin Retouching & Clean Background',
      'High-Resolution Digital Soft Copy via WhatsApp/Email',
      'Permanent FrameCraft Photo Vault ID for instant reprints'
    ],
    ctaText: 'Choose Package',
    isPopular: false
  },
  {
    id: 'standard',
    name: 'Standard Portrait',
    badge: 'Most Popular',
    category: 'Studio Portrait & Matrimonial',
    price: '₹999',
    turnaround: '24 Hours',
    description: 'Ideal for personal portraits, LinkedIn headshots, matrimonial portfolios, and baby milestones.',
    features: [
      '30-Minute Dedicated Studio Session',
      'Up to 3 Outfit / Pose Changes',
      '10 Master Retouched High-Res Digital Files',
      'Two 6x8" Archival Lustre Prints Included',
      'Private Web Gallery for photo selection',
      'Lifetime Cloud Vault Storage with Reprint Discount'
    ],
    ctaText: 'Book Session',
    isPopular: true
  },
  {
    id: 'premium',
    name: 'Wedding & Events',
    badge: 'Bespoke Experience',
    category: 'Full Celebration Coverage',
    price: 'Custom Quote',
    turnaround: '15 Days Full Delivery',
    description: 'Comprehensive candid and traditional wedding storytelling with twin photographers.',
    features: [
      'Full Day / Multi-Day Ritual Coverage',
      'Dual Master Photographers (Candid + Traditional)',
      'Cinematic Editing & High-Fidelity Color Grading',
      'Handcrafted Italian Leather Layflat Album (40 Pages)',
      'Drone Aerial Perspectives (Venue Permitting)',
      'Complimentary Pre-Wedding Couple Shoot'
    ],
    ctaText: 'Get a Custom Quote',
    isPopular: false
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul M. Deshpande',
    role: 'Software Architect',
    location: 'Ichalkaranji',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    service: 'Executive Headshots & US Visa Photo',
    quote: 'Excellent photography and very professional editing. The final photos looked amazing and my US visa photos passed biometric inspection without a single question.',
    date: '2 weeks ago'
  },
  {
    id: 't2',
    name: 'Priya S. Kulkarni',
    role: 'Teacher & Heritage Enthusiast',
    location: 'Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    service: '50-Year-Old Photo Restoration',
    quote: 'We gave them an old family photograph of my late grandparents that was torn across the face. The restoration was incredible—my mother literally had tears in her eyes seeing it brought back to life.',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Amit K. Jadhav',
    role: 'Business Owner',
    location: 'Ichalkaranji',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    service: 'Wedding Album & Canvas Printing',
    quote: 'Very quick service and excellent print quality. What I love most is their Photo ID vault—I called them 8 months after our wedding with our ID and they reprinted 10 frames in two hours.',
    date: '3 months ago'
  },
  {
    id: 't4',
    name: 'Dr. Meera Patil',
    role: 'Dentist & Clinic Director',
    location: 'Sangli',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    service: 'Family Portrait & Framing',
    quote: 'The attention to lighting and genuine warmth during our studio shoot was remarkable. FrameCraft is by far the most polished studio in the region.',
    date: '4 months ago'
  }
];

export const INITIAL_PHOTO_VAULT: PhotoArchiveRecord[] = [
  {
    id: 'FC-8821',
    customerName: 'Ananya Deshmukh',
    phoneNumber: '9822014890',
    email: 'ananya.deshmukh@gmail.com',
    serviceType: 'Matrimonial Studio Portrait',
    dateArchived: '2024-11-14',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90',
    resolution: '6000 x 4000 px (24 MP RAW)',
    printSize: '8 x 12 inches (Lustre Finish)',
    finish: 'Lustre',
    reprintCount: 3,
    notes: 'Client requested warm backlight and natural skin texture. Approved for album reprint.',
    tags: ['Portrait', 'Studio', 'Lustre', 'Matrimonial']
  },
  {
    id: 'FC-7734',
    customerName: 'Vikram Joshi',
    phoneNumber: '9423011245',
    email: 'vikram.joshi.in@outlook.com',
    serviceType: 'US Visa 2x2 & Passport Biometric',
    dateArchived: '2024-09-02',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90',
    resolution: '3600 x 3600 px (600 DPI Biometric)',
    printSize: '2 x 2 inches (Sheet of 8)',
    finish: 'Matte',
    reprintCount: 4,
    notes: '100% white background, strictly aligned eye-level according to US Dept of State biometric rules.',
    tags: ['Passport', 'US Visa', 'Biometric', 'Matte']
  },
  {
    id: 'FC-9042',
    customerName: 'Rohan & Snehal Mehta',
    phoneNumber: '9890255410',
    email: 'rohan.mehta.textiles@gmail.com',
    serviceType: 'Royal Wedding Album Master Copy',
    dateArchived: '2024-12-28',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=90',
    resolution: '8256 x 5504 px (45 MP High-Res)',
    printSize: '12 x 36 inches Layflat Panorama',
    finish: 'Metallic',
    reprintCount: 2,
    notes: 'Cover embossed in gold leaf. 40 pages layflat. Extra 12x18 framed canvas delivered.',
    tags: ['Wedding', 'Heirloom Album', 'Panorama', 'Metallic']
  },
  {
    id: 'FC-4190',
    customerName: 'Late Vasantrao Patil (By Grandson Nikhil)',
    phoneNumber: '9764512389',
    email: 'nikhil.patil@yahoo.com',
    serviceType: '1968 Ancestral Photo Restoration',
    dateArchived: '2024-08-19',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=90',
    resolution: '4800 x 6400 px (Archival Scan)',
    printSize: '10 x 14 inches with Teakwood Frame',
    finish: 'Matte',
    reprintCount: 5,
    notes: 'Repaired water damage across lower right shoulder and restored sepia silver tone.',
    tags: ['Restoration', 'Heritage', 'Archival Scan', 'Teak Frame']
  },
  {
    id: 'FC-3312',
    customerName: 'Dr. Rajesh & Sunita Kulkarni',
    phoneNumber: '9823145670',
    email: 'dr.kulkarni.clinic@gmail.com',
    serviceType: 'Silver Jubilee Anniversary Family Portrait',
    dateArchived: '2024-10-05',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=90',
    resolution: '7200 x 4800 px (36 MP)',
    printSize: '16 x 24 inches Archival Canvas',
    finish: 'Glossy',
    reprintCount: 1,
    notes: 'Three-generation family session with 8 members. Stretched canvas frame installed.',
    tags: ['Family Portrait', 'Canvas', 'Silver Jubilee']
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    likes: '1,420',
    caption: 'Grace in every fold. Traditional bridal portraits in royal Paithani.'
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    likes: '2,890',
    caption: 'The moment forever stands still. Snehal & Amit during the sacred pheras.'
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    likes: '984',
    caption: 'Precision studio lighting meets editorial soul. 85mm f/1.4.'
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    likes: '3,120',
    caption: 'Restoring what time forgot. A 1968 grandfather photograph given new life.'
  },
  {
    id: 'ig5',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    likes: '1,150',
    caption: 'Italian handcrafted layflat albums fresh off our binding workshop.'
  },
  {
    id: 'ig6',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    likes: '810',
    caption: 'Corporate presence redefined. Modern leadership portraits.'
  }
];
