import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay and Blur */}
      <div id="hero-bg" className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/85 z-20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/50 to-matte z-20"></div>
        {/* Imagem de fundo temática (Biblioteca/Escritório) com leve blur */}
        <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
            alt="Escritório de Advocacia Premium" 
            className="w-full h-full object-cover opacity-40 blur-[2px] scale-105 animate-pulse-slow" 
            style={{ animationDuration: '20s' }}
        />
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-4 text-center mt-10">
        <div className="mb-8 flex justify-center" data-aos="fade-down" data-aos-duration="1200">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-gold/30 py-2 px-6 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                    Advocacia Criminal de Elite
                </span>
            </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
          Sua Liberdade e Seus <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic">
            Direitos Não Podem Esperar.
          </span>
        </h1>

        <p className="font-sans text-gray-200 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
          Defesa Criminal Especializada em Brusque e Região. <br className="hidden md:block" />
          <strong className="text-white">10 anos de combate jurídico</strong> preservando a liberdade de quem precisa com técnica refinada e sigilo absoluto.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://wa.me/5588994737814?text=Olá,%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
            target="_blank"
            rel="noreferrer"
            className="group relative bg-gold text-navy font-bold py-4 px-12 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative tracking-widest text-sm uppercase flex items-center gap-2">
                Falar com Especialista Agora
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce text-gold/50">
        <ArrowDown size={32} />
      </div>

      {/* Decorative Gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-matte via-matte/80 to-transparent z-20"></div>
    </section>
  );
};

export default Hero;