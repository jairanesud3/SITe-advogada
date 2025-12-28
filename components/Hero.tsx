import React from 'react';
import { ArrowDown, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div id="hero-bg" className="absolute inset-0 z-0">
        {/* SRC RESTAURADO: Apontando para o arquivo original */}
        <img 
            src="/images/hero-bg.jpg" 
            onError={(e) => {
              // Fallback sutil apenas se a imagem não carregar
              e.currentTarget.style.display = 'none';
            }}
            alt="Justiça e Direito Criminal" 
            className="w-full h-full object-cover animate-pulse-slow scale-105" 
            style={{ animationDuration: '30s' }}
        />
        
        {/* Fallback de fundo caso a imagem falhe (para não ficar branco) */}
        <div className="absolute inset-0 bg-navy z-[-1]"></div>

        {/* Overlay Escuro com Transparência */}
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px] mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/50 to-matte z-20"></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-4 text-center mt-10">
        <div className="mb-8 flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-gold/30 py-2 px-6 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                    Advocacia Criminal de Elite
                </span>
            </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          Sua Liberdade e Seus <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#FFFACD] to-gold italic filter drop-shadow-lg relative inline-block">
             Direitos Não Podem Esperar.
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C28.5002 2.99999 76.5002 -0.50002 198.001 5.49997" stroke="currentColor" strokeWidth="3"/></svg>
          </span>
        </h1>

        <p className="font-sans text-gray-200 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
          Defesa Criminal Especializada em Brusque e Região. <br className="hidden md:block" />
          <strong className="text-white border-b border-gold/30 pb-0.5">10 anos de combate jurídico</strong> preservando a liberdade de quem precisa com técnica refinada e sigilo absoluto.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="600" data-aos-offset="-50">
          <a
            href="https://api.whatsapp.com/send?phone=5588994737814&text=Ol%C3%A1%2C%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gold text-navy font-bold py-4 px-12 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 w-full md:w-auto text-center"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative tracking-widest text-sm uppercase flex items-center justify-center gap-3">
                <Phone size={18} className="animate-bounce" />
                Falar com Especialista Agora
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce text-gold/50 cursor-pointer hover:text-gold transition-colors" onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})}>
        <ArrowDown size={32} />
      </div>

      {/* Decorative Gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-matte via-matte/60 to-transparent z-20"></div>
    </section>
  );
};

export default Hero;