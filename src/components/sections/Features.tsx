import * as React from 'react';
import { CreditCard, Users, UserCheck, Scale, Smartphone, BarChart3, CheckCircle } from 'lucide-react';

export const Features = () => {
    const features = [
        {
            title: 'Gestion de la Paie',
            icon: CreditCard,
            description: 'Calculs automatisés conformes à la réglementation CNPS.',
            items: ['Barème IRPP officiel', 'Cotisations CNPS automatiques', 'Fiches de paie PDF'],
            href: '/register-client'
        },
        {
            title: 'Recrutement',
            icon: Users,
            description: 'Solution complète de gestion du processus de recrutement de vos talents.',
            items: ['Gestion des candidatures', 'Suivi des entretiens', 'Base de données candidats'],
            href: '/offres'
        },
        {
            title: 'Vérification de CV',
            icon: UserCheck,
            description: 'Vérification approfondie des antécédents de vos candidats et employés.',
            items: ["Vérification d'identité", 'Vérification des diplômes', 'Références professionnelles'],
            href: '/register-client'
        },
        {
            title: 'Conseils',
            icon: Scale,
            description: 'Expertise complète en conseil RH, droit du travail et ingénierie salariale.',
            items: ['Classification Nationale', 'Ingénierie salariale', 'Prétentions salariales'],
            noAnimation: true,
            href: '/register-client'
        },
        {
            title: 'Libre-service Employés',
            icon: Smartphone,
            description: 'Portail employé pour accéder à toutes leurs informations RH en toute autonomie.',
            items: ['Consultation fiches paie', 'Données personnelles', 'Demandes de congés'],
            noAnimation: true,
            href: '/register-client'
        },
        {
            title: 'Tableaux de Bord',
            icon: BarChart3,
            description: 'Visualisations en temps réel pour un pilotage optimal de vos RH.',
            items: ['Stats en temps réel', 'Graphiques interactifs', 'Rapports personnalisés'],
            noAnimation: true,
            href: '/register-client'
        }
    ];

    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
                    <p className="text-xl text-gray-600">Une gamme complète de solutions RH pour votre entreprise</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, idx) => (
                        <a
                            key={f.title}
                            href={f.href}
                            className={`block bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up ${f.noAnimation ? '' : `animation-delay-${idx * 100}`}`}
                        >
                            <div className="w-12 h-12 bg-phrm-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <f.icon className="w-6 h-6 text-phrm-dark group-hover:animate-bounce" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-phrm-dark transition-colors">{f.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{f.description}</p>
                            <ul className="space-y-2">
                                {f.items.map(item => (
                                    <li key={item} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
