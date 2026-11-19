import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CITEF_URL } from '../config/env';

export const NarrativeBanners: React.FC = () => {
  return (
    <div className="w-screen bg-[#000d1e] text-white">
      {/* =========================================================================
          BLOQUE 1: Monitoreo en Tiempo Real (Alineación Centro-Inferior)
          ========================================================================= */}
      <section
        id="monitoreo"
        className="relative w-screen h-[90vh] sm:h-[95vh] overflow-hidden bg-[#000d1e] flex flex-col justify-end items-center text-center pb-[10vh] border-b border-white/10 group"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=85"
            alt="Puestos de Laboratorio en Tiempo Real"
            className="editorial-img w-full h-full object-cover object-center brightness-55"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000d1e] via-[#00142d]/60 to-transparent pointer-events-none" />

        <div className="relative z-20 px-6 sm:px-12 max-w-4xl space-y-3">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-300">
            DIVISIÓN TELEMETRÍA & WEBSOCKETS • SOCKET.IO
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase text-white font-sans">
            VISIBILIDAD ABSOLUTA.<br />
            <span className="text-zinc-300">LATENCIA &lt; 35MS.</span>
          </h2>
          <div className="pt-3">
            <a
              href={CITEF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-white hover:text-[#E10600] transition-colors"
            >
              <span className="text-xs font-black font-mono tracking-[0.2em] uppercase">
                VER MONITOREO DE SALAS EN VIVO
              </span>
              <div className="cta-circle">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BLOQUE 2: Reservas Inteligentes (Alineación Izquierda-Inferior)
          ========================================================================= */}
      <section
        id="reservas"
        className="relative w-screen h-[90vh] sm:h-[95vh] overflow-hidden bg-[#000d1e] flex flex-col justify-end text-left pb-[10vh] px-6 sm:px-12 lg:px-20 border-b border-white/10 group"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=2200&q=85"
            alt="Aulas y Laboratorios CITEF"
            className="editorial-img w-full h-full object-cover object-center brightness-50"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000d1e] via-[#00142d]/60 to-transparent pointer-events-none" />

        <div className="relative z-20 max-w-3xl space-y-3">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-300">
            MOTOR MATEMÁTICO • INTERVALOS CERRADOS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase text-white font-sans">
            CERO SOLAPAMIENTOS.<br />
            <span className="text-zinc-300">PRIORIDAD DE EXÁMENES.</span>
          </h2>
          <div className="pt-3">
            <a
              href="#editorial"
              className="group inline-flex items-center gap-4 text-white hover:text-[#E10600] transition-colors"
            >
              <span className="text-xs font-black font-mono tracking-[0.2em] uppercase">
                EXAMINAR MOTOR DE VALIDACIÓN
              </span>
              <div className="cta-circle">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BLOQUE 3: Analítica Predictiva & Colas M/M/c (Alineación Centro-Inferior)
          ========================================================================= */}
      <section
        id="analitica"
        className="relative w-screen h-[90vh] sm:h-[95vh] overflow-hidden bg-[#000d1e] flex flex-col justify-end items-center text-center pb-[10vh] border-b border-white/10 group"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2200&q=85"
            alt="Analítica Predictiva y Estadísticas"
            className="editorial-img w-full h-full object-cover object-center brightness-55"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000d1e] via-[#00142d]/60 to-transparent pointer-events-none" />

        <div className="relative z-20 px-6 sm:px-12 max-w-4xl space-y-3">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-300">
            MACHINE LEARNING • RANDOM FOREST & COLAS M/M/c
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase text-white font-sans">
            MODELADO ERLANG-C.<br />
            <span className="text-zinc-300">PREDICCIÓN DE SATURACIÓN.</span>
          </h2>
          <div className="pt-3">
            <a
              href="#bento"
              className="group inline-flex items-center gap-4 text-white hover:text-[#E10600] transition-colors"
            >
              <span className="text-xs font-black font-mono tracking-[0.2em] uppercase">
                EXPLORAR ARQUITECTURA TÉCNICA
              </span>
              <div className="cta-circle">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
