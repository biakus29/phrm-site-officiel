import * as React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/logophrm.png" alt="PHRM Logo" className="w-7 h-7 aspect-square object-contain" />
                            <span className="text-xl font-bold text-phrm-dark">PHRM</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Plateforme de gestion RH conforme à la réglementation camerounaise
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Produit</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Entreprise</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
                            <li><a href="https://phrmapp.com/blog" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2025 PHRM. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
