/**
 * Symbole PHRM seul (les deux carrés + lettres). Pas de wordmark, pas de tagline.
 *
 * Variantes :
 *  - default : carré marine #0A1D34 + lettres blanches → fond clair
 *  - dark    : carré blanc + lettres marine → fond sombre
 *  - mono    : currentColor → contrôle via la prop `color` ou un parent CSS
 *
 * Le SVG est entièrement vectoriel, viewBox 0 0 200 200, accessibilité native (role="img" + aria-label).
 */

type LogoIconVariant = 'default' | 'dark' | 'mono';

interface LogoIconProps {
    variant?: LogoIconVariant;
    /** Taille en CSS (number = pixels, string = unité libre). Par défaut 40px. */
    size?: number | string;
    className?: string;
    /** Libellé accessible. Par défaut "PHRM". */
    title?: string;
    /** Couleur appliquée à la variante "mono" (ignorée sinon). */
    color?: string;
}

const palettes: Record<LogoIconVariant, { back: string; front: string; pLetter: string; hrmLetter: string; backStroke?: string }> = {
    default: { back: '#A8D6F4', front: '#0A1D34', pLetter: '#0A1D34', hrmLetter: '#FFFFFF' },
    dark: { back: '#A8D6F4', front: '#FFFFFF', pLetter: '#0A1D34', hrmLetter: '#0A1D34' },
    mono: { back: 'none', front: 'currentColor', pLetter: 'currentColor', hrmLetter: '#FFFFFF', backStroke: 'currentColor' },
};

export const LogoIcon = ({
    variant = 'default',
    size = 40,
    className = '',
    title = 'PHRM',
    color,
}: LogoIconProps) => {
    const palette = palettes[variant];
    const dimension = typeof size === 'number' ? `${size}px` : size;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width={dimension}
            height={dimension}
            role="img"
            aria-label={title}
            className={className}
            style={variant === 'mono' && color ? { color } : undefined}
        >
            <title>{title}</title>
            <rect
                x="15"
                y="15"
                width="110"
                height="110"
                rx="3"
                fill={palette.back}
                stroke={palette.backStroke}
                strokeWidth={palette.backStroke ? 4 : undefined}
            />
            <rect x="75" y="75" width="110" height="110" rx="3" fill={palette.front} />
            <g
                fontFamily="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
                fontWeight={700}
                fontSize={44}
                textAnchor="middle"
                dominantBaseline="central"
            >
                <text x="60" y="55" fill={palette.pLetter}>P</text>
                <text x="105" y="105" fill={palette.hrmLetter}>H</text>
                <text x="130" y="130" fill={palette.hrmLetter}>R</text>
                <text x="158" y="158" fill={palette.hrmLetter}>M</text>
            </g>
        </svg>
    );
};
