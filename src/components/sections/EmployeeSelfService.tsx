import { CheckCircle } from 'lucide-react';

export const EmployeeSelfService = () => {
    return (
        <section id="ess" className="py-20 px-4 sm:px-6 lg:px-8 bg-phrm-bg">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex justify-center mb-8">
                    {/* Mobile : maquette téléphone — vidéo paysage en object-cover (< md) */}
                    <div className="flex md:hidden relative w-[220px] aspect-[9/19.5] rounded-[2.25rem] bg-phrm-dark p-2 shadow-2xl">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-24 h-5 bg-phrm-dark rounded-b-2xl" aria-hidden="true" />
                        <video
                            className="w-full h-full object-cover rounded-[1.75rem]"
                            src="/animations/0_Signing_Document_Document_Signing_3840x2160.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/animations/video-poster-placeholder.svg"
                            aria-label="Démonstration mobile : signature électronique de documents RH"
                        />
                    </div>

                    {/* Tablette : maquette tablette paysage 4/3 (md → lg) */}
                    <div className="hidden md:flex lg:hidden relative w-[460px] aspect-[4/3] rounded-2xl bg-phrm-dark p-3 shadow-2xl">
                        <div className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-1.5 h-1.5 bg-phrm-pale/60 rounded-full" aria-hidden="true" />
                        <video
                            className="w-full h-full object-cover rounded-lg"
                            src="/animations/0_Signing_Document_Document_Signing_3840x2160.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/animations/video-poster-placeholder.svg"
                            aria-label="Démonstration tablette : signature électronique de documents RH"
                        />
                    </div>

                    {/* Desktop : maquette laptop paysage 16/10 (≥ lg) */}
                    <div className="hidden lg:flex flex-col items-center">
                        <div className="relative w-[620px] aspect-[16/10] rounded-t-xl bg-phrm-dark p-3 shadow-2xl">
                            <video
                                className="w-full h-full object-cover rounded-md"
                                src="/animations/0_Signing_Document_Document_Signing_3840x2160.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            poster="/animations/video-poster-placeholder.svg"
                                aria-label="Démonstration desktop : signature électronique de documents RH"
                            />
                        </div>
                        <div className="w-[700px] h-2.5 bg-phrm-dark rounded-b-2xl shadow-lg" aria-hidden="true" />
                        <div className="w-20 h-1 bg-phrm-dark/40 rounded-full mt-0.5" aria-hidden="true" />
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-phrm-text text-center mb-6">
                    Qu'est-ce que le libre-service employés ?
                </h2>
                <p className="text-xl text-phrm-muted text-center mb-8 leading-relaxed">
                    <span className="font-semibold text-phrm-navy">Libre-service employés </span> donne aux employés l'accès à leurs informations RH personnelles, en toute autonomie et à tout moment.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-phrm-sky/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-phrm-text mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 text-phrm-navy mr-2" />
                            Avantages pour les employés
                        </h3>
                        <ul className="space-y-3">
                            <ListItem text="Consultation des fiches de paie en ligne 24/7" />
                            <ListItem text="Mise à jour des données personnelles" />
                            <ListItem text="Demandes de congés simplifiées" />
                            <ListItem text="Accès à l'historique complet" />
                        </ul>
                    </div>
                    <div className="bg-status-success/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-phrm-text mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 text-phrm-navy mr-2" />
                            Avantages pour l'entreprise
                        </h3>
                        <ul className="space-y-3">
                            <ListItem text="Réduction des tâches administratives RH" dotColor="text-status-success" />
                            <ListItem text="Gain de temps pour les équipes RH" dotColor="text-status-success" />
                            <ListItem text="Moins de sollicitations répétitives" dotColor="text-status-success" />
                            <ListItem text="Employés plus autonomes et satisfaits" dotColor="text-status-success" />
                        </ul>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-phrm-navy rounded-xl text-white">
                    <p className="text-lg text-center leading-relaxed">
                        Avec PHRM, vos employés accèdent à toutes leurs informations salariales et données personnelles de manière numérique, <span className="font-semibold">sans avoir besoin de contacter le service RH</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ListItem = ({ text, dotColor = 'text-phrm-navy' }: any) => (
    <li className="flex items-start text-phrm-text">
        <span className={`${dotColor} mr-2`}>•</span>
        <span>{text}</span>
    </li>
);
