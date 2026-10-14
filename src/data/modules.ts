import type { LucideIcon } from 'lucide-react';
import { Users, Calculator } from 'lucide-react';

/**
 * Un module ("série") de l'écosystème PHRM.
 *
 * Pour ajouter un nouveau module : ajoute une entrée ici. La section
 * "L'écosystème PHRM" (src/components/sections/Ecosystem.tsx) les rend
 * automatiquement, en alternant image gauche/droite selon l'ordre.
 *
 * Note Tailwind : les classes d'accent (accentGradient, badgeBg, badgeText)
 * doivent rester des chaînes littérales complètes pour être détectées par le
 * JIT (le contenu de ce fichier est scanné via tailwind.config.js).
 */
export interface PhrmModule {
    id: string;
    /** Nom commercial affiché en titre. */
    name: string;
    /** Petit libellé de catégorie (badge au-dessus du titre). */
    badge: string;
    /** Accroche courte sous le titre. */
    tagline: string;
    /** Paragraphe de présentation. */
    description: string;
    /** Bénéfices clés (puces). */
    features: string[];
    icon: LucideIcon;
    /** Chemin local dans /public (fallback automatique vers le logo si absent). */
    image: string;
    imageAlt: string;
    ctaLabel: string;
    ctaHref: string;
    /** false => affiche "Bientôt disponible" à côté du bouton. */
    available: boolean;
    accentGradient: string;
    badgeBg: string;
    badgeText: string;
}

export const modules: PhrmModule[] = [
    {
        id: 'rh-paie',
        name: 'Gestion RH & Paie',
        badge: 'Produit phare',
        tagline: 'Le cœur de votre gestion des ressources humaines',
        description:
            "Pilotez la paie, le recrutement et le quotidien de vos équipes depuis une plateforme unique, pensée pour la réglementation camerounaise.",
        features: [
            'Paie automatisée conforme CNPS et barème IRPP officiel',
            'Bulletins de paie et exports PDF / Excel',
            'Recrutement : offres, candidatures et espace candidat',
            'Libre-service employé : congés, fiches de paie, données personnelles',
            'Tableaux de bord et statistiques en temps réel',
        ],
        icon: Users,
        image: '/img/illustrations/20943591.webp',
        imageAlt: 'Équipe RH coordonnant les processus de paie et de recrutement',
        ctaLabel: 'Découvrir la plateforme RH',
        ctaHref: 'https://paie.phrm.app/',
        available: true,
        accentGradient: 'from-phrm-navy to-phrm-dark',
        badgeBg: 'bg-phrm-pale',
        badgeText: 'text-phrm-navy',
    },
    {
        id: 'comptabilite',
        name: 'Comptabilité OHADA',
        badge: 'Comptabilité',
        tagline: 'Votre comptabilité conforme SYSCOHADA, en francs CFA',
        description:
            "Tenez une comptabilité en partie double conforme au référentiel OHADA, avec le Plan Comptable Général intégré et des montants en francs CFA (XAF).",
        features: [
            'Comptabilité en partie double conforme SYSCOHADA',
            'Plan Comptable Général OHADA intégré (classes 1 à 8)',
            'Saisie des écritures et journaux comptables',
            "Balance de vérification : soldes d'ouverture, mouvements et clôture",
            'Montants en francs CFA (XAF)',
        ],
        icon: Calculator,
        image: '/img/illustrations/10928.webp',
        imageAlt: 'Équipe analysant la croissance financière avec un tableau et une pièce de monnaie',
        ctaLabel: 'Découvrir la comptabilité',
        ctaHref: 'https://compta.phrm.app',
        available: true,
        accentGradient: 'from-module-compta to-phrm-navy',
        badgeBg: 'bg-phrm-pale',
        badgeText: 'text-module-compta',
    },
];
