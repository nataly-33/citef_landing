import React, { useState, useEffect } from 'react';
import {
  Activity,
  CalendarCheck,
  ClipboardCheck,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  Shield,
  Layers,
} from 'lucide-react';

interface Slide {
  id: string;
  tabLabel: string;
  tag: string;
  title: string;
  summary: string;
  icon: React.ElementType;
  renderVisual: () => React.ReactNode;
}

export const ShowcaseCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Slide[] = [
    {
      id: 'monitoreo',
      tabLabel: 'Monitoreo en Tiempo Real',
      tag: 'WebSockets • Socket.IO',
      title: 'Mapeo Matricial 2D de Laboratorios en Vivo',
      summary:
        'Visualice el estado de cada estación física en milisegundos. Sincronización instantánea entre auxiliares y administradores sin recargar la página.',
      icon: Activity,
      renderVisual: () => (
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-xl">
          {/* Cabecera del mockup */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-slate-200">Laboratorio 1 — CITEF</span>
              <span className="text-slate-500">• 24 Puestos Activos</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-emerald-400">18 En Uso</span>
              <span className="text-slate-400">4 Libres</span>
              <span className="text-rose-400">2 Taller</span>
            </div>
          </div>

          {/* Cuadrícula visual 2D de máquinas */}
          <div className="py-5 grid grid-cols-6 sm:grid-cols-6 gap-2 sm:gap-2.5">
            {Array.from({ length: 24 }).map((_, i) => {
              const pcNumber = i + 1;
              let status = 'occupied';
              let bgColor = 'bg-[#002855] border-blue-500 text-blue-200';

              if ([4, 11, 16, 22].includes(pcNumber)) {
                status = 'available';
                bgColor = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
              } else if ([7, 19].includes(pcNumber)) {
                status = 'maintenance';
                bgColor = 'bg-rose-950/80 border-rose-500 text-rose-200';
              } else if ([1, 2].includes(pcNumber)) {
                status = 'reserved';
                bgColor = 'bg-purple-950/80 border-purple-500 text-purple-200';
              }

              return (
                <div
                  key={i}
                  className={`p-2 rounded-lg border flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:scale-110 shadow-xs ${bgColor}`}
                  title={`PC-${pcNumber.toString().padStart(2, '0')}: ${status}`}
                >
                  <Monitor className="w-4 h-4 mb-0.5" />
                  <span className="text-[10px] font-mono font-bold">
                    {pcNumber.toString().padStart(2, '0')}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Barra inferior de estado del mockup */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Latencia WebSockets: &lt; 32 ms
            </span>
            <span className="font-semibold text-amber-300">Socket.IO Gateway Conectado</span>
          </div>
        </div>
      ),
    },
    {
      id: 'reservas',
      tabLabel: 'Reservas sin Solapamiento',
      tag: 'Motor Algorítmico',
      title: 'Validación Matemática de Intervalos Temporales',
      summary:
        'Cero colisiones horarias. El motor valida automáticamente intervalos cerrados con jerarquía de prioridades para exámenes y cátedras.',
      icon: CalendarCheck,
      renderVisual: () => (
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
            <span className="font-bold text-slate-200">Agenda Semanal — Sala 2 (Informática)</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
              Validación Automática OK
            </span>
          </div>

          <div className="py-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-800/80 border-l-4 border-[#002855] border-y border-r border-slate-700/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">08:00 — 10:15 | Econometría II</div>
                <div className="text-[11px] text-slate-400">Docente: Lic. Rojas • Software: Stata / EViews</div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                Cátedra Regular
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/80 border-l-4 border-[#A81124] border-y border-r border-slate-700/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">10:30 — 12:45 | Examen Parcial de Finanzas</div>
                <div className="text-[11px] text-slate-400">Docente: Msc. Justiniano • 40 Estudiantes</div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                Alta Prioridad
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/50 border-l-4 border-emerald-500 border-y border-r border-emerald-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-emerald-200">
                  Próximo intervalo [14:00 - 16:15] verificado sin colisiones
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300">Disponible</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Aprobación en lote semestral soportada</span>
            <span className="text-slate-300 font-mono">Rollback en colisión</span>
          </div>
        </div>
      ),
    },
    {
      id: 'guardia',
      tabLabel: 'Control de Turnos & Relevo',
      tag: 'Gestión Operativa',
      title: 'Checklist Digital y Actas Oficiales de Relevo',
      summary:
        'Apertura de turno en 3 verificaciones y firma digital entre auxiliares. Eliminación total de planillas físicas y custodia transparente de salas.',
      icon: ClipboardCheck,
      renderVisual: () => (
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <span className="font-bold text-slate-200">Guardia Activa — Turno Tarde</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-semibold">
              En Curso
            </span>
          </div>

          <div className="py-4 grid sm:grid-cols-2 gap-3">
            {/* Checklist */}
            <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70 space-y-2">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                Checklist de Apertura
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Orden y limpieza de sala: Conforme</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aire acondicionado operativo: 22°C</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Equipos encendidos y testeados: 24/24</span>
              </div>
            </div>

            {/* Acta de Relevo */}
            <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Acta de Relevo Formal
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Auxiliar Saliente: <strong className="text-white">J. Mamani</strong>
                </div>
                <div className="text-xs text-slate-300">
                  Auxiliar Entrante: <strong className="text-white">N. Martínez</strong>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-700 text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Custodia formal firmada digitalmente
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between">
            <span>Averías reportadas pasan a Taller de inmediato</span>
            <span className="font-mono text-slate-300">CU-18 & CU-19</span>
          </div>
        </div>
      ),
    },
    {
      id: 'analitica',
      tabLabel: 'Analítica Predictiva (ML)',
      tag: 'FastAPI :8001 • Random Forest',
      title: 'Predicción de Demanda Estudiantil y Colas M/M/c',
      summary:
        'Cálculo de probabilidad de demora Erlang-C, factor de saturación y tiempos de espera para planificar salas antes de que se congestionen.',
      icon: TrendingUp,
      renderVisual: () => (
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <span className="font-bold text-slate-200">Curva de Demanda — Próximas 12 Horas</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-semibold font-mono">
              Scikit-learn + Erlang-C
            </span>
          </div>

          {/* Gráfico visual de barras de predicción */}
          <div className="py-4">
            <div className="text-[11px] text-slate-400 mb-2 flex justify-between">
              <span>Ocupación Proyectada por Franja Horaria</span>
              <span className="text-amber-400 font-bold">Pico Estimado: 15:00 - 17:00</span>
            </div>

            <div className="h-28 flex items-end gap-2 sm:gap-3 pt-2 px-1">
              {[
                { h: '08:00', v: 40, col: 'bg-blue-500' },
                { h: '10:00', v: 65, col: 'bg-blue-500' },
                { h: '12:00', v: 50, col: 'bg-blue-500' },
                { h: '14:00', v: 80, col: 'bg-amber-500' },
                { h: '16:00', v: 92, col: 'bg-rose-500' },
                { h: '18:00', v: 75, col: 'bg-blue-500' },
                { h: '20:00', v: 35, col: 'bg-blue-500' },
              ].map((bar) => (
                <div key={bar.h} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[9px] font-mono text-slate-400">{bar.v}%</span>
                  <div
                    style={{ height: `${bar.v}%` }}
                    className={`w-full rounded-t-md transition-all duration-500 ${bar.col}`}
                  />
                  <span className="text-[9px] text-slate-400">{bar.h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Métricas RAMS condensadas */}
          <div className="pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-1.5 rounded bg-slate-800/60">
              <div className="text-slate-400 text-[10px]">MTBF</div>
              <div className="font-bold text-white font-mono">180 hrs</div>
            </div>
            <div className="p-1.5 rounded bg-slate-800/60">
              <div className="text-slate-400 text-[10px]">MTTR</div>
              <div className="font-bold text-white font-mono">1.4 hrs</div>
            </div>
            <div className="p-1.5 rounded bg-slate-800/60">
              <div className="text-slate-400 text-[10px]">Disponibilidad</div>
              <div className="font-bold text-emerald-400 font-mono">99.2%</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Auto-play suave
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const active = slides[currentSlide];
  const Icon = active.icon;

  return (
    <section id="plataforma" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#002855] border border-blue-200">
            Plataforma Interactiva
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight">
            Descubra el Sistema CITEF en Acción
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Navegue por las interfaces y funcionalidades que transforman el centro de cómputo.
          </p>
        </div>

        {/* Pestañas de Navegación del Carrusel */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentSlide === idx
                  ? 'bg-[#002855] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {s.tabLabel}
            </button>
          ))}
        </div>

        {/* Tarjeta Contenedora Principal del Carrusel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-xs transition-all"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Columna Izquierda: Información Concisa (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#A81124] shadow-2xs">
                <Icon className="w-4 h-4 text-[#A81124]" />
                <span>{active.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002855] leading-snug">
                {active.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {active.summary}
              </p>

              {/* Controles de avance */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                  }
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#002855] hover:border-[#002855] hover:scale-105 transition-all shadow-2xs"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-3">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full cursor-pointer transition-all ${
                        currentSlide === i ? 'w-6 bg-[#002855]' : 'w-2 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#002855] hover:border-[#002855] hover:scale-105 transition-all shadow-2xs"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Columna Derecha: Vista Dinámica del Slide (7 cols) */}
            <div className="lg:col-span-7 transition-all duration-300">
              {active.renderVisual()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
