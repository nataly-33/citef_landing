import React from 'react';
import { Target, Compass, Sparkles, Award, ShieldCheck, Code2, Users, Building2, CheckCircle } from 'lucide-react';

export const Nosotros: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nataly Vanessa Martínez Martínez',
      role: 'Co-Fundadora & Gerente de Producto (Product Manager)',
      focus: 'Arquitectura Backend, Sistemas Distribuidos & Machine Learning',
      description:
        'Líder del diseño arquitectónico en NestJS, modelado relacional PostgreSQL, microservicio predictivo en Python FastAPI (Random Forest & Teoría de Colas) y auditoría transaccional.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      badge: 'Dirección I+D',
    },
    {
      name: 'Jael Mamani Sandoval',
      role: 'Co-Fundadora & Directora de Calidad de Software (SQA Lead)',
      focus: 'Arquitectura Frontend, Aseguramiento de Calidad & UX/UI',
      description:
        'Responsable del diseño SPA reactivo en Angular 18 Standalone, gobierno de pruebas IEEE 730 / ISO 25010, integración de métricas RAMS y control estricto de accesibilidad institucional.',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      badge: 'Dirección SQA',
    },
  ];

  const values = [
    {
      title: 'Rigor Científico y Matemático',
      desc: 'Modelado formal con Teoría de Colas M/M/c, curvas Erlang-C y algoritmos de no-solapamiento horario en intervalos temporales.',
      icon: Award,
    },
    {
      title: 'Aseguramiento de Calidad (SQAP)',
      desc: 'Procesos de certificación basados en IEEE 730, cobertura de pruebas unitarias al 100% y métricas de complejidad ciclomática de McCabe.',
      icon: ShieldCheck,
    },
    {
      title: 'Compromiso con la Educación Pública',
      desc: 'Optimización de recursos estatales para maximizar el acceso de estudiantes universitarios a equipamiento de alta tecnología.',
      icon: Building2,
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-800 border border-rose-200">
            Identidad Corporativa & Equipo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Quiénes Somos y Qué Nos Impulsa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">SmartLab Solutions S.R.L.</strong> es una empresa de base tecnológica (EdTech)
            creada para modernizar la infraestructura de laboratorios universitarios, validada exitosamente en el
            CITEF de la Facultad de Ciencias Económicas y Empresariales de la UAGRM.
          </p>
        </div>

        {/* Tarjetas de Misión, Visión y Slogan */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="rounded-2xl p-8 bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-rose-900/10 text-rose-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Nuestra Misión</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Transformar la gestión de la infraestructura tecnológica universitaria mediante soluciones web
              inteligentes, automatizando la ocupación en tiempo real, garantizando la equidad académica en reservas y
              aplicando modelos predictivos para optimizar la inversión pública en centros de cómputo.
            </p>
          </div>

          {/* Visión */}
          <div className="rounded-2xl p-8 bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-900/10 text-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Nuestra Visión</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Consolidarse al 2030 como la plataforma tecnológica líder en gestión inteligente de laboratorios y recursos de cómputo en el sistema universitario boliviano (CEUB) y centros de educación superior en América Latina.
            </p>
          </div>

          {/* Slogan y Filosofía */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-[#002855] text-white border border-slate-800 hover:shadow-xl transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Slogan Oficial</h3>
            <div className="mt-3 text-lg font-extrabold text-amber-300 italic tracking-wide">
              "Gestión Inteligente, Precisión en Tiempo Real"
            </div>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Cada decisión de reserva, relevo de turno o asignación de taller se sustenta en datos exactos,
              auditoría forense inalterable y procesamiento matemático en milisegundos.
            </p>
          </div>
        </div>

        {/* Equipo Fundador y Desarrollador */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
              Liderazgo & Desarrollo
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Equipo Fundador del Proyecto
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ingenieras de software a cargo del diseño conceptual, implementación técnica de los 8 módulos y aseguramiento de calidad del Sistema CITEF.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200 shadow-md"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-rose-800 mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-100 text-slate-700 shrink-0">
                      {member.badge}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Área de Especialidad
                    </div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5">
                      {member.focus}
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>UAGRM • Facultad de Ciencias de la Computación</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilares y Valores de la Empresa */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 shrink-0">
                    <Icon className="w-5 h-5 text-rose-800" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{v.title}</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
