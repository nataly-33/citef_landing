import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CITEF_URL } from '../config/env';

interface BentoCell {
  id: string;
  category: string;
  title: string;
  image: string;
  ctaText: string;
  ctaHref: string;
  isExternal?: boolean;
}

export const BentoGrid: React.FC = () => {
  const cells: BentoCell[] = [
    {
      id: 'cell-1',
      category: 'MÓDULO 8 • FASTAPI :8001',
      title: 'INFERENCIA PROBABILÍSTICA CON RANDOM FOREST & COLAS M/M/c',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', // Analítica predictiva y curvas
      ctaText: 'VER MODELO MATEMÁTICO',
      ctaHref: '#hero',
    },
    {
      id: 'cell-2',
      category: 'MÓDULO 1 • AUDITORÍA TRANSACCIONAL',
      title: 'INTEGRIDAD DE DATOS Y BITÁCORA FORENSE EN JSONB',
      image:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80', // Servidores e infraestructura de base de datos
      ctaText: 'CONSULTAR REGLAS RBAC',
      ctaHref: CITEF_URL,
      isExternal: true,
    },
    {
      id: 'cell-3',
      category: 'MÓDULO 7 • INGENIERÍA DE CONFIABILIDAD',
      title: 'NORMATIVA RAMS: MTBF, MTTR Y DISPONIBILIDAD OPERATIVA',
      image:
        'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80', // Taller de mantenimiento de hardware
      ctaText: 'VER BANDEJA DE TALLER',
      ctaHref: CITEF_URL,
      isExternal: true,
    },
    {
      id: 'cell-4',
      category: 'MÓDULOS 3 & 4 • WEBSOCKETS EN VIVO',
      title: 'MAPEO MATRICIAL 2D Y SINCRONIZACIÓN INSTANTÁNEA',
      image:
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80', // Puestos y computadoras de sala
      ctaText: 'MONITOREAR ESTACIONES',
      ctaHref: CITEF_URL,
      isExternal: true,
    },
  ];

  return (
    <section id="bento" className="w-screen bg-[#000d1e] text-white border-b border-white/10">
      {/* Título de Sección */}
      <div className="w-full px-6 sm:px-12 lg:px-16 py-12 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-400">
            ESPECIFICACIÓN DE INGENIERÍA
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
            CAPACIDADES DEL SISTEMA
          </h3>
        </div>
        <div className="text-[11px] font-mono text-zinc-400">
          8 MÓDULOS • 27 CASOS DE USO • 100% AUDITABLE
        </div>
      </div>

      {/* Bento Grid de 2 Columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white/10">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className="group relative h-[60vh] sm:h-[65vh] overflow-hidden bg-[#001024] flex flex-col justify-end p-8 sm:p-12"
          >
            {/* Imagen de Fondo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={cell.image}
                alt={cell.title}
                className="editorial-img w-full h-full object-cover brightness-50 group-hover:brightness-60"
              />
            </div>

            {/* Degradado Scrim Inferior */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000d1e] via-[#00142d]/65 to-transparent pointer-events-none" />

            {/* Texto Anclado en la Base */}
            <div className="relative z-20 space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#E10600]">
                {cell.category}
              </span>

              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                {cell.title}
              </h4>

              <div className="pt-2">
                <a
                  href={cell.ctaHref}
                  target={cell.isExternal ? '_blank' : undefined}
                  rel={cell.isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-4 text-white hover:text-[#E10600] transition-colors"
                >
                  <span className="text-xs font-black font-mono tracking-[0.2em] uppercase">
                    {cell.ctaText}
                  </span>
                  <div className="cta-circle">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
