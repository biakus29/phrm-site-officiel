import { CreditCard, Users, Shield, Zap, CheckCircle } from 'lucide-react';
import { LottieAnimation } from '../ui/LottieAnimation';

export const InteractiveDemo = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-phrm-text mb-4 animate-fade-in-up">Démonstration Interactive</h2>
                    <p className="text-xl text-phrm-muted animate-fade-in-up animation-delay-200">Explorez les fonctionnalités PHRM en temps réel</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <DemoFeatureCard
                            title="Module de Paie"
                            subtitle="Interface de gestion des salaires"
                            icon={CreditCard}
                            color="blue"
                            items={['Barème IRPP automatique', 'Cotisations CNPS calculées', 'Fiches de paie générées']}
                        />
                        <DemoFeatureCard
                            title="Gestion Employés"
                            subtitle="Base de données complète"
                            icon={Users}
                            color="green"
                            items={['1,247 Employés actifs', '850 Temps plein', '397 Temps partiel']}
                            isStats
                        />
                    </div>

                    <div className="relative">
                        <div className="bg-phrm-pale rounded-3xl shadow-2xl p-4 sm:p-6 transition-all duration-500 hover:shadow-phrm-navy/20 overflow-hidden">
                            <LottieAnimation
                                src="/animations/business-analysis.json"
                                className="w-full aspect-video"
                                ariaLabel="Animation : analyse des données RH PHRM"
                            />
                        </div>

                        <div className="absolute -top-6 -right-6 bg-status-success text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                            <Shield className="w-4 h-4" />
                            <span>Conforme CNPS</span>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-phrm-navy text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                            <Zap className="w-4 h-4" />
                            <span>Temps réel</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 animate-fade-in-up animation-delay-500">
                    <div className="bg-phrm-navy rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Prêt à découvrir PHRM ?</h3>
                        <p className="text-phrm-pale mb-6">Testez toutes ces fonctionnalités gratuitement pendant 14 jours effectifs</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://paie.phrm.app/client-admin-login" className="bg-white text-phrm-navy px-8 py-4 rounded-lg hover:bg-phrm-sky transition-all transform hover:scale-105 shadow-lg font-semibold">Se connecter</a>
                            <a href="#pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold">Voir les tarifs</a>
                            <a href="https://paie.phrm.app/register-client" className="bg-status-success text-white px-8 py-4 rounded-lg hover:bg-status-success transition-all transform hover:scale-105 shadow-lg font-semibold">S'inscrire maintenant</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DemoFeatureCard = ({ title, subtitle, icon: Icon, items, isStats }: any) => {

    return (
        <div className="bg-white border border-phrm-pale rounded-xl p-8 group">
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-phrm-navy rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-phrm-text group-hover:text-phrm-navy transition-colors">{title}</h3>
                    <p className="text-phrm-muted">{subtitle}</p>
                </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
                {isStats ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-phrm-text">{items[0].split(' ')[1]} {items[0].split(' ')[2]}</span>
                            <span className="text-2xl font-bold text-status-success">{items[0].split(' ')[0]}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                                <div className="text-lg font-bold text-phrm-navy">{items[1].split(' ')[0]}</div>
                                <div className="text-phrm-muted">{items[1].split(' ').slice(1).join(' ')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-module-compta">{items[2].split(' ')[0]}</div>
                                <div className="text-phrm-muted">{items[2].split(' ').slice(1).join(' ')}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-phrm-text">Calculs CNPS</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-status-success rounded-full animate-pulse"></div>
                                <span className="text-sm text-status-success font-semibold">Actif</span>
                            </div>
                        </div>
                        <div className="w-full bg-phrm-pale rounded-full h-2">
                            <div className="bg-phrm-navy h-2 rounded-full animate-progress-bar" style={{ width: '100%' }}></div>
                        </div>
                        <div className="space-y-1">
                            {items.map((item: string, i: number) => (
                                <div key={i} className="flex items-center space-x-2 text-sm text-phrm-muted">
                                    <CheckCircle className="w-4 h-4 text-status-success" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
