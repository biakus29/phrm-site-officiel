import { Shield, Zap, CreditCard, Users, BarChart3, Smartphone } from 'lucide-react';

export const InterfaceShowcase = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-phrm-navy relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">Découvrez l'Interface PHRM</h2>
                    <p className="text-xl text-phrm-pale animate-fade-in-up animation-delay-200">Une expérience utilisateur moderne et intuitive</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative animate-fade-in-up animation-delay-300">
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transition-all duration-500 hover:shadow-phrm-sky/20">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-phrm-navy rounded-lg"></div>
                                        <span className="font-bold text-phrm-text">PHRM Dashboard</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-phrm-pale rounded-full"></div>
                                        <div className="w-3 h-3 bg-phrm-sky rounded-full"></div>
                                        <div className="w-3 h-3 bg-phrm-navy rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-phrm-sky/20 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-phrm-navy">1,247</div>
                                            <div className="text-sm text-phrm-muted">Employés</div>
                                        </div>
                                        <div className="bg-phrm-sky/20 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-phrm-navy">98.5%</div>
                                            <div className="text-sm text-phrm-muted">Conformité</div>
                                        </div>
                                        <div className="bg-phrm-sky/20 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-phrm-navy">24/7</div>
                                            <div className="text-sm text-phrm-muted">Support</div>
                                        </div>
                                    </div>

                                    <div className="bg-phrm-bg rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-phrm-text">Fiches de paie du mois</span>
                                            <span className="text-sm text-phrm-muted">1,200 / 1,247</span>
                                        </div>
                                        <div className="w-full bg-phrm-pale rounded-full h-2">
                                            <div className="bg-phrm-navy h-2 rounded-full animate-progress-bar" style={{ width: '96%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 bg-phrm-navy text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                                <Shield className="w-4 h-4" />
                                <span>Conforme CNPS</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-phrm-mid text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                                <Zap className="w-4 h-4" />
                                <span>Temps réel</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 animate-fade-in-up animation-delay-400">
                        <FeatureCard title="Gestion de Paie" icon={CreditCard} description="Interface intuitive et moderne" items={['Calculs CNPS Automatique', 'PDF Export', 'Conformité 100%']} />
                        <FeatureCard title="Libre-service Employés" icon={Users} description="Portail employé autonome" items={['Consultation 24/7', 'Données personnelles', 'Demandes Simplifiées']} />
                        <FeatureCard title="Analyse & Rapports" icon={BarChart3} description="Données en temps réel" items={['Stats Temps réel', 'Graphiques Interactifs', 'Exports Multi-format']} />
                    </div>
                </div>

                <div className="mt-16 text-center animate-fade-in-up animation-delay-500">
                    <h3 className="text-2xl font-bold text-white mb-8">Disponible sur tous vos appareils</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="relative">
                            <div className="w-64 h-96 bg-phrm-dark rounded-3xl p-2 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                                <div className="w-full h-full bg-white rounded-2xl p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-6 h-6 bg-phrm-navy rounded"></div>
                                        <span className="text-sm font-bold text-phrm-text">PHRM Mobile</span>
                                    </div>
                                    <div className="space-y-3">
                                        <StatusItem label="Employés actifs" value="1,247" />
                                        <StatusItem label="Conformité CNPS" value="98.5%" />
                                        <StatusItem label="Support" value="24/7" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-phrm-navy text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                                <Smartphone className="w-4 h-4 mr-1" />
                                Mobile
                            </div>
                        </div>

                        <div className="relative hidden md:block">
                            <div className="w-80 h-56 bg-phrm-dark rounded-2xl p-2 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                                <div className="w-full h-full bg-white rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 bg-phrm-navy rounded"></div>
                                            <span className="font-bold text-phrm-text">PHRM Tablet</span>
                                        </div>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-phrm-pale rounded-full"></div>
                                            <div className="w-2 h-2 bg-phrm-sky rounded-full"></div>
                                            <div className="w-2 h-2 bg-phrm-navy rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-phrm-sky/20 rounded p-2 text-center">
                                            <div className="text-sm font-bold text-phrm-navy">1,247</div>
                                        </div>
                                        <div className="bg-phrm-sky/20 rounded p-2 text-center">
                                            <div className="text-sm font-bold text-phrm-navy">98.5%</div>
                                        </div>
                                        <div className="bg-phrm-sky/20 rounded p-2 text-center">
                                            <div className="text-sm font-bold text-phrm-navy">24/7</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -left-2 bg-phrm-navy text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                                💻 Tablet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, icon: Icon, description, items }: any) => {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-phrm-navy rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-phrm-sky">{description}</p>
                </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
                <div className="space-y-2">
                    {items.map((item: string, i: number) => (
                        <div key={i} className="flex justify-between text-sm">
                            <span className="text-phrm-pale">{item.split(' ')[0]}</span>
                            <span className="text-phrm-sky flex items-center space-x-1">
                                <span>{item.split(' ').slice(1).join(' ')}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const StatusItem = ({ label, value }: any) => (
    <div className="bg-phrm-sky/20 text-phrm-navy rounded-lg p-3">
        <div className="text-lg font-bold">{value}</div>
        <div className="text-xs opacity-70">{label}</div>
    </div>
);
