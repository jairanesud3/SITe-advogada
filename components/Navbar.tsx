import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Share2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-[#050c18]/95 backdrop-blur-md shadow-lg border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white flex flex-col md:block">
              <span className="group-hover:text-gold transition-colors">JAIRANE SOUSA</span> 
              <span className="hidden md:inline text-gold mx-2">|</span> 
              <span className="text-gray-400 text-xs md:text-sm font-sans font-light tracking-[0.3em] uppercase md:ml-0 mt-1 md:mt-0">Criminalista</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 text-xs uppercase tracking-widest font-medium py-2 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gold after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://wa.me/5588994737814?text=Olá,%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
              target="_blank"
              rel="noreferrer"
              className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-navy font-bold py-2 px-6 rounded-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-xs tracking-widest uppercase"
            >
              <Phone size={16} />
              Plantão 24h
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold focus:outline-none p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                href="https://wa.me/5588994737814?text=Olá,%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
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