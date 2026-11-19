import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { CITEF_URL } from '../config/env';

interface SlideData {
  id: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  ctaText: string;
  ctaHref: string;
  isExternal?: boolean;
  bgImage: string;
}

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 'slide-1',
      category: 'SISTEMA DE GESTIÓN & MONITOREO • CITEF FCEE UAGRM',
      titleLine1: 'PRECISIÓN',
      titleLine2: 'EN TIEMPO REAL.',
      ctaText: 'INGRESAR AL SISTEMA CITEF',
      ctaHref: CITEF_URL,
      isExternal: true,
      bgImage:
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85', // Laboratorio de computación universitario con monitores y puestos
    },
    {
      id: 'slide-2',
      category: 'MICROSERVICIO FASTAPI :8001 • PYTHON & SCIKIT-LEARN',
      titleLine1: 'INTELIGENCIA',
      titleLine2: 'PREDICTIVA.',
      ctaText: 'EXPLORAR MODELO RANDOM FOREST',
      ctaHref: '#analitica',
      isExternal: false,
      bgImage:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=85', // Analítica de datos cuantitativos y curvas estadísticas
    },
    {
      id: 'slide-3',
      category: 'MOTOR DE NO-SOLAPAMIENTO • INTERVALOS CERRADOS',
      titleLine1: 'RESERVAS',
      titleLine2: 'SIN COLISIÓN.',
      ctaText: 'VER ARQUITECTURA DE AULAS',
      ctaHref: '#reservas',
      isExternal: false,
      bgImage:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2200&q=85', // Aula universitaria de cómputo y cátedra
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <section id="hero" className="relative w-screen h-[100vh] h-[100dvh] overflow-hidden bg-[#000d1e] text-white">
      {/* Capa Z-0: Media full-bleed con imágenes específicas */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-luxury ${
            idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={s.bgImage}
            alt={s.titleLine1}
            className="w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out will-change-transform brightness-65"
            style={{
              transform: idx === activeSlide ? 'scale(1.05)' : 'scale(1.0)',
            }}
          />
        </div>
      ))}

      {/* Capa Z-10: Scrim Gradiente en Azul Marino Profundo */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000d1e] via-[#00142d]/65 to-[#000d1e]/40 pointer-events-none" />

      {/* Capa Z-20: Contenido Anclado Abajo-Izquierda */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-[10vh]">
        <div className="max-w-5xl space-y-4 sm:space-y-5">
          {/* Categoría / Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse"></span>
            <span>{current.category}</span>
          </div>

          {/* Título Monumental */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] uppercase text-white font-sans">
            <span className="block">{current.titleLine1}</span>
            <span className="block text-zinc-300">{current.titleLine2}</span>
          </h1>

          {/* CTAs con Botón Más Grande + Logo FCEE Al Lado */}
          <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            {/* Botón de Ingreso Más Grande con Rojo Vivo */}
            <a
              href={CITEF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-6 py-4 sm:py-5 px-8 sm:px-10 bg-[#E10600] hover:bg-[#c5182f] text-white font-black text-xs sm:text-sm font-mono tracking-[0.22em] uppercase transition-all duration-300 shadow-2xl shadow-red-950/60 hover:shadow-red-600/40 hover:scale-[1.02] cursor-pointer"
            >
              <span>INGRESAR AL SISTEMA CITEF</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Escudo Oficial FCEE UAGRM colocado al lado del botón */}
            <div className="flex items-center gap-4 py-2 px-4 bg-white/5 border border-white/15 backdrop-blur-md">
              <img
                src="/logo_fcee.png"
                alt="Escudo FCEE UAGRM"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow"
              />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black uppercase tracking-widest text-white leading-tight">
                  FACULTAD DE CIENCIAS ECONÓMICAS
                </span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-400 leading-tight">
                  Y EMPRESARIALES • UAGRM
                </span>
              </div>
            </div>

            {/* Enlace secundario circular */}
            <a
              href="#monitoreo"
              className="hidden lg:inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
            >
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                VER SALAS EN VIVO
              </span>
              <div className="cta-circle">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Capa Z-30: Indicadores de Paginación Horizontales al Pie */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-3 px-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className="group relative h-4 w-12 sm:w-16 flex items-center cursor-pointer focus:outline-none"
            aria-label={`Slide ${i + 1}`}
          >
            <span className="h-[2px] w-full bg-white/20 group-hover:bg-white/40 transition-colors" />
            {i === activeSlide && (
              <span
                key={activeSlide}
                className="absolute left-0 top-[7px] h-[2px] bg-[#E10600] animate-progress"
                style={{ animationDuration: '6.5s' }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
