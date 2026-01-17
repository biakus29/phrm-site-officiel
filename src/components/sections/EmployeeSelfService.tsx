import * as React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';

export const EmployeeSelfService = () => {
    return (
        <section id="ess" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-phrm-dark rounded-full flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-white" />
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                    Qu'est-ce que le libre-service employés ?
                </h2>
                <p className="text-xl text-gray-600 text-center mb-8 leading-relaxed">
                    <span className="font-semibold text-phrm-dark">Libre-service employés </span> donne aux employés l'accès à leurs informations RH personnelles, en toute autonomie et à tout moment.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-blue-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 text-phrm-dark mr-2" />
                            Avantages pour les employés
                        </h3>
                        <ul className="space-y-3">
                            <ListItem text="Consultation des fiches de paie en ligne 24/7" />
                            <ListItem text="Mise à jour des données personnelles" />
                            <ListItem text="Demandes de congés simplifiées" />
                            <ListItem text="Accès à l'historique complet" />
                        </ul>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 text-phrm-dark mr-2" />
                            Avantages pour l'entreprise
                        </h3>
                        <ul className="space-y-3">
                            <ListItem text="Réduction des tâches administratives RH" dotColor="text-green-600" />
                            <ListItem text="Gain de temps pour les équipes RH" dotColor="text-green-600" />
                            <ListItem text="Moins de sollicitations répétitives" dotColor="text-green-600" />
                            <ListItem text="Employés plus autonomes et satisfaits" dotColor="text-green-600" />
                        </ul>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-phrm-dark to-phrm-dark rounded-xl text-black">
                    <p className="text-lg text-center leading-relaxed">
                        Avec PHRM, vos employés accèdent à toutes leurs informations salariales et données personnelles de manière numérique, <span className="font-semibold">sans avoir besoin de contacter le service RH</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ListItem = ({ text, dotColor = 'text-phrm-dark' }: any) => (
    <li className="flex items-start text-gray-700">
        <span className={`${dotColor} mr-2`}>•</span>
        <span>{text}</span>
    </li>
);
