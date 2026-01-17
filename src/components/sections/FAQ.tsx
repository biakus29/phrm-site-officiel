import * as React from 'react';

export const FAQ = () => {
    const faqs = [
        {
            q: 'PHRM est-il en conformité avec les différentes réglementations?',
            a: "Oui, Nous avons développé l'application en tenant compte dans tous les calculs à la législation en vigueur en la matière."
        },
        {
            q: 'Combien de temps faut-il pour migrer nos données ?',
            a: 'La migration dépend de la taille de votre entreprise. Pour une PME de 50 employés, comptez 1-2 semaines. Nous vous accompagnons tout au long du processus.'
        },
        {
            q: 'Mes données sont-elles sécurisées ?',
            a: 'Absolument. PHRM utilise les dernières technologies de sécurité avec chiffrement AES-256 et conformité RGPD. Vos données sont hébergées sur des serveurs sécurisés.'
        },
        {
            q: 'Puis-je essayer PHRM avant de m\'engager ?',
            a: 'Bien sûr ! Nous offrons un essai gratuit de 30 jours sans engagement. Vous pouvez tester toutes les fonctionnalités avec vos vraies données.'
        },
        {
            q: 'Quel support technique proposez-vous ?',
            a: 'Nous offrons un support technique en français 24/7 par email, chat et téléphone.'
        }
    ];

    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
                    <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur PHRM</p>
                </div>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
