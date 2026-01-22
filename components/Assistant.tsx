
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, Send, X, Bot, Loader2, AlertCircle, RefreshCcw } from 'lucide-react';
import { SECTIONS, EXECUTIVE_SUMMARY } from '../constants';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string; isError?: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const context = `
    Ets un tutor educatiu expert en el futur de la IA l'any 2026. 
    Basat en l'informe de Torrubia i Román:
    Resum: ${EXECUTIVE_SUMMARY}
    Dades clau: ${SECTIONS.map(s => `${s.title}: ${s.fullText}`).join('\n')}
    
    Instruccions de seguretat: Sempre que parlis de deepfakes o seguretat, recorda a l'usuari la importància de verificar les fonts originals. Sigues concís, educatiu i utilitza un to professional però proper en català.
  `;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!query.trim() || loading) return;

    const userMsg = query.trim();
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: context,
          temperature: 0.7,
        },
      });

      const text = response.text || "No he pogut processar la informació en aquest moment.";
      setMessages(prev => [...prev, { role: 'assistant', text }]);
    } catch (error: any) {
      console.error("API Error:", error);
      let errorMsg = "S'ha produït un error de connexió.";
      if (error?.message?.includes('429')) errorMsg = "Massa peticions. Espera un moment.";
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: errorMsg,
        isError: true 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div 
          role="dialog"
          aria-label="Assistent Virtual"
          className="w-80 sm:w-96 h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
        >
          <div className="bg-indigo-600 p-5 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold block text-sm">Tutor IA 2026</span>
                <span className="text-[10px] opacity-80 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> En línia
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Tancar assistent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
                <div className="p-4 bg-indigo-50 rounded-full">
                  <MessageSquare className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Com et puc ajudar?</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Pregunta sobre la crisi d'autenticitat, els agents autònoms o el futur laboral el 2026.
                  </p>
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-indigo-200' 
                    : m.isError 
                      ? 'bg-rose-50 text-rose-700 border border-rose-100 rounded-bl-none'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                }`}>
                  {m.isError && <AlertCircle className="w-4 h-4 mb-2" />}
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                  <span className="text-xs text-slate-500 font-medium italic">Consultant el futur...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escriu la teva consulta..."
                className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                aria-label="Camp de consulta"
              />
              <button
                onClick={handleSend}
                disabled={loading || !query.trim()}
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 disabled:shadow-none"
                aria-label="Enviar missatge"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center">
              L'IA pot generar respostes imprecises. Verifica sempre la informació crítica.
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-indigo-600 text-white p-4 rounded-2xl shadow-xl shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all flex items-center gap-3"
          aria-label="Obrir assistent virtual"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-indigo-600 rounded-full" />
          </div>
          <span className="font-bold hidden sm:inline tracking-tight">Pregunta sobre el 2026</span>
        </button>
      )}
    </div>
  );
};

export default Assistant;
