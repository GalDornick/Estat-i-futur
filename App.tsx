
import React, { useState } from 'react';
import { 
  BRIEFING_TITLE, 
  BRIEFING_SUBTITLE, 
  EXECUTIVE_SUMMARY, 
  SECTIONS, 
  HEALTH_DATA, 
  QUOTE, 
  QUOTE_AUTHOR 
} from './constants';
import { Section } from './types';
import InfoCard from './components/InfoCard';
import Assistant from './components/Assistant';
import { 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Quote as QuoteIcon, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  Lock
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Security Alert Banner */}
      <div className="bg-rose-600 text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5" />
        Atenció: El 2026 la veu i el vídeo ja no seran proves d'autenticitat
      </div>

      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200 pt-16 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs mb-8 bg-indigo-50 px-4 py-2 rounded-full uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            <span>Projecte Educatiu Segur</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
            {BRIEFING_TITLE.split('IA').map((part, i) => (
              <React.Fragment key={i}>
                {part}{i === 0 && <span className="text-indigo-600">IA</span>}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light mb-12 max-w-2xl leading-relaxed">
            {BRIEFING_SUBTITLE}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 hover:-translate-y-1"
            >
              Començar Estudi <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">AT</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">MR</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">+1K</div>
            </div>
            <span className="text-xs text-slate-400 font-medium ml-2">Experts analitzant el futur</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-16">
        {/* Executive Summary Card */}
        <section className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-slate-200/60 border border-slate-100 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
            <div className="w-12 h-1 bg-indigo-600 rounded-full" />
            Visió 2026
          </h2>
          <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-12">
            "{EXECUTIVE_SUMMARY}"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white transition-all">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 font-bold">01</div>
              <h4 className="font-bold text-slate-900 mb-2">Agents Autònoms</h4>
              <p className="text-sm text-slate-500 leading-relaxed">L'automatització passa de ser una eina individual a un motor estructural per a les empreses.</p>
            </div>
            <div className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 font-bold">02</div>
              <h4 className="font-bold text-slate-900 mb-2">Revolució Mèdica</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Capacitat diagnòstica massiva i recerca semàntica per sobre de la mitjana humana.</p>
            </div>
            <div className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-rose-100 hover:bg-white transition-all">
              <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4 font-bold">03</div>
              <h4 className="font-bold text-slate-900 mb-2">Crisi de Confiança</h4>
              <p className="text-sm text-slate-500 leading-relaxed">La necessitat imperativa de verificar la font original davant l'augment dels deepfakes.</p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div id="grid" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Eixos de la Transformació</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">Explora com la IA redefinirà cada sector clau de la nostra societat en menys de 24 mesos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTIONS.map(section => (
              <InfoCard 
                key={section.id} 
                section={section} 
                onClick={(s) => setSelectedSection(s)} 
              />
            ))}
          </div>
        </div>

        {/* Protocol de Verificació (New Security Section) */}
        <section className="mb-24 bg-indigo-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
           <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
           <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-indigo-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Protocol de Seguretat 2026
                </div>
                <h2 className="text-4xl font-black mb-6 leading-tight">Com protegir-se de la desinformació?</h2>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                  Miguel Ángel Román destaca que el canvi més important no serà tecnològic, sinó cultural. Haurem d'aprendre a no confiar en el que veiem.
                </p>
                <div className="space-y-4">
                  {[
                    "Verifica sempre la font original (URL oficial).",
                    "Duda dels continguts emocionals extrems.",
                    "Utilitza agents de seguretat privats per a les dades.",
                    "Manté la supervisió humana en decisions crítiques."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/10 rounded-3xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/10">
                  <Lock className="w-10 h-10 mb-4 text-indigo-300" />
                  <span className="text-xs font-bold uppercase tracking-wider">Xifrat de Fonts</span>
                </div>
                <div className="aspect-square bg-indigo-500 rounded-3xl flex flex-col items-center justify-center p-6 text-center shadow-xl">
                  <ShieldCheck className="w-10 h-10 mb-4 text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider">Validació d'Identitat</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                  <AlertTriangle className="w-10 h-10 mb-4 text-rose-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Detecció Deepfake</span>
                </div>
                <div className="aspect-square bg-white/10 rounded-3xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/10">
                  <ExternalLink className="w-10 h-10 mb-4 text-cyan-300" />
                  <span className="text-xs font-bold uppercase tracking-wider">Fonts Originals</span>
                </div>
             </div>
           </div>
        </section>

        {/* Detail Modal */}
        {selectedSection && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-[40px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10 shadow-2xl relative">
              <button 
                onClick={() => setSelectedSection(null)}
                className="sticky top-0 float-right p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                aria-label="Tancar finestra"
              >
                <XIcon className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                <div className="p-6 bg-indigo-50 rounded-3xl">
                  {selectedSection.icon}
                </div>
                <div>
                  <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Vertical de Coneixement</span>
                  <h3 className="text-4xl font-black text-slate-900">{selectedSection.title}</h3>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-xl text-slate-700 leading-relaxed mb-10 font-light">
                  {selectedSection.fullText}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {selectedSection.content.map((point, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                        <span className="font-bold text-slate-800 text-sm">{point}</span>
                      </div>
                   ))}
                </div>
              </div>

              <button 
                onClick={() => setSelectedSection(null)}
                className="mt-12 w-full bg-indigo-600 text-white py-5 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
              >
                HE ENTÈS EL RISC I L'OPORTUNITAT
              </button>
            </div>
          </div>
        )}

        {/* Health Data Table */}
        <section className="mb-24">
          <div className="bg-white border border-slate-200 rounded-[40px] p-10 md:p-16 shadow-xl shadow-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center md:text-left">Dades del Sector Salut</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-[0.2em]">
                    <th className="pb-6 font-bold">Àmbit de Recerca</th>
                    <th className="pb-6 font-bold">Expectativa 2026</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {HEALTH_DATA.map((row, i) => (
                    <tr key={i} className="group hover:bg-indigo-50/30 transition-colors">
                      <td className="py-6 font-black text-slate-800">{row.ambit}</td>
                      <td className="py-6 text-slate-500 font-medium">{row.estat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Featured Quote */}
        <section className="mb-24 text-center max-w-4xl mx-auto px-6">
          <QuoteIcon className="w-16 h-16 text-indigo-100 mx-auto mb-10" />
          <blockquote className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            "{QUOTE}"
          </blockquote>
          <cite className="not-italic text-indigo-600 font-black text-lg uppercase tracking-widest">
            — {QUOTE_AUTHOR}
          </cite>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black">IA</div>
              <span className="font-black text-xl tracking-tighter">FUTURE_SAFE</span>
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left">
              Projecte educatiu sobre la seguretat i l'evolució de la IA cap al 2026.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contingut validat per</span>
             <div className="flex gap-4">
               <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold">Andrés Torrubia</span>
               <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold">Miguel Ángel Román</span>
             </div>
          </div>
          <div className="flex justify-center md:justify-end gap-6 text-slate-500 text-sm font-medium">
             <a href="#" className="hover:text-white transition-colors">Seguretat</a>
             <a href="#" className="hover:text-white transition-colors">Fonts</a>
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-600 font-bold uppercase tracking-[0.3em]">
          © 2024 EDUCA_IA | PROTOCOL DE SEGURETAT ACTIVAT
        </div>
      </footer>

      <Assistant />
    </div>
  );
};

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default App;
