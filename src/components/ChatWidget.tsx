import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, ChevronRight, HelpCircle } from 'lucide-react';

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

interface FAQItem {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
}

const FAQ_KNOWLEDGE_BASE: FAQItem[] = [
  {
    id: 'citef-general',
    question: '¿Qué es el Sistema CITEF y qué módulos incluye?',
    keywords: ['citef', 'modulos', 'que es', 'sistema'],
    answer:
      'El **Sistema CITEF** es una plataforma integral de gestión de centros de cómputo y laboratorios universitarios.\n\nConsta de **8 módulos**:\n1. Seguridad RBAC y Auditoría Forense.\n2. Catálogos de Carreras y Docentes.\n3. Parametrización y Matriz 2D de Salas.\n4. Monitoreo en Vivo por WebSockets.\n5. Reservas Inteligentes sin Solapamientos.\n6. Control de Turnos y Actas de Relevo.\n7. Soporte Técnico y Métricas RAMS.\n8. Analítica Predictiva con Machine Learning.',
  },
  {
    id: 'ml-colas',
    question: '¿Cómo funciona la IA y la Teoría de Colas M/M/c?',
    keywords: ['machine learning', 'ia', 'random forest', 'colas', 'mmc', 'erlang', 'prediccion'],
    answer:
      'Opera como un **microservicio en FastAPI (puerto 8001)**:\n\n• **RandomForestRegressor:** Entrenado para proyectar la demanda por hora y día.\n• **Fórmula Erlang-C:** Calcula la probabilidad de espera $P_w$, tiempo medio de cola $W_q$ y factor de saturación $\\rho$ para habilitar salas preventivamente.',
  },
  {
    id: 'solapamiento',
    question: '¿Cómo evita el solapamiento de reservas de docentes?',
    keywords: ['solapamiento', 'reserva', 'horario', 'colision', 'docente', 'prioridad'],
    answer:
      'Implementa un **motor algorítmico de intervalos cerrados** $[T_{inicio}, T_{fin}]$. Las reservas de exámenes tienen prelación sobre clases regulares, y cuenta con aprobación en lote para cátedras semestrales.',
  },
  {
    id: 'licenciamiento-precios',
    question: '¿Cuáles son los planes de licenciamiento para facultades?',
    keywords: ['precio', 'costo', 'planes', 'cotizacion', 'saas', 'licencia'],
    answer:
      'Disponemos de modalidades SaaS en la nube o licenciamiento On-Premise en servidores institucionales con soporte técnico directo en Bolivia. Puede solicitar cotización desde la sección **Contacto** o en **contacto@smartlab.bo**.',
  },
  {
    id: 'rams-soporte',
    question: '¿Cómo calcula las métricas RAMS?',
    keywords: ['rams', 'mtbf', 'mttr', 'disponibilidad', 'soporte', 'averia', 'taller'],
    answer:
      'Al reportar un equipo como "En Taller", se genera la orden técnica y se inhabilitan puestos. El sistema computa automáticamente el MTBF, MTTR y la Disponibilidad Operativa ($A = \\frac{MTBF}{MTBF + MTTR}$), superando el 99.2%.',
  },
];

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Bienvenido a **SmartLab Solutions**. Soy el asistente virtual para el **Sistema CITEF (FCEE - UAGRM)**. ¿En qué especificación técnica o demostración puedo orientarle?',
      timestamp: 'Ahora',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const findAnswer = (query: string): string => {
    const cleanQuery = query.toLowerCase().trim();

    for (const faq of FAQ_KNOWLEDGE_BASE) {
      if (cleanQuery.includes(faq.question.toLowerCase())) return faq.answer;
      for (const kw of faq.keywords) {
        if (cleanQuery.includes(kw)) return faq.answer;
      }
    }

    if (/^(hola|buenos|buenas|saludos)/i.test(cleanQuery)) {
      return 'Saludos. Con gusto le asisto sobre el **Sistema CITEF**, la inferencia de **Machine Learning**, o cómo solicitar una **demostración formal**.';
    }

    return 'Gracias por su consulta. El Sistema CITEF integra 8 módulos desarrollados en NestJS, Angular 18 y FastAPI. Para una propuesta técnica personalizada, escríbanos desde la sección de **Contacto** o a **contacto@smartlab.bo**.';
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = findAnswer(text);
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return (
      <div className="space-y-1 text-xs leading-relaxed font-sans">
        {lines.map((line, lIdx) => {
          if (!line.trim()) return <div key={lIdx} className="h-0.5" />;
          const parts = line.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={lIdx}>
              {parts.map((p, pIdx) => {
                if (p.startsWith('**') && p.endsWith('**')) {
                  return (
                    <strong key={pIdx} className="font-bold text-white">
                      {p.slice(2, -2)}
                    </strong>
                  );
                }
                return <span key={pIdx}>{p}</span>;
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Botón Flotante Circular */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir asistente virtual"
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#00142d] hover:bg-[#E10600] text-white border-2 border-white/20 hover:border-[#E10600] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Ventana de Chat Zero-Radius */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] flex flex-col bg-[#000d1e] text-white border border-white/20 shadow-2xl overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-[#00142d] p-4 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center p-1">
                <img
                  src="/logo_fcee.png"
                  alt="FCEE"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-wider text-white">
                  ASISTENTE CITEF
                </h4>
                <p className="text-[10px] font-mono text-zinc-400">SMARTLAB • EN LÍNEA</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white transition cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#000d1e]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-zinc-300">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 text-xs leading-relaxed border ${
                    msg.sender === 'user'
                      ? 'bg-[#E10600] text-white border-[#E10600]'
                      : 'bg-[#00142d] text-zinc-300 border-white/15'
                  }`}
                >
                  {msg.sender === 'assistant' ? (
                    renderFormattedText(msg.text)
                  ) : (
                    <p className="font-mono">{msg.text}</p>
                  )}
                  <div
                    className={`text-[9px] mt-1 text-right font-mono ${
                      msg.sender === 'user' ? 'text-zinc-200' : 'text-zinc-500'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs italic font-mono">
                <span className="w-1.5 h-1.5 bg-[#E10600] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#E10600] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 bg-[#E10600] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            )}

            {/* Chips de Preguntas Frecuentes */}
            <div className="pt-2">
              <div className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 mb-2 flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-[#E10600]" />
                CONSULTAS FRECUENTES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {FAQ_KNOWLEDGE_BASE.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleSend(faq.question)}
                    className="text-left text-[10px] font-mono px-3 py-1.5 bg-[#00142d] hover:bg-[#001c3d] text-zinc-300 hover:text-white border border-white/15 hover:border-[#E10600] transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-500" />
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Formulario de Entrada */}
          <div className="p-3 bg-[#00142d] border-t border-white/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="ESCRIBA SU CONSULTA TÉCNICA..."
                className="flex-1 px-3 py-2 text-xs font-mono bg-[#000d1e] border border-white/20 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                aria-label="Enviar"
                className="p-2 bg-[#E10600] hover:bg-[#c5182f] text-white disabled:opacity-30 transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
