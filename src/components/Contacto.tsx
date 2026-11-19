import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactFormData {
  nombre: string;
  institucion: string;
  correo: string;
  telefono: string;
  tipoConsulta: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  institucion?: string;
  correo?: string;
  mensaje?: string;
}

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    institucion: '',
    correo: '',
    telefono: '',
    tipoConsulta: 'DEMOSTRACIÓN DEL SISTEMA CITEF',
    mensaje: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'EL NOMBRE COMPLETO ES OBLIGATORIO.';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'DEBE TENER AL MENOS 3 CARACTERES.';
    }

    if (!formData.institucion.trim()) {
      newErrors.institucion = 'INDIQUE SU FACULTAD O UNIVERSIDAD.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.trim()) {
      newErrors.correo = 'EL CORREO ELECTRÓNICO ES OBLIGATORIO.';
    } else if (!emailRegex.test(formData.correo.trim())) {
      newErrors.correo = 'CORREO ELECTRÓNICO INVÁLIDO.';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'EL MENSAJE ES OBLIGATORIO.';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'EL MENSAJE DEBE TENER AL MENOS 10 CARACTERES.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('smartlab_leads') || '[]');
        saved.push({ ...formData, fecha: new Date().toISOString() });
        localStorage.setItem('smartlab_leads', JSON.stringify(saved));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        nombre: '',
        institucion: '',
        correo: '',
        telefono: '',
        tipoConsulta: 'DEMOSTRACIÓN DEL SISTEMA CITEF',
        mensaje: '',
      });
      setErrors({});
    }, 900);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-[#000d1e] text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Cabecera Editorial */}
        <div className="pb-12 border-b border-white/10 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-400">
              SOLICITUD DE DEMOSTRACIÓN & LICENCIAMIENTO
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              CONTACTO INSTITUCIONAL
            </h3>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            RESPUESTA DIRECTA EN MENOS DE 24 HORAS
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda: Información Directa con Escudo FCEE */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-white/15 bg-[#00142d] p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#E10600]">
                  SEDE OFICIAL CITEF
                </span>
                <img
                  src="/logo_fcee.png"
                  alt="Escudo FCEE UAGRM"
                  className="h-10 w-auto object-contain drop-shadow"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-white">
                      Centro CITEF — Módulo 254
                    </div>
                    <div className="text-xs text-zinc-300 mt-1 leading-relaxed font-normal">
                      Facultad de Ciencias Económicas y Empresariales (FCEE)<br />
                      Universidad Autónoma Gabriel René Moreno (UAGRM)<br />
                      Campus Universitario, Av. Busch y 2do Anillo<br />
                      Santa Cruz de la Sierra, Bolivia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-white">
                      Atención Directa
                    </div>
                    <div className="text-xs font-mono text-zinc-300 mt-1">
                      +591 76097651 / +591 69077710
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-white">
                      Correos Electrónicos
                    </div>
                    <div className="text-xs font-mono text-zinc-300 mt-1">
                      contacto@smartlab.bo<br />
                      citef.fcee@uagrm.edu.bo
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-white">
                      Horario de Salas
                    </div>
                    <div className="text-xs text-zinc-300 mt-1">
                      Lunes a Viernes: 07:00 — 21:00 hrs.<br />
                      Sábados: 08:00 — 13:00 hrs.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Interactivo con Filtro Oscuro */}
            <div className="border border-white/15 h-64 overflow-hidden bg-[#001024]">
              <iframe
                title="Ubicación CITEF FCEE UAGRM"
                src="https://www.google.com/maps?q=-17.7766637,-63.1957486&z=16&output=embed"
                width="100%"
                height="100%"
                className="border-0 w-full h-full filter invert-[90%] hue-rotate-180 contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Columna Derecha: Formulario Zero-Radius */}
          <div className="lg:col-span-7 border border-white/15 bg-[#00142d] p-8 sm:p-12">
            <div className="mb-8">
              <div className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#E10600] mb-2">
                SOLICITUD FORMAL
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight text-white">
                ENVIAR REQUERIMIENTO
              </h4>
            </div>

            {/* Alerta de Éxito al Enviar */}
            {submittedData && (
              <div className="mb-8 border border-emerald-500 bg-emerald-950/40 p-6 animate-fade-up">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                      SOLICITUD REGISTRADA EXITOSAMENTE
                    </h5>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-normal">
                      Gracias, <strong>{submittedData.nombre}</strong>. Hemos recibido su requerimiento para{' '}
                      <strong>{submittedData.institucion}</strong>. Un especialista de SmartLab Solutions le responderá al correo{' '}
                      <strong>{submittedData.correo}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="mt-4 px-4 py-2 bg-white text-black font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-zinc-200 transition cursor-pointer"
                    >
                      ENVIAR OTRA SOLICITUD
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  NOMBRE COMPLETO *
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="EJ. ING. CARLOS MENDOZA"
                  className={`w-full px-4 py-3 bg-[#000d1e] border text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none transition ${
                    errors.nombre ? 'border-[#E10600]' : 'border-white/20 focus:border-white'
                  }`}
                />
                {errors.nombre && (
                  <p className="mt-1.5 text-[10px] font-mono text-[#E10600] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.nombre}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="institucion" className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  INSTITUCIÓN / FACULTAD / UNIVERSIDAD *
                </label>
                <input
                  id="institucion"
                  type="text"
                  name="institucion"
                  value={formData.institucion}
                  onChange={handleChange}
                  placeholder="EJ. UAGRM - FACULTAD DE CIENCIAS EXACTAS"
                  className={`w-full px-4 py-3 bg-[#000d1e] border text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none transition ${
                    errors.institucion ? 'border-[#E10600]' : 'border-white/20 focus:border-white'
                  }`}
                />
                {errors.institucion && (
                  <p className="mt-1.5 text-[10px] font-mono text-[#E10600] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.institucion}</span>
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="correo" className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                    CORREO ELECTRÓNICO *
                  </label>
                  <input
                    id="correo"
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="USUARIO@UAGRM.EDU.BO"
                    className={`w-full px-4 py-3 bg-[#000d1e] border text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none transition ${
                      errors.correo ? 'border-[#E10600]' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {errors.correo && (
                    <p className="mt-1.5 text-[10px] font-mono text-[#E10600] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.correo}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                    TELÉFONO DE CONTACTO
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+591 70000000"
                    className="w-full px-4 py-3 bg-[#000d1e] border border-white/20 text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tipoConsulta" className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  TIPO DE REQUERIMIENTO
                </label>
                <select
                  id="tipoConsulta"
                  name="tipoConsulta"
                  value={formData.tipoConsulta}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#000d1e] border border-white/20 text-xs font-mono text-white focus:outline-none focus:border-white transition"
                >
                  <option value="DEMOSTRACIÓN DEL SISTEMA CITEF">DEMOSTRACIÓN DEL SISTEMA CITEF</option>
                  <option value="PROPUESTA DE LICENCIAMIENTO SAAS">LICENCIAMIENTO SAAS FACULTATIVO</option>
                  <option value="SOPORTE TÉCNICO Y AUDITORÍA">SOPORTE TÉCNICO & AUDITORÍA</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  MENSAJE O ESPECIFICACIÓN *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="INDIQUE LA CANTIDAD DE SALAS O PUESTOS A ADMINISTRAR..."
                  className={`w-full px-4 py-3 bg-[#000d1e] border text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none transition ${
                    errors.mensaje ? 'border-[#E10600]' : 'border-white/20 focus:border-white'
                  }`}
                />
                {errors.mensaje && (
                  <p className="mt-1.5 text-[10px] font-mono text-[#E10600] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.mensaje}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 px-6 bg-[#E10600] hover:bg-[#c5182f] text-white font-black text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-between cursor-pointer disabled:opacity-50 shadow-lg shadow-red-950/50"
              >
                <span>{isSubmitting ? 'PROCESANDO SOLICITUD...' : 'ENVIAR SOLICITUD'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
