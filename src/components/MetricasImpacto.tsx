import React from 'react';
import { TrendingUp, Clock, ShieldCheck, Award, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export const MetricasImpacto: React.FC = () => {
  const kpis = [
    {
      metric: '45%',
      label: 'Reducción en Tiempos de Espera',
      sub: 'Asignación inmediata de puestos y colas optimizadas mediante Erlang-C',
      icon: Clock,
      color: 'amber',
    },
    {
      metric: '100%',
      label: 'Eliminación de Solapamientos',
      sub: 'Validación algorítmica de intervalos temporales cerrados en reservas docentes',
      icon: ShieldCheck,
      color: 'rose',
    },
    {
      metric: '99.2%',
      label: 'Disponibilidad Operativa (A)',
      sub: 'Mantenimiento preventivo guiado por métricas de confiabilidad RAMS',
      icon: TrendingUp,
      color: 'blue',
    },
    {
      metric: '0',
      label: 'Planillas en Papel',
      sub: 'Digitalización integral de bitácoras, actas de relevo y control de novedades',
      icon: Award,
      color: 'emerald',
    },
  ];

  const benefits = [
    {
      title: 'Acreditación Universitaria Internacional',
      desc: 'Generación automatizada de reportes formales con membrete institucional FCEE UAGRM requeridos por comisiones de evaluación (MERCOSUR, CONEAU y CEUB).',
    },
    {
      title: 'Auditoría Forense y Ciberseguridad',
      desc: 'Bitácora transaccional inmutable que almacena en formato JSONB los valores anteriores y nuevos de cada modificación, junto a la IP y usuario responsable.',
    },
    {
      title: 'Decisiones Basadas en Evidencia con Machine Learning',
      desc: 'Predicciones cuantitativas de saturación que permiten justificar con datos reales la adquisición de nuevo hardware o apertura de horarios especiales.',
    },
    {
      title: 'Optimización del Gasto Público en Hardware',
      desc: 'Control individualizado del tiempo medio entre fallos (MTBF) de cada componente para planificar compras y reparaciones de manera eficiente.',
    },
  ];

  return (
    <section id="impacto" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30">
            Impacto Académico & Retorno de Inversión
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Resultados Comprobados en Entorno Real
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Métricas de desempeño obtenidas en la implementación piloto en el Centro de Informática y Telemática Facultativo (CITEF) de la FCEE - UAGRM.
          </p>
        </div>

        {/* KPIs Destacados */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700/80 backdrop-blur-md hover:border-slate-600 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 group-hover:scale-105 transition-transform">
                    {kpi.metric}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-700/50 text-slate-300 group-hover:text-amber-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-white">{kpi.label}</div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">{kpi.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Cuadrícula de Beneficios */}
        <div className="mt-16 pt-16 border-t border-slate-800 grid md:grid-cols-2 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-rose-900/40 text-rose-300 border border-rose-800/50 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{b.title}</h4>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
