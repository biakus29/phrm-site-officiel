import * as React from 'react';
import { useState, useEffect } from 'react';
import { TruncatedText } from '../ui/TruncatedText';
import { truncateText } from '../../utils/text';
import { formatDate } from '../../utils/date';

interface AboutProps {
    formations: any[];
    loadingFormations: boolean;
    onFormationClick: (formation: any) => void;
}

export const About: React.FC<AboutProps> = ({ formations, loadingFormations, onFormationClick }) => {
    const [activeTab, setActiveTab] = useState<'presentation' | 'role' | 'mission' | 'objectifs' | 'recrutement' | 'formations'>('presentation');
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const order: Array<'presentation' | 'role' | 'mission' | 'objectifs' | 'recrutement' | 'formations'> = [
            'presentation', 'role', 'mission', 'objectifs', 'recrutement', 'formations'
        ];
        const interval = setInterval(() => {
            setActiveTab((current) => {
                const idx = order.indexOf(current);
                return order[(idx + 1) % order.length];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [autoplay]);

    const tabs = [
        { id: 'presentation', label: 'Présentation' },
        { id: 'role', label: 'Rôle' },
        { id: 'mission', label: 'Mission' },
        { id: 'objectifs', label: 'Objectifs' },
        { id: 'recrutement', label: 'Recrutement' },
        { id: 'formations', label: 'Formations' },
    ];

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
        >
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-phrm-dark/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">À propos de PHRM</h2>
                    <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">Découvrez notre histoire, notre rôle et notre mission</p>
                </div>

                <div className="bg-gradient-to-r from-phrm-light to-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mb-10 shadow-lg hover:shadow-2xl transition-shadow animate-fade-in-up animation-delay-300 border border-phrm-dark/10">
                    <img
                        src="/directeur.jpg"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/logophrm.png'; }}
                        alt="Directeur Exécutif"
                        className="w-20 h-20 md:w-24 md:h-24 object-cover ring-4 ring-phrm-dark/10 shadow-md"
                    />
                    <div className="text-center md:text-left">
                        <p className="text-gray-700">Paul Valentin Ndoko</p>
                        <h3 className="text-2xl font-bold text-phrm-dark">Directeur Exécutif</h3>
                    </div>
                </div>

                <div className="mb-10 flex justify-center">
                    <div className="inline-flex flex-nowrap gap-2 md:gap-3 bg-gray-100 rounded-xl p-2 md:p-3 shadow-inner overflow-x-auto whitespace-nowrap max-w-full snap-x snap-mandatory">
                        {tabs.map((t) => (
                            <button
                                key={t.id}
                                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all snap-start ${activeTab === t.id ? 'bg-white text-phrm-dark shadow' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setActiveTab(t.id as any)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="md:max-w-4xl md:mx-auto">
                    {activeTab === 'presentation' && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 animate-fade-in-up">
                            <h3 className="text-2xl font-bold text-phrm-dark mb-3">Conseil et Audit des RH</h3>
                            <TruncatedText text="Créé en novembre 2025, PHRM est un regroupement de Professionnels en gestion des RH dont l’objectif à l’origine était : l’Audit des RH, le Conseil en RH, le recrutement total ou partiel, la paie, le coaching linguistique individuel ou d’équipe. Pour le compte des entreprises et autres acteurs économiques, nous aidons à aligner leur politique de recrutement sur la stratégie globale de l’entreprise. Aujourd’hui, nous intégrons à nos activités le placement du personnel, permettant aux chercheurs d’emplois d’entrer en contact avec les secteurs d’activité de l’Économie Nationale." />
                        </div>
                    )}

                    {activeTab === 'role' && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 animate-fade-in-up">
                            <h3 className="text-2xl font-bold text-phrm-dark mb-3">Rôle</h3>
                            <TruncatedText text="PHRM s’intéresse à tout ce qui concerne la gestion des ressources humaines, aussi bien du côté des chercheurs d’emplois que des entreprises du secteur privé et para-public. À ce titre, PHRM s’efforce de satisfaire les besoins des entreprises qui cherchent des profils pertinents, ainsi que ceux des chercheurs d’emplois qualifiés, compétents et opérationnels capables de répondre au profil et aux exigences d’un poste en cas de vacance." />
                        </div>
                    )}

                    {activeTab === 'mission' && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 animate-fade-in-up">
                            <h3 className="text-2xl font-bold text-phrm-dark mb-3">Mission</h3>
                            <TruncatedText text="Notre mission est de représenter les intérêts de nos clients et de faciliter le développement professionnel de leurs employés ; mettre en contact des chercheurs d’emplois avec de potentiels employeurs ; promouvoir et développer les talents des chercheurs d’emplois afin de leur permettre de relever les défis de la compétition sur le marché de l’emploi. La réussite de nos clients est notre préoccupation. Nous ne ménageons aucun effort pour leur fournir des analyses et un service de qualité, tout en respectant leurs contraintes budgétaires." />
                        </div>
                    )}

                    {activeTab === 'objectifs' && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 animate-fade-in-up">
                            <h3 className="text-2xl font-bold text-phrm-dark mb-3">Objectifs</h3>
                            <TruncatedText text="Mettre en place un cadre pour faciliter l’accès de tous les acteurs économiques au sein du marché de l’emploi : les chercheurs d’emplois pourront l’exploiter pour améliorer leurs connaissances, leurs habiletés et leurs talents ; les employeurs pour vivier à talents. Offrir des solutions pratiques pour l’emploi, vendre du conseil RH aux entreprises et autres acteurs ; permettre un meilleur accès à l’information sur le marché de l’emploi au Cameroun ; aider au recrutement des candidats en adéquation avec les profils de postes vacants ; créer des opportunités de formation et de développement des compétences ; organiser des séminaires d’information et de recrutement ; fournir des conseils pratiques aux employeurs et aux employés ; assistance en relations avec l’administration du travail ; information sur la classification salariale nationale ; salaire minimum d’embauche ; secteurs d’activité en expansion ; examens médicaux d’embauche indispensables." />
                        </div>
                    )}

                    {activeTab === 'recrutement' && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 animate-fade-in-up">
                            <h3 className="text-2xl font-bold text-phrm-dark mb-3">Recrutement</h3>
                            <div className="prose prose-phrm max-w-none">
                                <p>Notre plateforme facilite l'intégration des nouveaux employés avec des processus de recrutement automatisés et personnalisables. Nous aidons les entreprises à attirer, évaluer et intégrer les meilleurs talents.</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Gestion des offres d'emploi et des candidatures</li>
                                    <li>Suivi des entretiens et évaluations</li>
                                    <li>Intégration des nouveaux employés</li>
                                    <li>Automatisation des processus RH</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'formations' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Formations</h3>
                            {loadingFormations ? (
                                <div className="text-gray-600">Chargement…</div>
                            ) : formations.length === 0 ? (
                                <div className="text-gray-600">Aucune formation disponible pour le moment.</div>
                            ) : (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {formations.map((f) => (
                                        <button
                                            key={f.id}
                                            type="button"
                                            onClick={() => onFormationClick(f)}
                                            className="text-left bg-white rounded-xl p-5 shadow hover:shadow-lg transition-all border border-gray-100 focus:outline-none focus:ring-2 focus:ring-phrm-dark"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`px-2 py-0.5 text-xs rounded-full ${((f.type || '').toLowerCase() === 'initiale') ? 'bg-indigo-100 text-indigo-700' : 'bg-purple-100 text-purple-700'}`}>
                                                    {(f.type || '').toString().toLowerCase() === 'initiale' ? 'Initiale' : 'Continue'}
                                                </span>
                                                {f.isActive === false && (
                                                    <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">Inactive</span>
                                                )}
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{f.title || 'Sans titre'}</h4>
                                            <p className="text-sm text-gray-500 mb-3">{f.duree || 'Durée non précisée'}</p>
                                            <p className="text-gray-700 text-sm">{truncateText((f.description || '').toString(), 140)}</p>
                                            <div className="mt-3 text-xs text-gray-400">
                                                MAJ: {formatDate(f.updatedAt || f.createdAt)}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
