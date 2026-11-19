import React from 'react';
import { CalendarCheck, MonitorCheck, Wrench, BarChart4, ArrowRight } from 'lucide-react';

export const ComoFunciona: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Solicitud y Reserva Docente',
      role: 'Docentes & Dirección de Carrera',
      icon: CalendarCheck,
      description:
        'El docente selecciona la sala, horario y requisitos de software especializado. El motor algorítmico valida instantáneamente la no-colisión de intervalos cerrados y gestiona la aprobación en lote.',
      highlights: [
        'Cero conflictos de horario garantizados',
        'Prioridad automática para exámenes parciales',
        'Confirmación inmediata vía correo institucional',
      ],
    },
    {
      number: '02',
      title: 'Control de Acceso en Sala',
      role: 'Auxiliares de Guardia & Estudiantes',
      icon: MonitorCheck,
      description:
        'El auxiliar inicia guardia con checklist digital. En la cuadrícula interactiva de la sala, asigna los puestos a estudiantes, actualizando el estado libre/ocupado en tiempo real por WebSockets.',
      highlights: [
        'Mapeo interactivo 2D de la sala física',
        'Asignación ágil en menos de 5 segundos',
        'Sincronización instantánea con el servidor central',
      ],
    },
    {
      number: '03',
      title: 'Monitoreo y Soporte Técnico',
      role: 'Técnicos de Soporte & Mantenimiento',
      icon: Wrench,
      description:
        'Si un equipo presenta fallas, el auxiliar reporta la avería. Al marcarla para traslado a taller, el sistema genera automáticamente la orden de reparación e inhabilita la estación.',
      highlights: [
        'Transición de estado automática a En Taller',
        'Bandeja técnica personalizada por especialista',
        'Ficha técnica oficial de ingreso y egreso',
      ],
    },
    {
      number: '04',
      title: 'Analítica Predictiva & Acreditación',
      role: 'Jefatura de Laboratorios & Decanatura',
      icon: BarChart4,
      description:
        'El tablero de mando procesa métricas RAMS (MTBF, MTTR, Disponibilidad) y el microservicio de Machine Learning proyecta la demanda futura y probabilidad de espera mediante colas M/M/c.',
      highlights: [
        'Curvas Erlang-C de probabilidad de espera',
        'Reportes oficiales listos para imprimir (cero screenshots)',
        'Cumplimiento de estándares MERCOSUR y CONEAU',
      ],
    },
  ];

  return (
    <section id="flujo" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-800 border border-rose-200">
            Flujo Operativo Integral
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cómo Funciona el Sistema CITEF
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Un circuito digital continuo y sincronizado que conecta docentes, estudiantes,
            auxiliares de turno, técnicos de mantenimiento y autoridades universitarias.
          </p>
        </div>

        {/* Proceso en 4 Pasos */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                {/* Conector de flecha decorativa en pantallas grandes */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-8 h-8 group-hover:text-rose-800 group-hover:translate-x-1 transition-all" />
                  </div>
                )}

                <div>
                  {/* Número y Rol */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-rose-900/30 group-hover:text-rose-800 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {step.role}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Aspectos destacados */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 space-y-2">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cita de Calidad del Proceso */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Trazabilidad garantizada: 100% de operaciones registradas con usuario, fecha e IP en bitácora forense.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
