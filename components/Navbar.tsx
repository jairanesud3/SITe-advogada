import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Share2, Scale } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Dra. Jairane Sousa - Advocacia Criminal',
          url: window.location.href,
        });
      } catch (e) {}
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copiado!');
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Atuação', id: 'atuacao' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-[#050c18]/95 backdrop-blur-md shadow-lg border-b border-gold/10' : 'bg-transparent'}`}
        data-aos="fade-down" 
        data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Brand Area (Logo + Name) */}
          <div className="flex-shrink-0 cursor-pointer group flex items-center gap-3 md:gap-4" onClick={() => scrollToSection('home')}>
            
            {/* LOGO SLOT - Circular Estilo Medalhão */}
            {/* CORREÇÃO: rounded-full + padding (p-2) garante que a logo quadrada fique dentro do circulo sem cortar */}
            <div className={`relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-gold/40 bg-[#050c18] shadow-lg overflow-hidden transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] ${logoError ? 'bg-gray-800' : ''}`}>
                {/* SRC RESTAURADO: Apontando para o arquivo original */}
                <img 
                    src="/images/logo.png" 
                    alt="Logo Jairane Sousa" 
                    className={`w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110 ${logoError ? 'hidden' : 'block'}`}
                    onError={() => setLogoError(true)}
                />
                
                {/* Fallback Icon */}
                {logoError && (
                    <Scale className="text-gray-500 w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                )}

                {/* Brilho Glossy */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full pointer-events-none"></div>
            </div>

            {/* Name Text */}
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white flex flex-col justify-center drop-shadow-md">
              <span className="group-hover:text-gold transition-colors duration-300 leading-none">JAIRANE SOUSA</span> 
              <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light tracking-[0.3em] uppercase mt-1 group-hover:text-gray-200 transition-colors">
                Advocacia Criminal
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 text-xs uppercase tracking-widest font-medium py-2 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gold after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full shadow-black drop-shadow-sm"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://api.whatsapp.com/send?phone=5588994737814&text=Ol%C3%A1%2C%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-navy font-bold py-2 px-6 rounded-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-xs tracking-widest uppercase hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              <Phone size={16} />
              Plantão 24h
            </a>
          </div>

          {/* Mobile Menu Button - CORREÇÃO DE VISIBILIDADE */}
          {/* Adicionado z-index alto e flex-shrink-0 para garantir que não seja esmagado pela logo */}
          <div className="md:hidden flex items-center z-50 flex-shrink-0 ml-2">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gold p-2 transition-transform active:scale-95 focus:outline-none bg-navy/20 rounded-md backdrop-blur-sm border border-gold/10"
                aria-label="Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-24 left-0 w-full bg-[#050c18] border-b border-gold/20 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-center px-3 py-3 text-gray-200 hover:text-gold transition-colors duration-200 border-b border-white/5 tracking-widest text-sm uppercase"
            >
              {link.name}
            </button>
          ))}
          
          <div className="w-full flex flex-col gap-3 mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=5588994737814&text=Ol%C3%A1%2C%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 px-8 rounded-sm w-full text-center text-sm uppercase tracking-wider"
              >
                <Phone size={18} />
                PLANTÃO 24H
              </a>
              
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 border border-white/20 text-gray-300 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider"
              >
                <Share2 size={18} />
                Compartilhar
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;