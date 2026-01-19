import React, { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-[#080808] text-[#F9F8F4] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent'}`}>
        <h1 className="font-serif font-bold text-2xl tracking-tighter italic">
          ROYAL<span className="text-[#C5A059] not-italic ml-1">ARCHIVE</span>
        </h1>
        <div className="flex items-center gap-2 border border-[#C5A059]/30 bg-black/40 px-3 py-1.5 rounded-full text-[10px] text-[#C5A059] uppercase tracking-[0.2em]">
          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-pulse"></div> 
          Privé Access
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=60&w=1200" 
            className="w-full h-full object-cover brightness-[0.35] scale-105"
            alt="Luxury"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/20 to-[#080808]"></div>
        </div>
        
        <div className="relative z-10 px-8 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
            <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.4em] font-bold shimmer-text">Haute Couture Collection</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif italic leading-[1.05] mb-10">
            Timeless <br/>
            <span className="text-[#C5A059] not-italic font-bold">Heritage.</span>
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-md leading-relaxed mb-10 border-l border-[#C5A059]/40 pl-6">
            不仅仅是复刻，更是对工匠精神的传承。我们采用原厂进口皮料，坚持每一针每一线的匠心打磨，为您开启通往极致品味的私密之门。
          </p>
          <div className="flex flex-wrap gap-6 text-[9px] uppercase tracking-[0.3em] font-bold text-[#C5A059]/60">
            <span>● 1:1 Original</span>
            <span>● Global Shipping</span>
            <span>● Full Packaging</span>
          </div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="px-6 -mt-20 relative z-20 space-y-6 max-w-4xl mx-auto pb-48">
        
        {/* Main Catalog - High Contrast */}
        <a 
          href="https://your-catalog-link.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block relative p-px rounded-[2.5rem] bg-gradient-to-b from-[#C5A059]/40 to-transparent transition-all duration-700 hover:from-[#C5A059]"
        >
          <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 text-center overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Lucide.Crown size={200} />
            </div>
            <div className="relative z-10">
              <div className="bg-[#C5A059] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#C5A059]/20 group-hover:scale-110 transition-transform duration-500">
                <Lucide.LayoutGrid size={32} className="text-black" />
              </div>
              <h3 className="font-serif text-4xl italic mb-4 tracking-tight">The Digital Vault</h3>
              <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.4em] uppercase mb-8">在线画册预览 (2025 全新系列)</p>
              <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 rounded-full text-white/50 text-[10px] font-bold tracking-widest uppercase group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                Enter Private Gallery <Lucide.ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </a>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://wa.me/your_number" className="flex items-center p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#C5A059]/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/5 flex items-center justify-center mr-6 group-hover:bg-[#25D366]/10 transition-colors">
              <Lucide.MessageCircle size={28} className="text-[#25D366]" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg tracking-tight italic font-serif">WhatsApp</div>
              <div className="text-[9px] text-stone-500 uppercase tracking-widest mt-1 font-bold">1:1 实拍 & 全球免邮</div>
            </div>
            <Lucide.ChevronRight size={20} className="text-stone-800 group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
          </a>

          <a href="#" className="flex items-center p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#C5A059]/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#E1306C]/5 flex items-center justify-center mr-6 group-hover:bg-[#E1306C]/10 transition-colors">
              <Lucide.Instagram size={28} className="text-[#E1306C]" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg tracking-tight italic font-serif">Instagram</div>
              <div className="text-[9px] text-stone-500 uppercase tracking-widest mt-1 font-bold">灵感时刻 & 客户返图</div>
            </div>
            <Lucide.ChevronRight size={20} className="text-stone-800 group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </section>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-[60] bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
        <div className="max-w-md mx-auto relative group">
          <div className="absolute inset-0 bg-[#C5A059] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
          <a 
            href="https://wa.me/your_number" 
            className="relative flex items-center justify-center gap-3 w-full bg-[#C5A059] text-black py-5 rounded-2xl font-bold uppercase text-[10px] tracking-[0.3em] shadow-2xl transition-all hover:bg-[#D4B478] active:scale-[0.98]"
          >
            <Lucide.MessageSquareText size={18} />
            即刻联络专属主理人
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
