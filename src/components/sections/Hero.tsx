import * as React from 'react';
import { Users, TrendingUp, Shield, Globe, Zap } from 'lucide-react';

interface HeroProps {
    realTimeStats: {
        totalEmployees: number;
        contractsGenerated: number;
        totalCompanies: number;
        uptime: number;
    };
}

export const Hero: React.FC<HeroProps> = ({ realTimeStats }) => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-slide-in-left">
                        Gestion automatisée des <span className="text-phrm-dark animate-pulse">RH</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
                        Solution complète RH : conformité Paie-pays; Recrutement, Vérification de CV, Conseil, Libre-service Employés.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                        <a href="https://phrmapp.com/client-admin-login" className="bg-phrm-dark text-white px-8 py-4 rounded-lg hover:brightness-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center">
                            Se connecter
                        </a>
                        <a href="https://phrmapp.com/register-client" className="border-2 border-phrm-dark text-phrm-dark px-8 py-4 rounded-lg hover:bg-phrm-light transition-all transform hover:scale-105 inline-block text-center">
                            S'inscrire (Direct)
                        </a>
                    </div>
                    <div className="mt-8 flex items-center space-x-6 animate-fade-in-up animation-delay-600">
                        <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-200">
                            <Shield className="w-5 h-5 text-green-600 animate-bounce" />
                            <span className="text-gray-600">Conforme CNPS</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-200">
                            <Globe className="w-5 h-5 text-green-600 animate-bounce animation-delay-100" />
                            <span className="text-gray-600">Multi-utilisateurs</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-200">
                            <Zap className="w-5 h-5 text-green-600 animate-bounce animation-delay-200" />
                            <span className="text-gray-600">Temps réel</span>
                        </div>
                    </div>
                </div>
                <div className="relative animate-fade-in-up animation-delay-300">
                    <div className="bg-phrm-dark rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                        <div className="bg-white rounded-xl p-6 -rotate-3 space-y-4 hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-gray-500 font-medium">TABLEAU DE BORD LIVE</span>
                                </div>
                                <div className="text-xs text-gray-400">
                                    {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center animate-pulse border border-blue-300">
                                        <Users className="w-6 h-6 text-phrm-dark" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Employés actifs</p>
                                        <p className="text-2xl font-bold text-gray-900 animate-count-up">
                                            {realTimeStats.totalEmployees.toLocaleString()}
                                        </p>
                                        <p className="text-xs text-green-600 font-medium">
                                            +{Math.floor(Math.random() * 5) + 1} ce mois
                                        </p>
                                    </div>
                                </div>
                                <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" />
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Contrats générés</span>
                                    <span className="text-sm font-semibold text-gray-900">
                                        {realTimeStats.contractsGenerated.toFixed(1)}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-phrm-dark to-blue-600 h-2 rounded-full animate-progress-bar transition-all duration-1000"
                                        style={{ width: `${realTimeStats.contractsGenerated}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-blue-600">
                                        {realTimeStats.totalCompanies}
                                    </div>
                                    <div className="text-xs text-gray-500">Entreprises</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-green-600">
                                        {realTimeStats.uptime.toFixed(1)}%
                                    </div>
                                    <div className="text-xs text-gray-500">Disponibilité</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
