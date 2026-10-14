import * as React from 'react';
import { Users, TrendingUp, Shield, Globe, Zap } from 'lucide-react';
import { PAIE_LOGIN_URL, PAIE_REGISTER_URL } from '../../config/appUrls';

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
                    <h1 className="text-5xl md:text-6xl font-bold text-phrm-text leading-tight mb-6 animate-slide-in-left">
                        Gestion automatisée des <span className="text-phrm-navy">RH</span>
                    </h1>
                    <p className="text-xl text-phrm-muted mb-8 animate-fade-in-up animation-delay-200">
                        Solution complète RH : conformité Paie-pays; Recrutement, Vérification de CV, Conseil, Libre-service Employés.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                        <a href={PAIE_LOGIN_URL} className="bg-phrm-navy text-white px-8 py-4 rounded-lg hover:brightness-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center">
                            Se connecter
                        </a>
                        <a href={PAIE_REGISTER_URL} className="border-2 border-phrm-navy text-phrm-navy px-8 py-4 rounded-lg hover:bg-phrm-sky transition-all transform hover:scale-105 inline-block text-center">
                            S'inscrire (Direct)
                        </a>
                    </div>
                    <div className="mt-8 flex items-center space-x-6 animate-fade-in-up animation-delay-600">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-status-success" />
                            <span className="text-phrm-muted">Conforme CNPS</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-5 h-5 text-status-success" />
                            <span className="text-phrm-muted">Multi-utilisateurs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Zap className="w-5 h-5 text-status-success" />
                            <span className="text-phrm-muted">Temps réel</span>
                        </div>
                    </div>
                </div>
                <div className="relative animate-fade-in-up animation-delay-300 flex items-center gap-4">
                    {/* Mini maquette téléphone — équipe en réunion à distance (md+) */}
                    <div className="hidden md:block flex-shrink-0 relative w-[150px] aspect-[9/19.5] rounded-[1.75rem] bg-phrm-dark p-1.5 shadow-2xl">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10 w-14 h-3 bg-phrm-dark rounded-b-xl" aria-hidden="true" />
                        <video
                            className="w-full h-full object-cover rounded-[1.25rem]"
                            src="/animations/0_Video_Conference_Meeting_1080x1920.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/animations/video-poster-placeholder.svg"
                            aria-label="Équipe PHRM en réunion à distance"
                        />
                    </div>
                    <div className="flex-1 bg-phrm-navy rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-phrm-navy/20">
                        <div className="bg-white rounded-xl p-6 space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-status-success rounded-full animate-pulse"></div>
                                    <span className="text-xs text-phrm-muted font-medium">TABLEAU DE BORD LIVE</span>
                                </div>
                                <div className="text-xs text-phrm-muted/60">
                                    {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-phrm-bg rounded-full flex items-center justify-center border border-phrm-sky">
                                        <Users className="w-6 h-6 text-phrm-navy" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-phrm-muted">Employés actifs</p>
                                        <p className="text-2xl font-bold text-phrm-text animate-count-up">
                                            {realTimeStats.totalEmployees.toLocaleString()}
                                        </p>
                                        <p className="text-xs text-status-success font-medium">
                                            +{Math.floor(Math.random() * 5) + 1} ce mois
                                        </p>
                                    </div>
                                </div>
                                <TrendingUp className="w-8 h-8 text-status-success" />
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-phrm-muted">Contrats générés</span>
                                    <span className="text-sm font-semibold text-phrm-text">
                                        {realTimeStats.contractsGenerated.toFixed(1)}%
                                    </span>
                                </div>
                                <div className="w-full bg-phrm-pale rounded-full h-2">
                                    <div
                                        className="bg-phrm-navy h-2 rounded-full animate-progress-bar transition-all duration-1000"
                                        style={{ width: `${realTimeStats.contractsGenerated}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-phrm-navy">
                                        {realTimeStats.totalCompanies}
                                    </div>
                                    <div className="text-xs text-phrm-muted">Entreprises</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-status-success">
                                        {realTimeStats.uptime.toFixed(1)}%
                                    </div>
                                    <div className="text-xs text-phrm-muted">Disponibilité</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
