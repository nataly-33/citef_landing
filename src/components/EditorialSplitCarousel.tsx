import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CITEF_URL } from '../config/env';

interface ArticleSlide {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  techBadge: string;
}

export const EditorialSplitCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const slides: ArticleSlide[] = [
    {
      id: 'art-1',
      category: 'ARQUITECTURA DE DATOS • AUDITORÍA FORENSE',
      title: 'TRAZABILIDAD EN TIEMPO REAL CON JSONB Y RBAC GRANULAR.',
      excerpt:
        'Cada mutación de estado, asignación de puesto y relevo de guardia queda inmutablemente registrada en bitácora con los valores anteriores y nuevos, IP y usuario responsable.',
      ctaText: 'CONSULTAR REGLAS DE AUDITORÍA',
      ctaHref: '#bento',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85', // Racks de Servidores y Almacenamiento
      techBadge: 'PostgreSQL 15 • TypeORM',
    },
    {
      id: 'art-2',
      category: 'INGENIERÍA DE CONFIABILIDAD • RAMS',
      title: 'DISPONIBILIDAD OPERATIVA SUPERIOR AL 99.2%.',
      excerpt:
        'Cálculo automatizado del Tiempo Medio Entre Fallos (MTBF) y Tiempo Medio de Reparación (MTTR) que direcciona las averías de sala a la bandeja técnica sin fricciones.',
      ctaText: 'VER TABLERO DE MÉTRICAS RAMS',
      ctaHref: CITEF_URL,
      image:
        'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1600&q=85', // Taller de mantenimiento de hardware y componentes de computadoras
      techBadge: 'Norma RAMS • FCEE UAGRM',
    },
    {
      id: 'art-3',
      category: 'INTERFAZ REACTIVA • ANGULAR 18 STANDALONE',
      title: 'DISEÑO ATÓMICO, SIGNALS Y CERO CARGAS PESADAS.',
      excerpt:
        'Una experiencia fluida gobernada por el estándar de calidad IEEE 730 / ISO 25010, concebida para operar con máxima eficiencia en redes de alta concurrencia universitaria.',
      ctaText: 'EXPLORAR COMPONENTES UI',
      ctaHref: '#bento',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85', // Código limpio TypeScript y componentes frontend
      techBadge: 'Angular 18 • TypeScript',
    },
  ];

  const slide = slides[current];

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="editorial" className="py-24 sm:py-32 bg-[#000d1e] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Cabecera Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-12 sm:mb-16">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-400">
              DOCUMENTACIÓN & REPORTAJES TÉCNICOS
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              ARQUITECTURA DEL SISTEMA
            </h3>
          </div>

          {/* Controles Laterales Circulares */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/30 hover:border-[#E10600] hover:bg-[#E10600] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Anterior artículo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/30 hover:border-[#E10600] hover:bg-[#E10600] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Siguiente artículo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Split Layout 50/50 */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Jerarquía Textual */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#E10600]">
                {slide.category}
              </span>

              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] text-white">
                {slide.title}
              </h4>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal pt-2">
                {slide.excerpt}
              </p>
            </div>

            <div className="pt-4">
              <a
                href={slide.ctaHref}
                className="group inline-flex items-center gap-4 text-white hover:text-[#E10600] transition-colors"
              >
                <span className="text-xs font-black font-mono tracking-[0.2em] uppercase">
                  {slide.ctaText}
                </span>
                <div className="cta-circle">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Contenedor Rectangular Zero-Radius */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#00142d] border border-white/10 group">
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="editorial-img w-full h-full object-cover brightness-90 group-hover:brightness-100"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#000d1e]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                {slide.techBadge}
              </div>
            </div>
          </div>
        </div>

        {/* Indicador Lineal de Progreso */}
        <div className="mt-12 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="group py-2 flex-1 cursor-pointer focus:outline-none"
              aria-label={`Slide ${idx + 1}`}
            >
              <div
                className={`h-[2px] transition-all duration-500 ${
                  idx === current ? 'bg-[#E10600]' : 'bg-white/20 group-hover:bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
