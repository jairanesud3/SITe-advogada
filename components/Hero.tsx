import React from 'react';
import { ArrowDown, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div id="hero-bg" className="absolute inset-0 z-0">
        {/* Camada da Imagem - Balança da Justiça / Escritório */}
        <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000" 
            alt="Justiça e Direito Criminal" 
            className="w-full h-full object-cover animate-pulse-slow" 
            style={{ animationDuration: '30s' }}
        />
        
        {/* Overlay Escuro com Transparência (Blur Glass Effect) */}
        {/* Reduzi a opacidade de bg-navy/85 para bg-navy/80 e adicionei backdrop-blur */}
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-[3px] mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-matte z-20"></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-4 text-center mt-10">
        <div className="mb-8 flex justify-center" data-aos="fade-down" data-aos-duration="1200">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-gold/30 py-2 px-6 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                    Advocacia Criminal de Elite
                </span>
            </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
          Sua Liberdade e Seus <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#FFFACD] to-gold italic filter drop-shadow-lg">
            Direitos Não Podem Esperar.
          </span>
        </h1>

        <p className="font-sans text-gray-200 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
          Defesa Criminal Especializada em Brusque e Região. <br className="hidden md:block" />
          <strong className="text-white border-b border-gold/30 pb-0.5">10 anos de combate jurídico</strong> preservando a liberdade de quem precisa com técnica refinada e sigilo absoluto.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://wa.me/5588994737814?text=Olá,%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
            target="_blank"
            rel="noreferrer"
            className="group relative bg-gold text-navy font-bold py-4 px-12 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 w-full md:w-auto text-center"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative tracking-widest text-sm uppercase flex items-center justify-center gap-3">
                <Phone size={18} />
                Falar com Especialista Agora
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce text-gold/50 cursor-pointer" onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})}>
        <ArrowDown size={32} />
      </div>

      {/* Decorative Gradient at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-matte via-matte/60 to-transparent z-20"></div>
    </section>
  );
};

export default Hero;