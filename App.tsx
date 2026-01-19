
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Send, 
  ArrowUpRight, 
  ChevronRight, 
  Globe, 
  Camera, 
  Package,
  Gem,
  Award,
  BookOpen
} from 'lucide-react';

// 社交链接组件，使用官方品牌色
const SocialLink = ({ icon: Icon, label, href, subLabel, brandColor, iconFill }: { icon: any, label: string, href: string, subLabel: string, brandColor: string, iconFill?: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center p-5 rounded-2xl text-white shadow-xl transition-all active:scale-95 ${brandColor}`}
  >
    <div className="bg-white/20 p-3 rounded-xl mr-4">
      <Icon size={26} fill={iconFill || "white"} className="text-white" />
    </div>
    <div className="flex-1 text-left">
      <div className="font-bold text-lg tracking-tight leading-none uppercase">{label}</div>
      <div className="text-[10px] font-medium uppercase tracking-widest mt-1 opacity-80">{subLabel}</div>
    </div>
    <ChevronRight size={20} className="opacity-40" />
  </a>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F9F8F4] font-sans pb-40 selection:bg-[#C5A059] overflow-x-hidden">
      
      {/* 高端极简导航 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-[#C5A059]/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex flex-col">
          <h1 className="font-serif font-black text-xl tracking-tighter leading-none text-white italic">
            ROYAL<span className="text-[#C5A059]">ARCHIVE</span>
          </h1>
          <span className="text-[7px] tracking-[0.5em] text-stone-500 font-bold uppercase mt-1">Master Atelier</span>
        </div>
        <div className="flex items-center gap-2 bg-stone-900/50 border border-stone-800 px-3 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-pulse"></div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Privé Access</span>
        </div>
      </header>

      {/* 首页视觉区 */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-end">
        <img 
          src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=1200" 
          alt="Prestige Collection" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20"></div>
        
        <div className="relative z-10 p-8 w-full mb-12">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/5 backdrop-blur-md px-4 py-1.5 border border-white/10 rounded-sm">
            <Gem className="text-[#C5A059]" size={14} />
            <span className="text-white text-[9px] font-bold tracking-[0.4em] uppercase">Private Selection • MMXXIV</span>
          </div>
          <h2 className="text-5xl font-serif font-light italic tracking-tight leading-[1] text-white uppercase mb-6">
            Elegance <br/>
            <span className="font-bold text-[#C5A059] not-italic text-6xl">Redefined.</span>
          </h2>
          <div className="border-l-2 border-[#C5A059] pl-5">
            <p className="max-w-[260px] text-stone-400 text-[10px] font-medium tracking-[0.15em] leading-relaxed uppercase opacity-90">
              专注于全球顶级艺术杰作，以原厂级材质标准，为您重塑经典美学。
            </p>
          </div>
        </div>
      </section>

      {/* 核心动作区 */}
      <section className="px-6 -mt-24 relative z-20 space-y-6">
        
        {/* 【超显眼时尚】产品画册按钮 */}
        <a 
          href="https://your-catalog.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center justify-center py-10 px-8 rounded-[2.5rem] bg-gradient-to-br from-[#1c1c1c] via-[#0a0a0a] to-[#141414] border-[1.5px] border-[#C5A059]/40 shadow-[0_40px_80px_-15px_rgba(197,160,89,0.5)] active:scale-[0.97] transition-all overflow-hidden"
        >
          {/* 动态呼吸流金边框 */}
          <div className="absolute inset-0 border-2 border-[#C5A059] opacity-20 rounded-[2.5rem] animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <div className="bg-[#C5A059] p-6 rounded-full shadow-[0_0_40px_rgba(197,160,89,0.4)] group-hover:scale-110 transition-transform duration-700">
              <BookOpen size={48} className="text-black" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-3xl tracking-tighter uppercase leading-none text-white italic mb-2">Master Gallery</h3>
              <p className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-ping"></span>
                在线选购时尚画册 (2000+)
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-1 text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase text-center">
            Tap to Explore Exclusive Collection <ArrowUpRight size={14} />
          </div>

          {/* 时尚扫光动画 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </a>

        {/* 社交链接矩阵 */}
        <div className="space-y-4 pt-2">
          {/* WhatsApp - #25D366 */}
          <SocialLink 
            icon={MessageCircle} 
            label="WhatsApp 专属垂询" 
            subLabel="Expert Consultation & 4K Preview" 
            href="https://wa.me/YOUR_NUMBER" 
            brandColor="bg-[#25D366] shadow-[0_15px_40px_-10px_rgba(37,211,102,0.4)]"
            iconFill="white"
          />

          {/* Instagram - 官方渐变 */}
          <SocialLink 
            icon={Instagram} 
            label="Instagram 灵感" 
            subLabel="Daily Curated Masterpieces" 
            href="https://instagram.com/YOUR_PROFILE" 
            brandColor="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-[0_15px_40px_-10px_rgba(238,42,123,0.3)]" 
          />

          {/* Telegram - #0088CC */}
          <SocialLink 
            icon={Send} 
            label="Telegram 私域" 
            subLabel="Confidential New Arrivals" 
            href="https://t.me/YOUR_USERNAME" 
            brandColor="bg-[#0088CC] shadow-[0_15px_40px_-10px_rgba(0,136,204,0.3)]" 
            iconFill="white"
          />
        </div>
      </section>

      {/* 品牌背书 */}
      <section className="mt-24 px-8 py-20 bg-[#F9F8F4] text-black rounded-t-[3rem]">
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl font-light italic tracking-tight uppercase mb-2">The Archive <span className="font-bold text-[#C5A059]">Oath</span></h3>
          <div className="w-12 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12 max-w-lg mx-auto">
          {[
            { 
              icon: Award, 
              title: "高定级材质标准", 
              desc: "严选 904L 精钢、原厂代工级皮料及瑞士定制机芯，确保重量与手感达到收藏级标准。" 
            },
            { 
              icon: Camera, 
              title: "发货前 4K 验货", 
              desc: "出库前通过 WhatsApp 提供微距超清核对。我们为您检查每一处工艺，满意后再开启全球交付。" 
            },
            { 
              icon: Package, 
              title: "隐私配送保障", 
              desc: "成熟隐形物流链路，安全通过全球海关。承诺如遇特殊情况，我们将提供 100% 全额保障。" 
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-xl shrink-0 border border-stone-100">
                <item.icon size={26} className="text-[#C5A059]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-stone-900">{item.title}</h4>
                <p className="text-stone-500 text-[11px] font-medium leading-relaxed tracking-wide uppercase">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-24 px-8 bg-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent"></div>
        <div className="relative z-10 text-center">
          <div className="font-serif font-bold text-3xl text-white italic mb-4 tracking-tighter">
            ROYAL<span className="text-[#C5A059]">ARCHIVE</span>
          </div>
          <p className="text-stone-600 text-[8px] uppercase tracking-[0.8em] mb-12">Privé Atelier • Global Service</p>
          
          <div className="flex justify-center gap-10 mb-16 opacity-30">
             <Instagram size={22} strokeWidth={1.5} />
             <Send size={22} strokeWidth={1.5} />
             <MessageCircle size={22} strokeWidth={1.5} />
          </div>

          <div className="text-[7px] text-stone-700 tracking-[0.4em] font-black uppercase leading-[2.5]">
            <p>© 2024 ROYALARCHIVE STUDIO • ALL RIGHTS RESERVED</p>
            <p className="opacity-40 italic lowercase tracking-widest font-medium">Bespoke artistry for the discerning few.</p>
          </div>
        </div>
      </footer>

      {/* 底部悬浮转化条 */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-50">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl border-t border-white/5 -z-10"></div>
        <a 
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_-10px_40px_rgba(37,211,102,0.4)] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[13px] italic"
        >
          <MessageCircle size={22} fill="white" className="text-green-600" />
          立即咨询大师杰作 1:1 实拍报价
        </a>
      </div>
    </div>
  );
};

export default App;
