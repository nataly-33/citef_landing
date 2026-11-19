import React from 'react';
import { Activity, Calendar, Wrench, BrainCircuit, ArrowUpRight } from 'lucide-react';

export const Soluciones: React.FC = () => {
  const solutions = [
    {
      id: 'monitoreo',
      title: 'Monitoreo en Tiempo Real',
      tech: 'WebSockets • Socket.IO',
      description:
        'Mapeo visual e interactivo de salas. Visualice terminales libres, ocupadas o en mantenimiento con sincronización instantánea.',
      icon: Activity,
      color: 'hover:border-[#002855]',
      iconBg: 'bg-blue-50 text-[#002855]',
    },
    {
      id: 'reservas',
      title: 'Reservas sin Solapamientos',
      tech: 'Algoritmo de Intervalos',
      description:
        'Validación matemática estricta que previene cruces de horario, con jerarquía de prioridad para exámenes parciales y cátedras.',
      icon: Calendar,
      color: 'hover:border-[#A81124]',
      iconBg: 'bg-rose-50 text-[#A81124]',
    },
    {
      id: 'rams',
      title: 'Soporte RAMS y Guardia',
      tech: 'Confiabilidad MTBF / MTTR',
      description:
        'Checklist digital de apertura, actas formales de custodia entre auxiliares y trazabilidad de reparaciones en taller.',
      icon: Wrench,
      color: 'hover:border-amber-600',
      iconBg: 'bg-amber-50 text-amber-700',
    },
    {
      id: 'ml',
      title: 'Analítica Predictiva (IA)',
      tech: 'Random Forest + Erlang-C',
      description:
        'Microservicio en FastAPI que proyecta la afluencia estudiantil y estima tiempos de espera en cola para evitar congestiones.',
      icon: BrainCircuit,
      color: 'hover:border-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <section id="soluciones" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200/80 text-slate-700">
            Capacidades del Sistema
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight">
            Pilares Tecnológicos
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Diseñados para garantizar alta disponibilidad y cero fallos operativos.
          </p>
        </div>

        {/* Cuadrícula de 4 Tarjetas Minimalistas con Hover Sofisticado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default ${item.color} hover:-translate-y-2`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {item.tech}
                  </span>
                  <h3 className="text-lg font-bold text-[#002855] mt-1 group-hover:text-[#073b75] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[11px] font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                  <span>100% Integrado en CITEF</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
