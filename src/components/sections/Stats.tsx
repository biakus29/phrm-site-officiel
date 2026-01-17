import * as React from 'react';
import { TrendingUp, Users, Clock, Headphones } from 'lucide-react';

interface StatsProps {
    realTimeStats: {
        totalEmployees: number;
        activeEmployees: number;
        totalCompanies: number;
        uptime: number;
        contractsGenerated: number;
    };
}

export const Stats: React.FC<StatsProps> = ({ realTimeStats }) => {
    return (
        <section id="stats" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Statistiques en Temps Réel</h2>
                    <p className="text-xl text-gray-600">Données actualisées automatiquement toutes les 30 secondes</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in-up">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-full w-20 h-20 mx-auto mb-4 group-hover:shadow-lg border border-blue-200 flex flex-col items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-blue-600 mb-1" />
                            <p className="text-2xl font-bold text-blue-600">{realTimeStats.totalCompanies}+</p>
                        </div>
                        <p className="text-gray-600 mt-2 font-medium">Entreprises</p>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in-up animation-delay-100">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-full w-20 h-20 mx-auto mb-4 group-hover:shadow-lg border border-green-200 flex flex-col items-center justify-center">
                            <Users className="w-5 h-5 text-green-600 mb-1" />
                            <p className="text-2xl font-bold text-green-600">
                                {realTimeStats.totalEmployees >= 1000 ? `${Math.floor(realTimeStats.totalEmployees / 1000)}K+` : realTimeStats.totalEmployees}
                            </p>
                        </div>
                        <p className="text-gray-600 mt-2 font-medium">Employés gérés</p>
                    </div>

                    {/* Card 3 */}
                    <div className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in-up animation-delay-200">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-full w-20 h-20 mx-auto mb-4 group-hover:shadow-lg border border-purple-200 flex flex-col items-center justify-center">
                            <Clock className="w-5 h-5 text-purple-600 mb-1" />
                            <p className="text-2xl font-bold text-purple-600">{realTimeStats.uptime.toFixed(1)}%</p>
                        </div>
                        <p className="text-gray-600 mt-2 font-medium">Disponibilité</p>
                    </div>

                    {/* Card 4 */}
                    <div className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in-up animation-delay-300">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-full w-20 h-20 mx-auto mb-4 group-hover:shadow-lg border border-orange-200 flex flex-col items-center justify-center">
                            <Headphones className="w-5 h-5 text-orange-600 mb-1" />
                            <p className="text-2xl font-bold text-orange-600">24/7</p>
                        </div>
                        <p className="text-gray-600 mt-2 font-medium">Support</p>
                    </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Indicateurs de Performance RH</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                            <div className="text-2xl font-bold text-blue-600">{realTimeStats.contractsGenerated.toFixed(1)}%</div>
                            <div className="text-sm text-gray-600">Contrats générés</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                            <div className="text-2xl font-bold text-green-600">{Math.round((realTimeStats.activeEmployees / realTimeStats.totalEmployees) * 100)}%</div>
                            <div className="text-sm text-gray-600">Employés actifs</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100 md:col-span-1 col-span-2 flex flex-col justify-center">
                            <div className="text-2xl font-bold text-purple-600 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                                LIVE
                            </div>
                            <div className="text-sm text-gray-600">Mise à jour automatique</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
