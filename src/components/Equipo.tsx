import React from 'react';
import { Target, Compass, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  focus: string;
  image: string;
  fallbackImage: string;
  badges: string[];
}

export const Equipo: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: 'NATALY VANESSA MARTÍNEZ MARTÍNEZ',
      role: 'CO-FUNDADORA & PRODUCT MANAGER',
      focus: 'Arquitectura Backend NestJS • Modelado Relacional PostgreSQL • Inferencia Machine Learning FastAPI :8001',
      image: '/team/nataly.jpg',
      fallbackImage: '/team/nataly.jpg',
      badges: ['NESTJS', 'POSTGRESQL', 'FASTAPI :8001', 'RANDOM FOREST'],
    },
    {
      name: 'JAEL MAMANI SANDOVAL',
      role: 'CO-FUNDADORA & DIRECTORA DE CALIDAD (SQA LEAD)',
      focus: 'Arquitectura Frontend Angular 18 Standalone • Gobernanza de Calidad IEEE 730 / ISO 25010 • Métricas RAMS',
      image: '/team/jael.jpg',
      fallbackImage: '/team/nicol.jpeg',
      badges: ['ANGULAR 18', 'SIGNALS', 'IEEE 730', 'MÉTRICAS RAMS'],
    },
  ];

  return (
    <section id="equipo" className="py-24 sm:py-32 bg-[#000d1e] text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* =========================================================================
            PARTE 1: IDENTIDAD CORPORATIVA (Misión, Visión, Valores)
            ========================================================================= */}
        <div className="pb-12 border-b border-white/10 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E10600]">
              IDENTIDAD & PROPÓSITO INSTITUCIONAL
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              MISIÓN, VISIÓN & EQUIPO
            </h3>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            SMARTLAB SOLUTIONS S.R.L. • CITEF FCEE UAGRM
          </div>
        </div>

        {/* 3 Bloques Minimalistas de Identidad Corporativa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white/10 mb-20">
          {/* Misión */}
          <div className="bg-[#001024] p-8 sm:p-10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/15 flex items-center justify-center text-[#E10600]">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-zinc-400">
                NUESTRA MISIÓN
              </span>
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight text-white">
              OPTIMIZACIÓN DE INFRAESTRUCTURA
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Transformar la gestión de laboratorios universitarios mediante soluciones web inteligentes, automatizando la ocupación en tiempo real, garantizando equidad académica en reservas y aplicando analítica predictiva.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-[#001024] p-8 sm:p-10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/15 flex items-center justify-center text-[#E10600]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-zinc-400">
                NUESTRA VISIÓN
              </span>
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight text-white">
              LIDERAZGO EDTECH 2030
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Consolidarse como la plataforma tecnológica de referencia en gestión inteligente de centros de cómputo para el sistema universitario boliviano (CEUB) y centros de educación superior en América Latina.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-[#001024] p-8 sm:p-10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/15 flex items-center justify-center text-[#E10600]">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-zinc-400">
                PRINCIPIOS CLAVE
              </span>
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight text-white">
              RIGOR & CALIDAD FORMAL
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Rigor científico en modelos de colas M/M/c, cumplimiento del estándar IEEE 730 / ISO 25010 y compromiso absoluto con la modernización de la educación superior pública.
            </p>
          </div>
        </div>

        {/* =========================================================================
            PARTE 2: EQUIPO FUNDADOR CON TAMAÑO DE FOTOS REDUCIDO (~1/3 MÁS CHICAS)
            ========================================================================= */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col justify-between border border-white/15 hover:border-white/40 bg-[#00142d]/80 p-6 sm:p-8 transition-all duration-500"
            >
              <div>
                {/* Contenedor Fotográfico Compacto y Elegante (reducido 1/3, max-h: 340px) */}
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] h-[320px] sm:h-[340px] mx-auto overflow-hidden bg-[#000d1e] border border-white/15 mb-6 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="editorial-img w-full h-full object-cover object-[center_12%] brightness-95 group-hover:brightness-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = member.fallbackImage;
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#000d1e]/90 backdrop-blur-md border border-white/15 text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                    LEADERSHIP
                  </div>
                </div>

                <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#E10600] mb-1.5 text-center sm:text-left">
                  {member.role}
                </div>

                <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-snug text-center sm:text-left">
                  {member.name}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal text-center sm:text-left">
                  {member.focus}
                </p>
              </div>

              {/* Badges de Especialidad */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap justify-center sm:justify-start gap-1.5">
                {member.badges.map((b) => (
                  <span
                    key={b}
                    className="px-2 py-0.5 text-[9px] font-mono font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Slogan Oficial */}
        <div className="mt-16 p-8 border border-white/15 bg-[#00142d] text-center max-w-5xl mx-auto">
          <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#E10600] mb-2">
            SLOGAN OFICIAL
          </div>
          <div className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white">
            "GESTIÓN INTELIGENTE, PRECISIÓN EN TIEMPO REAL"
          </div>
        </div>
      </div>
    </section>
  );
};
