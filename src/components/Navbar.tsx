import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CITEF_URL } from '../config/env';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsTransparent(true);
        setIsVisible(true);
      } else {
        setIsTransparent(false);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'SISTEMA', href: '#hero' },
    { label: 'MONITOREO', href: '#monitoreo' },
    { label: 'RESERVAS', href: '#reservas' },
    { label: 'PREDICCIÓN IA', href: '#analitica' },
    { label: 'EQUIPO', href: '#equipo' },
    { label: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[82px] transition-all duration-500 ease-luxury ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isTransparent
            ? 'bg-transparent text-white border-b border-transparent'
            : 'bg-[#001024]/95 backdrop-blur-md text-white border-b border-white/10 shadow-2xl'
        }`}
      >
        <div className="w-full h-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo Corporativo SmartLab - Grande, visible y nítido */}
          <div className="flex items-center gap-8">
            <a href="#hero" className="flex items-center gap-4 group">
              <div className="h-12 sm:h-14 w-auto flex items-center justify-center p-1 bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300">
                <img
                  src="/smartLab_dark_trimmed.png"
                  alt="SmartLab Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg tracking-[0.18em] uppercase text-white group-hover:text-red-500 transition-colors">
                    SMARTLAB
                  </span>
                  <span className="font-extrabold text-base sm:text-lg tracking-[0.18em] uppercase text-[#E10600]">
                    SOLUTIONS
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase -mt-0.5">
                  EDTECH • UAGRM
                </span>
              </div>
            </a>

            {/* Enlaces de Navegación de Escritorio */}
            <nav className="hidden xl:flex items-center gap-8 pl-8 border-l border-white/15">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="editorial-link text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Extremo Derecho: Logo Oficial FCEE UAGRM + Botón de Acceso al CITEF */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Logo FCEE UAGRM junto al botón */}
            <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/15">
              <img
                src="/logo_fcee.png"
                alt="Escudo Oficial FCEE UAGRM"
                className="h-10 sm:h-11 w-auto object-contain drop-shadow-md"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-black tracking-widest uppercase text-white leading-tight">
                  FCEE
                </span>
                <span className="text-[9px] font-mono tracking-wider text-zinc-400 leading-tight">
                  UAGRM
                </span>
              </div>
            </div>

            {/* Botón de Acceso Principal */}
            <a
              href={CITEF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 py-3 px-5 sm:px-6 bg-[#E10600] hover:bg-[#c5182f] text-white font-bold text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-red-950/50 hover:shadow-red-600/30 hover:scale-[1.02]"
            >
              <span>ACCEDER AL CITEF</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Botón Móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:text-red-500 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil Fullscreen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000d1e]/98 backdrop-blur-2xl text-white pt-24 px-8 pb-12 flex flex-col justify-between animate-fade-up">
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <img src="/logo_fcee.png" alt="FCEE" className="h-10 w-auto" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  FACULTAD DE CIENCIAS ECONÓMICAS Y EMPRESARIALES
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">CITEF • UAGRM</div>
              </div>
            </div>

            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black tracking-[0.15em] uppercase text-white hover:text-red-500 transition-colors"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <a
              href={CITEF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between p-4 bg-[#E10600] text-white font-black text-xs tracking-[0.2em] uppercase"
            >
              <span>INGRESAR AL SISTEMA CITEF</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
