import { useState } from 'react';
import { PAIE_LOGIN_URL, PAIE_REGISTER_URL } from '../../config/appUrls';

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: '#about', label: 'À propos' },
        { href: '#features', label: 'Fonctionnalités' },
        { href: '#recrutement', label: 'Recrutement' },
        { href: '#pricing', label: 'Tarifs' },
        { href: '#testimonials', label: 'Témoignages' },
        { href: 'https://blog.phrm.app', label: 'Blog' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex items-center space-x-2 min-w-0">
                    <img src="/logo.svg" alt="PHRM" className="w-12 h-12 md:w-14 md:h-14 aspect-square object-contain select-none" />
                    <span className="text-2xl font-bold text-phrm-navy max-w-[140px] md:max-w-[180px] truncate">PHRM</span>
                </div>
                <div className="hidden lg:flex space-x-6 xl:space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-phrm-text hover:text-phrm-navy transition-colors ${link.label === 'Recrutement' ? 'text-phrm-mid font-medium' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                    <a href={PAIE_LOGIN_URL} className="text-phrm-text hover:text-phrm-navy font-medium px-2 hidden sm:inline-block">
                        Se connecter
                    </a>
                    <a href={PAIE_REGISTER_URL} className="bg-phrm-navy text-white px-4 md:px-6 py-2 rounded-lg hover:brightness-90 transition-colors shadow-sm font-bold">
                        S'inscrire
                    </a>
                    <button
                        className="lg:hidden text-phrm-text hover:text-phrm-navy transition-colors"
                        aria-label="Ouvrir le menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 sm:px-6 lg:px-8 pb-4 bg-white/95 backdrop-blur-md shadow">
                    <div className="flex flex-col space-y-3">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-phrm-text hover:text-phrm-navy py-2 font-semibold"
                                style={link.label === 'Recrutement' ? { color: '#1E6BAA' } : {}}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href={PAIE_LOGIN_URL}
                            className="text-center font-semibold text-phrm-text hover:bg-phrm-pale py-2 rounded-lg"
                            onClick={() => setMobileOpen(false)}
                        >
                            Se connecter
                        </a>

                        <a
                            href={PAIE_REGISTER_URL}
                            className="bg-phrm-navy text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors text-center mt-3 block font-bold"
                            onClick={() => setMobileOpen(false)}
                        >
                            S'inscrire
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};
