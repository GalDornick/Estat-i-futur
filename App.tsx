
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
import { ChevronRight, ArrowRight, BookOpen, Quote as QuoteIcon, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200 pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-60" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-6 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>EducaIA Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl">
            {BRIEFING_TITLE}
          </h1>
          <p className="text-xl text-slate-600 font-light mb-8 max-w-2xl">
            {BRIEFING_SUBTITLE}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2"
            >
              Explorar Resum <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-12">
        {/* Executive Summary Card */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-indigo-600 rounded-full" />
            Resum Executiu
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-indigo-100 pl-6">
            "{EXECUTIVE_SUMMARY}"
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-sm text-slate-600"><span className="font-bold">Agents Autònoms:</span> Salt de la productivitat individual a l'empresarial.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-sm text-slate-600"><span className="font-bold">Sanitat:</span> Diagnòstic superior a la mitjana mèdica.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-sm text-slate-600"><span className="font-bold">Open Source:</span> Pivot clau cap a la rendibilitat.</p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div id="grid" className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Àrees de Transformació</h2>
              <p className="text-slate-500">Analitzant l'impacte en 6 verticals clau</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS.map(section => (
              <InfoCard 
                key={section.id} 
                section={section} 
                onClick={(s) => setSelectedSection(s)} 
              />
            ))}
          </div>
        </div>

        {/* Detail Modal/Area if section selected */}
        {selectedSection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600" />
              <button 
                onClick={() => setSelectedSection(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              >
                <XIcon className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-indigo-50 rounded-2xl">
                  {selectedSection.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{selectedSection.title}</h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {selectedSection.fullText}
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    Punts clau a recordar
                  </h4>
                  <ul className="space-y-3">
                    {selectedSection.content.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => setSelectedSection(null)}
                className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors"
              >
                Entès, continuar explorant
              </button>
            </div>
          </div>
        )}

        {/* Health Data Table Section */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold mb-8">Estat de la Salut el 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-sm uppercase tracking-wider">
                    <th className="pb-4 font-medium">Àmbit</th>
                    <th className="pb-4 font-medium">Estat de la Qüestió</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {HEALTH_DATA.map((row, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td className="py-5 font-semibold text-emerald-400">{row.ambit}</td>
                      <td className="py-5 text-slate-300 group-hover:text-white transition-colors">{row.estat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Featured Quote */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <QuoteIcon className="w-12 h-12 text-indigo-200" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-light italic text-slate-800 mb-6 leading-tight">
            "{QUOTE}"
          </blockquote>
          <cite className="not-italic text-slate-500 font-medium">
            — {QUOTE_AUTHOR}
          </cite>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">IA</div>
            <span className="font-bold text-slate-900 tracking-tight">INFRAESTRUCTURA 2026</span>
          </div>
          <p className="text-slate-500 text-sm">
            Basat en les anàlisis d'Andrés Torrubia i Miguel Ángel Román.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors">
              <span className="text-xs font-bold">AT</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors">
              <span className="text-xs font-bold">MR</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini Assistant Component */}
      <Assistant />
    </div>
  );
};

// Helper for closing icons
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default App;
