import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden backdrop-blur-sm bg-matte/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative group" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100">
            {/* Efeito de moldura deslocada */}
            <div className="absolute -inset-4 bg-gold/10 rounded-sm transform translate-x-3 translate-y-3 transition-transform duration-700 ease-out border border-gold/5 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            <div className="relative border border-gold/20 p-2 bg-navy/50 backdrop-blur-md overflow-hidden">
                {/* ATENÇÃO: Coloque sua imagem em public/images/profile.jpg */}
                <img 
                    src="/images/profile.jpg"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                    }}
                    alt="Dra. Jairane Santos De Sousa" 
                    className="w-full h-auto object-cover shadow-2xl transition-transform duration-1000 transform group-hover:scale-105"
                />
                {/* Brilho passando na imagem ao carregar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>

          {/* Content Column */}
          <div data-aos="fade-left" data-aos-duration="1500">
            <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
               <span className="text-gold font-sans font-bold tracking-[0.2em] uppercase text-xs border-b border-gold pb-1">Perfil Profissional</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-8 leading-tight" data-aos="fade-up" data-aos-delay="200">
              Autoridade e Estratégia: <br/>
              <span className="text-gold italic">A Defesa que Sua Liberdade Exige.</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed font-light" data-aos="fade-up" data-aos-delay="300">
              Em um processo criminal, a experiência define o resultado. Com <strong className="text-white font-semibold">38 anos de vida e uma década inteira dedicada à advocacia criminal combativa</strong>, a <span className="text-gold">Dra. Jairane Santos De Sousa</span> não atua apenas como advogada, mas como uma estrategista da liberdade.
            </p>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light" data-aos="fade-up" data-aos-delay="400">
              Atuando em Brusque e em todo o estado de Santa Catarina, nosso escritório se tornou referência em casos complexos. Entendemos que por trás de cada inquérito existe uma família angustiada e uma reputação a zelar. Por isso, oferecemos uma defesa técnica implacável, sigilo absoluto e acolhimento humano no momento mais difícil da sua vida.
            </p>

            <div className="space-y-4 font-light">
              <div className="flex items-center gap-4 group" data-aos="fade-up" data-aos-delay="500">
                <div className="p-1 rounded-full border border-gold/30 group-hover:bg-gold/10 transition-colors duration-300">
                    <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-200">Defesa Artesanal: Cada detalhe do processo é examinado.</span>
              </div>
              <div className="flex items-center gap-4 group" data-aos="fade-up" data-aos-delay="600">
                <div className="p-1 rounded-full border border-gold/30 group-hover:bg-gold/10 transition-colors duration-300">
                    <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-200">Atuação incisiva para anular provas ilegais.</span>
              </div>
              <div className="flex items-center gap-4 group" data-aos="fade-up" data-aos-delay="700">
                <div className="p-1 rounded-full border border-gold/30 group-hover:bg-gold/10 transition-colors duration-300">
                    <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-200">Disponibilidade total para urgências (Plantão 24h).</span>
              </div>
            </div>

            <div className="mt-12 opacity-90 border-l-4 border-gold pl-6" data-aos="fade-up" data-aos-delay="800">
                 <div className="font-serif text-2xl text-gold italic">Jairane Sousa</div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Advogada Criminalista</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;