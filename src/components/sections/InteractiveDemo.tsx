import { CreditCard, Users, Shield, Zap, CheckCircle } from 'lucide-react';

export const InteractiveDemo = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Démonstration Interactive</h2>
                    <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">Explorez les fonctionnalités PHRM en temps réel</p>
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

                    <div className="relative perspective-3d">
                        <div className="transform-3d">
                            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-y-15 hover:rotate-y-0 transition-all duration-700 hover:scale-110">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-phrm-dark rounded-xl flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">P</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900">PHRM Dashboard</h4>
                                            <p className="text-sm text-gray-600">Tableau de bord principal</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                                        <div className="text-sm text-gray-600">Employés</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                                        <div className="text-3xl font-bold text-green-600 mb-2">98.5%</div>
                                        <div className="text-sm text-gray-600">Conformité</div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h5 className="font-semibold text-gray-900 mb-4">Activité récente</h5>
                                    <div className="space-y-3">
                                        <ActivityItem label="1,200 fiches de paie générées" color="green" />
                                        <ActivityItem label="47 nouveaux employés ajoutés" color="blue" />
                                        <ActivityItem label="12 demandes de congés traitées" color="purple" />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float flex items-center space-x-2">
                                <Shield className="w-4 h-4" />
                                <span>Conforme CNPS</span>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float animation-delay-200 flex items-center space-x-2">
                                <Zap className="w-4 h-4" />
                                <span>Temps réel</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 animate-fade-in-up animation-delay-500">
                    <div className="bg-gradient-to-r from-phrm-dark to-phrm-dark rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Prêt à découvrir PHRM ?</h3>
                        <p className="text-blue-500 mb-6">Testez toutes ces fonctionnalités gratuitement pendant 30 jours</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://phrmapp.com/client-admin-login" className="bg-white text-phrm-dark px-8 py-4 rounded-lg hover:bg-phrm-light transition-all transform hover:scale-105 shadow-lg font-semibold">Se connecter</a>
                            <a href="#pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold">Voir les tarifs</a>
                            <a href="https://phrmapp.com/register-client" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg font-semibold">S'inscrire maintenant</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DemoFeatureCard = ({ title, subtitle, icon: Icon, color, items, isStats }: any) => {
    const gradient = color === 'blue' ? 'from-blue-50 to-blue-100' : 'from-green-50 to-green-100';
    const iconBg = color === 'blue' ? 'bg-phrm-dark' : 'bg-green-600';

    return (
        <div className={`bg-gradient-to-r ${gradient} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}>
            <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center group-hover:animate-bounce`}>
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-phrm-dark transition-colors">{title}</h3>
                    <p className="text-gray-600">{subtitle}</p>
                </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
                {isStats ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">{items[0].split(' ')[1]} {items[0].split(' ')[2]}</span>
                            <span className="text-2xl font-bold text-green-600">{items[0].split(' ')[0]}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                                <div className="text-lg font-bold text-blue-600">{items[1].split(' ')[0]}</div>
                                <div className="text-gray-600">{items[1].split(' ').slice(1).join(' ')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-purple-600">{items[2].split(' ')[0]}</div>
                                <div className="text-gray-600">{items[2].split(' ').slice(1).join(' ')}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Calculs CNPS</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-600 font-semibold">Actif</span>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-phrm-dark h-2 rounded-full animate-progress-bar" style={{ width: '100%' }}></div>
                        </div>
                        <div className="space-y-1">
                            {items.map((item: string, i: number) => (
                                <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
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

const ActivityItem = ({ label, color }: any) => {
    const colorMap: any = {
        green: 'bg-green-500',
        blue: 'bg-blue-500',
        purple: 'bg-purple-500'
    };
    return (
        <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 ${colorMap[color]} rounded-full animate-pulse`}></div>
            <span className="text-sm text-gray-700">{label}</span>
        </div>
    );
};
