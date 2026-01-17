import * as React from 'react';

export const Testimonials = () => {
    const testimonials = [
        {
            name: 'Marie Nguema',
            role: 'DRH, Banque Commerciale',
            text: '"PHRM a révolutionné notre gestion de paie. Nous avons réduit de 80% le temps consacré aux calculs CNPS. La conformité est garantie et nos employés sont ravis de l\'ESS."',
            color: 'phrm-dark',
            initial: 'M'
        },
        {
            name: 'Jean-Paul Mballa',
            role: 'Directeur, PME Services',
            text: '"En tant que PME, nous avions besoin d\'une solution simple et efficace. PHRM nous a permis d\'automatiser complètement notre RH avec un ROI en 2 mois seulement."',
            color: 'green-600',
            initial: 'J'
        },
        {
            name: 'Aminata Diallo',
            role: 'Comptable, Cabinet d\'Expertise',
            text: '"La conformité CNPS était notre cauchemar. Avec PHRM, tout est automatique et à jour. Plus d\'erreurs, plus de stress. Je recommande vivement !"',
            color: 'purple-600',
            initial: 'A'
        }
    ];

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
                    <p className="text-xl text-gray-600">Découvrez comment PHRM transforme la gestion RH de nos clients</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`bg-gray-50 rounded-xl p-8 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up ${i > 0 ? `animation-delay-${i * 100}` : ''}`}
                        >
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 bg-${t.color} rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}>
                                    {t.initial}
                                </div>
                                <div className="ml-4">
                                    <h4 className={`font-semibold text-gray-900 group-hover:text-phrm-dark transition-colors`}>{t.name}</h4>
                                    <p className="text-sm text-gray-600">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4 group-hover:text-gray-800 transition-colors">{t.text}</p>
                            <div className="flex text-yellow-400 group-hover:scale-110 transition-transform">★★★★★</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
