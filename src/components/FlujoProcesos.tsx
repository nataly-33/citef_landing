import React from 'react';
import { CalendarCheck, Monitor, Wrench, TrendingUp, ChevronRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  role: string;
  title: string;
  description: string;
  highlight: string;
  icon: React.ElementType;
}

export const FlujoProcesos: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      role: 'DOCENTES & DIRECCIÓN',
      title: 'SOLICITUD Y RESERVA',
      description:
        'Programación académica semestral y exámenes con validación algorítmica de intervalos temporales y cero solapamientos.',
      highlight: 'Intervalos cerrados [Ti, Tf]',
      icon: CalendarCheck,
    },
    {
      number: '02',
      role: 'AUXILIARES DE GUARDIA',
      title: 'CONTROL DE ACCESO',
      description:
        'Apertura de turno con checklist digital y asignación ágil de puestos en la cuadrícula visual 2D por WebSockets en vivo.',
      highlight: 'Latencia < 35ms',
      icon: Monitor,
    },
    {
      number: '03',
      role: 'SOPORTE TÉCNICO',
      title: 'TALLER & INCIDENCIAS',
      description:
        'Reporte de fallas, inhabilitación automática de la máquina y generación de orden de reparación en bandeja de taller.',
      highlight: 'Métricas RAMS (MTBF/MTTR)',
      icon: Wrench,
    },
    {
      number: '04',
      role: 'AUTORIDADES & EVALUADORES',
      title: 'ANALÍTICA & ACREDITACIÓN',
      description:
        'Proyección de demanda horaria mediante RandomForestRegressor, curvas Erlang-C y reportes oficiales para comisiones de acreditación.',
      highlight: 'Teoría de Colas M/M/c',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="flujo" className="w-screen bg-[#000d1e] text-white border-b border-white/10">
      {/* Cabecera de Sección */}
      <div className="w-full px-6 sm:px-12 lg:px-16 py-14 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E10600]">
            CIRCUITO OPERATIVO INSTITUCIONAL
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
            FLUJO DEL PROCESO
          </h3>
        </div>
        <div className="text-[11px] font-mono text-zinc-400">
          4 ETAPAS SINCRONIZADAS DE EXTREMO A EXTREMO
        </div>
      </div>

      {/* Grid de 4 Pasos (Zero-Radius, Sin márgenes internos redundantes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white/10">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative bg-[#001024] hover:bg-[#001738] p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 min-h-[380px]"
            >
              <div>
                {/* Número Monumental y Icono */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="text-4xl sm:text-5xl font-black font-sans text-white/30 group-hover:text-[#E10600] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-[#E10600] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#E10600] mb-1.5">
                  {step.role}
                </div>

                <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-3">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Highlight Técnico al pie */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-200">{step.highlight}</span>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
