import { CheckCircle } from 'lucide-react';

export const WhyChoosePHRM = () => {
    return (
        <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-phrm-text mb-4">Pourquoi choisir PHRM ?</h2>
                    <p className="text-xl text-phrm-muted">La seule solution RH 100% adaptée au marché camerounais</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-phrm-text mb-6">Conformité garantie</h3>
                        <div className="space-y-6">
                            <WhyItem title="Calculs automatisés" description="Toutes les retenues salariales et patronales respectent la réglementation en vigueur" />
                            <WhyItem title="Mise à jour règlementaire" description="Lorsque le régime fiscal change, possibilité d'intégrer les changements." />
                            <WhyItem title="Évitez les pénalités" description="Tranquillité d'esprit, toutes vos déclarations sont faites dans les délais." />
                        </div>
                    </div>
                    <div className="bg-phrm-bg rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-phrm-text mb-6">Économies réalisées</h3>
                        <div className="space-y-4">
                            <EconomyRow label="Temps de paie" value="-80%" />
                            <EconomyRow label="Erreurs de calcul" value="-95%" />
                            <EconomyRow label="Coût administratif" value="-60%" />
                            <EconomyRow label="ROI moyen" value="300%" color="text-phrm-navy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhyItem = ({ title, description }: any) => (
    <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-status-success/15 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-status-success" />
        </div>
        <div>
            <h4 className="font-semibold text-phrm-text mb-2">{title}</h4>
            <p className="text-phrm-muted text-sm">{description}</p>
        </div>
    </div>
);

const EconomyRow = ({ label, value, color = "text-status-success" }: any) => (
    <div className="flex justify-between items-center">
        <span className="text-phrm-text">{label}</span>
        <span className={`text-2xl font-bold ${color}`}>{value}</span>
    </div>
);
