import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NarrativeBanners } from './components/NarrativeBanners';
import { FlujoProcesos } from './components/FlujoProcesos';
import { EditorialSplitCarousel } from './components/EditorialSplitCarousel';
import { BentoGrid } from './components/BentoGrid';
import { Equipo } from './components/Equipo';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export function App() {
  return (
    <div className="min-h-screen w-screen bg-[#000d1e] text-white font-sans selection:bg-[#E10600] selection:text-white overflow-x-hidden">
      {/* A. Navbar Flotante con Logo SmartLab & Escudo FCEE UAGRM */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* B. Hero Full-Viewport (100vh) con Botón Gigante y Escudo FCEE */}
        <Hero />

        {/* C. Secciones Narrativas Apiladas (90vh cada una, Gap 0) */}
        <NarrativeBanners />

        {/* D. Flujo de Procesos Institucionales (4 Etapas Sincronizadas) */}
        <FlujoProcesos />

        {/* E. Carrusel Editorial Split Layout 50/50 */}
        <EditorialSplitCarousel />

        {/* F. Mosaico Asimétrico / Bento Grid de Fortalezas Tecnológicas */}
        <BentoGrid />

        {/* G. Identidad Corporativa (Misión/Visión) & Equipo Fundador (Nataly & Jael) */}
        <Equipo />

        {/* H. Contáctenos (Validación en Vivo & Mapa) */}
        <Contacto />
      </main>

      {/* I. Footer Estructurado en 5 Columnas + Banda de Acceso */}
      <Footer />

      {/* J. Widget Flotante de Asistente FAQ */}
      <ChatWidget />
    </div>
  );
}

export default App;
