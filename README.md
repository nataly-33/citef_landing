# Landing Page Corporativa — SmartLab Solutions S.R.L.
### Sistema Web de Gestión, Monitoreo en Tiempo Real y Predicción de Demanda Estudiantil para los Laboratorios del CITEF (FCEE - UAGRM)

Landing page corporativa de alto impacto visual desarrollada bajo la **Especificación Técnica de Arquitectura UI & Motion (Estilo Editorial / Automotriz de Lujo - Ferrari.com)** para el **Capítulo VII (Sitio Web Corporativo)** de **Ingeniería de Software II (Ing. Martínez)**.

---

## 1. Identidad Visual y Estilo Institucional

* **Paleta FCEE UAGRM:** Fondo en **Azul Marino Profundo Institucional** (`#000d1e` / `#001024` / `#00142d`) con acentos en **Rojo Deportivo / Carmesí Vivo** (`#E10600` / `#A81124`).
* **Favicon Oficial:** El icono de la pestaña del navegador está enlazado a [`smartLab_logo.png`](file:///home/nataly/Projects/laboratorios/smartlab_landing/public/smartLab_logo.png).
* **Escudo Oficial FCEE UAGRM:** Ubicado de manera prominente junto al botón principal de acceso en la barra superior y en el Hero.
* **Geometría Zero-Radius:** `border-radius: 0px` en contenedores, tarjetas, inputs y botones rectangulares. Excepción: botones de acción circular CTA (`rounded-full`) de 48px con flecha animada.
* **Tipografía:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` en sincronía con `citef_frontend`.

---

## 2. Secciones Principales de la Plataforma

1. **Navbar Flotante:**
   - Logotipo grande de SmartLab (`h-12 sm:h-14`) sobre contenedor sutil.
   - Escudo oficial FCEE UAGRM junto al botón principal.
   - Botón de acceso directo en rojo vivo (`#E10600`) hacia `VITE_CITEF_URL`.
   - Comportamiento flotante inteligente (ocultar al bajar, mostrar al subir).

2. **Hero Full-Viewport (100vh):**
   - Fotografía contextual de laboratorio de computadoras universitario.
   - Botón monumental **"INGRESAR AL SISTEMA CITEF"** en rojo vivo acompañado del escudo oficial FCEE UAGRM.
   - Indicadores horizontales con barra de progreso sincronizada.

3. **Secciones Narrativas Apiladas (90vh, Gap 0):**
   - **01. Telemetría & WebSockets:** Laboratorio de puestos conectados con latencia &lt; 35ms.
   - **02. Motor de Reservas:** Aulas universitarias y laboratorios para cátedras sin colisiones.
   - **03. Machine Learning & Colas M/M/c:** Gráficos estadísticos y modelo predictivo Erlang-C.

4. **Flujo de Procesos Institucionales (4 Etapas):**
   - **Etapa 01:** Solicitud y Reserva Docente (validación algorítmica de intervalos cerrados).
   - **Etapa 02:** Control de Acceso en Sala (apertura de guardia y asignación en cuadrícula 2D).
   - **Etapa 03:** Monitoreo y Taller RAMS (reporte de averías, inhabilitación y orden de taller).
   - **Etapa 04:** Analítica Predictiva & Acreditación (curvas Erlang-C y reportes oficiales RAMS).

5. **Carrusel Editorial Split 50/50:**
   - Auditoría transaccional JSONB y PostgreSQL 15.
   - Confiabilidad técnica RAMS (MTBF 180h / MTTR 1.4h / Disponibilidad 99.2%).
   - Arquitectura reactiva frontend con Angular 18 Standalone.

6. **Bento Grid de 2 Columnas (Fortalezas Tecnológicas):**
   - Microservicio FastAPI :8001 (Random Forest).
   - Integridad transaccional PostgreSQL.
   - Mantenimiento industrial RAMS.
   - WebSockets y mapeo de salas 2D.

7. **Identidad Corporativa & Equipo Fundador:**
   - **Misión, Visión y Principios Clave** en bloque de 3 columnas limpias.
   - Encuadre fotográfico vertical (relación 3:4) con enfoque facial superior que garantiza la visualización nítida y completa de los rostros:
     - **Nataly Vanessa Martínez Martínez:** Co-Fundadora & Product Manager (Backend & ML).
     - **Jael Mamani Sandoval:** Co-Fundadora & Directora de Calidad SQA (Frontend & RAMS).

8. **Contáctenos:**
   - Sede física en CITEF (Módulo 254 UAGRM), teléfonos, correos y Google Maps con filtro oscuro.
   - Formulario de solicitud con validación en tiempo real en rojo (`#E10600`) y banner de confirmación.

9. **Footer Estructurado en 5 Columnas:**
   - Llamado superior con escudo FCEE UAGRM y acceso al portal.
   - Respaldo legal: SEPREC (D.S. 4596), NIT Régimen General (SIN), SENAPI (Ley 1322 de Derecho de Autor).

10. **Widget Flotante Asistente Virtual FAQ:**
    - Botón circular minimalista con modal oscuro Zero-Radius para consultas técnicas inmediatas.

---

## 3. Comandos de Ejecución

```bash
cd smartlab_landing

# Desarrollo (puerto 5173)
npm run dev

# Compilación para producción (carpeta dist/)
npm run build

# Previsualización local
npm run preview
```
