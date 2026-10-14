/**
 * Lockup horizontal PHRM = symbole (LogoIcon) + wordmark "PHRM".
 *
 * Usage typique : navbar, footer, sections d'en-tête où le wordmark complète le symbole.
 * Pour les contextes étroits (favicons, app launchers, badges), utiliser <LogoIcon /> directement.
 *
 * Variantes :
 *  - default : wordmark marine (#0A1D34) → fonds clairs
 *  - dark    : wordmark blanc           → fonds sombres
 *  - mono    : wordmark currentColor    → s'aligne sur la couleur du parent
 */

import { LogoIcon } from './LogoIcon';

type LogoVariant = 'default' | 'dark' | 'mono';

interface LogoProps {
    variant?: LogoVariant;
    /** Hauteur du symbole en px. Le wordmark se met à l'échelle automatiquement. Par défaut 40. */
    size?: number;
    className?: string;
    /** Libellé accessible de l'ensemble. Par défaut "PHRM". */
    title?: string;
}

const wordmarkColor: Record<LogoVariant, string> = {
    default: '#0A1D34',
    dark: '#FFFFFF',
    mono: 'currentColor',
};

export const Logo = ({ variant = 'default', size = 40, className = '', title = 'PHRM' }: LogoProps) => {
    return (
        <span
            className={`inline-flex items-center gap-3 ${className}`}
            role="img"
            aria-label={title}
        >
            <LogoIcon variant={variant} size={size} title={title} />
            <span
                aria-hidden="true"
                style={{
                    fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: `${Math.round(size * 0.62)}px`,
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                    color: wordmarkColor[variant],
                }}
            >
                PHRM
            </span>
        </span>
    );
};
