import { modules } from '../../data/modules';
import { ModuleSection } from './ModuleSection';

export const Ecosystem = () => {
    return (
        <section id="ecosysteme" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-phrm-navy/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 -left-24 w-[28rem] h-[28rem] bg-phrm-sky/20 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-phrm-sky text-phrm-navy text-sm font-semibold mb-4 animate-fade-in-up">
                        Une suite, tous vos besoins
                    </span>
                    <h2 className="text-4xl font-bold text-phrm-text mb-4 animate-fade-in-up animation-delay-100">
                        L'écosystème PHRM
                    </h2>
                    <p className="text-xl text-phrm-muted max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                        Des solutions intégrées pour gérer vos ressources humaines et votre comptabilité,
                        conçues pour les entreprises du Cameroun et de la zone OHADA.
                    </p>
                </div>

                <div className="divide-y divide-gray-100">
                    {modules.map((m, idx) => (
                        <ModuleSection key={m.id} module={m} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
