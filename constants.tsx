
import React from 'react';
import { 
  Briefcase, 
  ShieldAlert, 
  Stethoscope, 
  BrainCircuit, 
  TrendingUp, 
  GraduationCap 
} from 'lucide-react';
import { Section, HealthStatus } from './types';

export const BRIEFING_TITLE = "L'Estat i el Futur de la Intel·ligència Artificial el 2026";
export const BRIEFING_SUBTITLE = "Sintetitzant les anàlisis d'Andrés Torrubia i Miguel Ángel Román";

export const EXECUTIVE_SUMMARY = "L'any 2026 es perfila com el punt d'inflexió on la IA deixa de ser una eina de productivitat individual per convertir-se en un motor d'automatització de processos de negoci mitjançant agents autònoms. Mentre que el desenvolupament de programari i la producció audiovisual experimenten salts multiplicadors, la societat s'enfronta a una crisi d'autenticitat sense precedents a causa dels deepfakes.";

export const SECTIONS: Section[] = [
  {
    id: "productivity",
    title: "Productivitat i Agents",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    content: ["De xat a agents autònoms", "Automatització empresarial", "Cloud Code i verticals"],
    fullText: "El canvi fonamental previst per al 2026 és la transició d'un model de 'xat' a un model d'agents capaços d'executar flujos de treball complexos. Les empreses capturaran el valor directament mitjançant eines com Cloud Code, que permeten produir milers de línies de codi diàries i realitzar tasques de refactorització experta."
  },
  {
    id: "security",
    title: "Crisi d'Autenticitat",
    icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
    content: ["Fi de la fiabilitat visual", "Noves ciberamenaces", "L'efecte Homer Simpson"],
    fullText: "La societat haurà d'adaptar-se a un món on les imatges i la veu ja no són proves d'autenticitat. L'ús d'agents connectats a dades privades obre vectors d'atac inèdits, com les injeccions de prompts. A més, el risc de delegar decisions crítiques sense supervisió (negligència humana) és una amenaça real."
  },
  {
    id: "health",
    title: "Salut i Ciència",
    icon: <Stethoscope className="w-6 h-6 text-emerald-600" />,
    content: ["Capacitat diagnòstica", "Recerca semàntica", "Disseny de fàrmacs"],
    fullText: "La IA ja no és només suport, sinó actor protagonista. Models com el 5.2 PRO ja fan diagnòstics millors que la mitjana dels metges. En recerca, actua com un cercador semàntic massiu, generant hipòtesis mitjançant la interpolació de milers de papers científics."
  },
  {
    id: "technical",
    title: "Evolució Tècnica",
    icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
    content: ["Aprenentatge continu", "Evitar oblit catastròfic", "Punt d'inflexió 2026-27"],
    fullText: "Es preveu que la solució teòrica a l'aprenentatge continu (aprendre de l'experiència en temps real) podria arribar entre 2026 i 2027. Tot i això, existeixen riscos de models hostils si l'aprenentatge en entorns oberts no es controla adequadament."
  },
  {
    id: "economy",
    title: "Economia i Monetització",
    icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    content: ["Publicitat massiva", "La bombolla tecnològica", "Oportunitat Open Source"],
    fullText: "L'estructura de costos actual és insostenible. Es preveu l'arribada massiva de publicitat dins de plataformes com ChatGPT. El valor real es troba en els proveïdors d'infraestructura, mentre que les empreses pivotaran cap a l'Open Source per optimitzar costos de tokens."
  },
  {
    id: "talent",
    title: "Talent i Educació",
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
    content: ["Acceleració de Junior a Senior", "Consell per a Seniors", "Paradigma educatiu"],
    fullText: "La IA redefineix jerarquies. Un junior pot esdevenir senior ràpidament si sap utilitzar la tecnologia. El focus de la formació hauria de passar de l'ús d'eines a la comprensió profunda del que hi ha 'per sota' de la tecnologia."
  }
];

export const HEALTH_DATA: HealthStatus[] = [
  { ambit: "Diagnòstic", estat: "Models avançats superen la mitjana dels metges." },
  { ambit: "Sistemes de Salut", estat: "Integració real en triatge i planificació clínica." },
  { ambit: "Disseny de Fàrmacs", estat: "Impacte brutal en fase preclínica i molècules." },
  { ambit: "Recerca Científica", estat: "Cerca semàntica i generació massiva d'hipòtesis." }
];

export const QUOTE = "La societat ha de mentalitzar-se que no podem creure totes les imatges que veiem; cal anar a la font per donar credibilitat.";
export const QUOTE_AUTHOR = "Miguel Ángel Román";
