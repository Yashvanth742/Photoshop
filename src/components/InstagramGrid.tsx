import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, STUDIO_INFO } from '../data/mockData';
import { useToast } from './Toast';

export function InstagramGrid() {
  const { showToast } = useToast();

  const handleNotify = () => {
    showToast(`Redirecting to ${STUDIO_INFO.instagram} on Instagram`, 'info');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#fdfbf7] relative overflow-hidden border-b border-[#1a1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#b5965e] font-bold mb-1">
              <Instagram className="w-3.5 h-3.5 text-[#b5965e]" />
              <span>{STUDIO_INFO.instagram}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight">
              Follow Our Latest Work
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1a88] mt-1">
              Behind the scenes, studio lighting setups, and daily client portraits.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNotify}
            className="px-6 py-2.5 rounded-full bg-[#ffffff] hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a1a] text-xs font-bold uppercase tracking-wider text-[#1a1a1a] flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#b5965e]" />
            <span>View Instagram</span>
            <ExternalLink className="w-3 h-3 text-[#1a1a1a66]" />
          </a>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNotify}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#f4f1e8] border border-[#1a1a1a1a] cursor-pointer shadow-sm block"
            >
              <img
                src={post.image}
                alt="FrameCraft Instagram post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex items-center justify-end text-[#b5965e]">
                  <Instagram className="w-4 h-4" />
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] text-white line-clamp-2 leading-tight font-medium">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#b5965e] font-bold">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
