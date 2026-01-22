
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { SECTIONS, EXECUTIVE_SUMMARY } from '../constants';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const context = `
    Informació del briefing:
    Resum: ${EXECUTIVE_SUMMARY}
    Detalls per secció:
    ${SECTIONS.map(s => `${s.title}: ${s.fullText}`).join('\n')}
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
        contents: `Context del document sobre IA 2026: ${context}\n\nPregunta de l'usuari: ${userMsg}\n\nRespon en català de forma educativa i concisa.`,
      });

      const text = response.text || "No he pogut generar una resposta.";
      setMessages(prev => [...prev, { role: 'assistant', text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Error de connexió. Torna-ho a provar més tard." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-medium">Assistent IA 2026</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-slate-500 text-sm italic text-center py-10">
                Hola! Soc el teu tutor virtual. Pregunta'm qualsevol dubte sobre el futur de la IA el 2026.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                  <span className="text-xs text-slate-500 italic">Pensant...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta'm alguna cosa..."
              className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-indigo-200 hover:-translate-y-1 transition-all flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-medium hidden sm:inline">Dubtes? Pregunta a la IA</span>
        </button>
      )}
    </div>
  );
};

export default Assistant;
