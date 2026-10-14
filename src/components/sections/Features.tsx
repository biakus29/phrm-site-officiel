import { CreditCard, Users, UserCheck, Scale, Smartphone, BarChart3, CheckCircle } from 'lucide-react';
import { RECRUITMENT_APP_URL } from '../../config/appUrls';

export const Features = () => {
    const features = [
        {
            title: 'Gestion de la Paie',
            icon: CreditCard,
            description: 'Calculs automatisés conformes à la réglementation CNPS.',
            items: ['Barème IRPP officiel', 'Cotisations CNPS automatiques', 'Fiches de paie PDF'],
            href: 'https://paie.phrm.app/register-client'
        },
        {
            title: 'Recrutement',
            icon: Users,
            description: 'Solution complète de gestion du processus de recrutement de vos talents.',
            items: ['Gestion des candidatures', 'Suivi des entretiens', 'Base de données candidats'],
            href: `${RECRUITMENT_APP_URL}/offres`
        },
        {
            title: 'Vérification de CV',
            icon: UserCheck,
            description: 'Vérification approfondie des antécédents de vos candidats et employés.',
            items: ["Vérification d'identité", 'Vérification des diplômes', 'Références professionnelles'],
            href: `${RECRUITMENT_APP_URL}/verification`
        },
        {
            title: 'Conseils',
            icon: Scale,
            description: 'Expertise complète en conseil RH, droit du travail et ingénierie salariale.',
            items: ['Classification Nationale', 'Ingénierie salariale', 'Prétentions salariales'],
            noAnimation: true,
            href: 'https://paie.phrm.app/register-client'
        },
        {
            title: 'Libre-service Employés',
            icon: Smartphone,
            description: 'Portail employé pour accéder à toutes leurs informations RH en toute autonomie.',
            items: ['Consultation fiches paie', 'Données personnelles', 'Demandes de congés'],
            noAnimation: true,
            href: 'https://paie.phrm.app/register-client'
        },
        {
            title: 'Tableaux de Bord',
            icon: BarChart3,
            description: 'Visualisations en temps réel pour un pilotage optimal de vos RH.',
            items: ['Stats en temps réel', 'Graphiques interactifs', 'Rapports personnalisés'],
            noAnimation: true,
            href: 'https://paie.phrm.app/register-client'
        }
    ];

    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-phrm-text mb-4">Nos Services</h2>
                    <p className="text-xl text-phrm-muted">Une gamme complète de solutions RH pour votre entreprise</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <a
                            key={f.title}
                            href={f.href}
                            className="block rounded-xl border border-phrm-pale bg-white p-6 transition-colors hover:border-phrm-navy group sm:p-8"
                        >
                            <div className="w-12 h-12 bg-phrm-bg rounded-lg flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-phrm-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-phrm-text mb-3 group-hover:text-phrm-navy transition-colors">{f.title}</h3>
                            <p className="text-phrm-muted mb-4 text-sm">{f.description}</p>
                            <ul className="space-y-2">
                                {f.items.map(item => (
                                    <li key={item} className="flex items-center text-sm text-phrm-muted group-hover:text-phrm-text transition-colors">
                                        <CheckCircle className="w-4 h-4 text-status-success mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
