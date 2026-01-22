
import React from 'react';
import { Section } from '../types';

interface InfoCardProps {
  section: Section;
  onClick: (section: Section) => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ section, onClick }) => {
  return (
    <button
      onClick={() => onClick(section)}
      className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col items-start gap-4 hover:border-indigo-300"
    >
      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
        {section.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {section.title}
        </h3>
        <ul className="space-y-1">
          {section.content.map((item, idx) => (
            <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};

export default InfoCard;
