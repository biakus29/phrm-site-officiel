
export const Footer = () => {
    return (
        <footer className="bg-phrm-dark text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/logo.svg" alt="PHRM" className="w-7 h-7 aspect-square object-contain" />
                            <span className="text-xl font-bold text-white">PHRM</span>
                        </div>
                        <p className="text-phrm-muted/60 text-sm">
                            Plateforme de gestion RH conforme à la réglementation camerounaise
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Produit</h4>
                        <ul className="space-y-2 text-sm text-phrm-muted/60">
                            <li><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                            <li><a href="#pricing" className="hover:text-white transition-colors">Tarifs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Entreprise</h4>
                        <ul className="space-y-2 text-sm text-phrm-muted/60">
                            <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
                            <li><a href="https://blog.phrm.app" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-phrm-muted/60">
                            <li><a href="#faq" className="hover:text-white transition-colors">Centre d'aide</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-phrm-dark mt-8 pt-8 text-center text-sm text-phrm-muted/60">
                    <p>&copy; 2025 PHRM. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
