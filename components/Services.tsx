import React from 'react';
import { Gavel, Scale, Scroll, LockKeyhole } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Audiência de Custódia",
      description: "O momento mais crítico da prisão. Atuamos nas primeiras horas para converter a prisão em flagrante em liberdade provisória, evitando o cárcere desnecessário.",
      icon: <LockKeyhole className="w-8 h-8 text-gold" />
    },
    {
      title: "Habeas Corpus",
      description: "Ação rápida contra abusos de autoridade e prisões ilegais. Levamos o caso aos Tribunais Superiores para cessar constrangimentos imediatamente.",
      icon: <Scroll className="w-8 h-8 text-gold" />
    },
    {
      title: "Inquérito Policial",
      description: "A defesa começa na delegacia. Acompanhamos oitivas para evitar a produção de provas contra si mesmo e buscar o arquivamento prematuro do caso.",
      icon: <Scale className="w-8 h-8 text-gold" />
    },
    {
      title: "Tribunal do Júri",
      description: "Defesa plena pela vida. Utilizamos oratória persuasiva, técnica jurídica refinada e psicologia forense para convencer os jurados no plenário.",
      icon: <Gavel className="w-8 h-8 text-gold" />
    }
  ];

  return (
    <section id="atuacao" className="py-24 relative bg-navy/40 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="text-gold font-sans font-bold tracking-widest uppercase mb-3 text-xs" data-aos="fade-down" data-aos-delay="200">O Direito Penal não admite erros</h4>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wide" data-aos="fade-up" data-aos-delay="300">
            Atuação Técnica de Alta Complexidade
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="400">
            Não entregue sua liberdade a generalistas. Oferecemos soluções jurídicas estratégicas para cada fase da persecução penal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="bg-[#0b1b33]/60 backdrop-blur-md border border-white/5 p-8 hover:border-gold/30 transition-all duration-500 group hover:-translate-y-2 rounded-sm flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                data-aos="fade-up"
                data-aos-delay={index * 150} // Stagger effect
                data-aos-duration="1000"
            >
              <div className="mb-6 p-3 bg-matte inline-block rounded-sm border border-gold/10 group-hover:border-gold/40 transition-colors duration-500 w-fit group-hover:scale-110 transform">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg text-white font-semibold mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed font-light flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center" data-aos="zoom-in" data-aos-delay="600">
            <p className="text-gray-400 mb-6 text-sm">Seu caso não está listado aqui? A Dra. Jairane analisa cada situação individualmente.</p>
            <a 
                href="https://api.whatsapp.com/send?phone=5588994737814&text=Ol%C3%A1%2C%20Dra.%20Jairane.%20Gostaria%20de%20saber%20sobre%20outra%20%C3%A1rea%20de%20atua%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold border-b border-gold/50 pb-1 hover:text-white hover:border-white transition-all uppercase text-xs tracking-widest font-bold hover:pb-2 duration-300"
            >
                Falar Diretamente com a Advogada
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;