import React from 'react';
import { Shield, Clock, BrainCircuit } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-matte border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="0">
            <div className="mb-6 opacity-80">
                <Shield className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-3 tracking-wide">Sigilo Absoluto</h3>
            <p className="text-gray-400 text-sm max-w-xs font-light leading-relaxed">
              Sua história e seus dados protegidos com o máximo rigor ético e profissional.
            </p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-6 opacity-80">
                <Clock className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-3 tracking-wide">Atendimento 24h</h3>
            <p className="text-gray-400 text-sm max-w-xs font-light leading-relaxed">
              A urgência criminal não tem hora. Estamos prontos para atuar em flagrantes a qualquer momento.
            </p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <div className="mb-6 opacity-80">
                <BrainCircuit className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-3 tracking-wide">Estratégia Técnica</h3>
            <p className="text-gray-400 text-sm max-w-xs font-light leading-relaxed">
              Não contamos com a sorte. Analisamos cada detalhe do processo para encontrar a melhor tese defensiva.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;