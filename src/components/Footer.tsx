import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { CITEF_URL } from '../config/env';

export const Footer: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerColumns = [
    {
      title: 'SISTEMA CITEF',
      links: [
        { label: 'Monitoreo en Tiempo Real', href: '#monitoreo' },
        { label: 'Reservas sin Solapamiento', href: '#reservas' },
        { label: 'Predicción Machine Learning', href: '#analitica' },
        { label: 'Control de Turnos RAMS', href: '#editorial' },
        { label: 'Mapeo Matricial 2D', href: '#bento' },
      ],
    },
    {
      title: 'ARQUITECTURA',
      links: [
        { label: 'NestJS v11 & TypeORM', href: '#editorial' },
        { label: 'PostgreSQL 15 (30 Tablas)', href: '#editorial' },
        { label: 'FastAPI :8001 (Python)', href: '#analitica' },
        { label: 'Socket.IO Gateway', href: '#monitoreo' },
        { label: 'Angular 18 Standalone', href: '#bento' },
      ],
    },
    {
      title: 'CALIDAD & NORMAS',
      links: [
        { label: 'Plan SQA IEEE 730', href: '#equipo' },
        { label: 'Estándar ISO/IEC 25010', href: '#equipo' },
        { label: 'Ingeniería RAMS (MTBF/MTTR)', href: '#bento' },
        { label: 'Auditoría Forense JSONB', href: '#editorial' },
        { label: 'Certificación 141 Pruebas', href: '#bento' },
      ],
    },
    {
      title: 'EMPRESA & LEGAL',
      links: [
        { label: 'SmartLab Solutions S.R.L.', href: '#equipo' },
        { label: 'SEPREC D.S. 4596', href: '#contacto' },
        { label: 'NIT Régimen General SIN', href: '#contacto' },
        { label: 'SENAPI Ley N° 1322', href: '#contacto' },
        { label: 'Sede CITEF FCEE UAGRM', href: '#contacto' },
      ],
    },
    {
      title: 'ACCESO RÁPIDO',
      links: [
        { label: 'Portal CITEF en Producción', href: CITEF_URL, isExternal: true },
        { label: 'Demostración Técnica', href: '#contacto' },
        { label: 'Soporte de Salas', href: '#contacto' },
        { label: 'Documentación SW2', href: '#editorial' },
        { label: 'Volver al Inicio', href: '#hero' },
      ],
    },
  ];

  return (
    <footer className="bg-[#000a18] text-white border-t border-white/10 font-sans">
      {/* BANDA SUPERIOR */}
      <div className="w-full border-b border-white/10 py-16 px-6 sm:px-12 lg:px-16 bg-[#001024] flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 text-center sm:text-left">
          <img
            src="/logo_fcee.png"
            alt="FCEE UAGRM"
            className="h-14 w-auto object-contain hidden sm:block"
          />
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E10600]">
              FACULTAD DE CIENCIAS ECONÓMICAS Y EMPRESARIALES • UAGRM
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              SISTEMA CITEF EN PRODUCCIÓN
            </h4>
          </div>
        </div>

        <a
          href={CITEF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group py-4 px-8 bg-[#E10600] hover:bg-[#c5182f] text-white transition-all duration-300 font-mono font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-3 shrink-0 shadow-xl shadow-red-950/40"
        >
          <span>INGRESAR AL SISTEMA</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* GRID DE ENLACES (5 Columnas) */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
        <div className="hidden lg:grid grid-cols-5 gap-10">
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h5 className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-white">
                {col.title}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-xs text-zinc-400 hover:text-white transition-colors editorial-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vista Móvil */}
        <div className="lg:hidden divide-y divide-white/10">
          {footerColumns.map((col, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div key={col.title} className="py-4">
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-xs font-mono font-bold tracking-wider uppercase text-white py-1"
                >
                  <span>{col.title}</span>
                  {isOpen ? <Minus className="w-4 h-4 text-[#E10600]" /> : <Plus className="w-4 h-4 text-zinc-400" />}
                </button>
                {isOpen && (
                  <ul className="pt-3 pb-2 space-y-2 pl-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.isExternal ? '_blank' : undefined}
                          rel={link.isExternal ? 'noopener noreferrer' : undefined}
                          className="text-xs text-zinc-400 hover:text-white transition-colors block py-1"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* BARRA INFERIOR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono text-zinc-400 tracking-wider">
          <div className="text-center sm:text-left space-y-1">
            <div>
              © 2026 <strong>SMARTLAB SOLUTIONS S.R.L.</strong> • TODOS LOS DERECHOS RESERVADOS.
            </div>
            <div>
              DESARROLLADO POR NATALY MARTÍNEZ & JAEL MAMANI SANDOVAL • CITEF FCEE UAGRM
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>SANTA CRUZ — BOLIVIA</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-white/20 hover:border-[#E10600] hover:bg-[#E10600] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
