/**
 * Loader animé du logo PHRM — pur SVG + CSS, zéro dépendance.
 *
 * Séquence (2,8 s, en boucle infinie) :
 *  1. Le carré clair glisse depuis la gauche.
 *  2. Le carré marine glisse depuis le bas-droit.
 *  3. Les lettres apparaissent progressivement : P → H → R → M.
 *  4. Pause respirée avant la reprise.
 *
 * `prefers-reduced-motion: reduce` désactive toute l'animation et affiche le logo final fixe.
 *
 * Pour le loader de boot (avant le mount React), une copie inline existe dans `index.html`
 * — garder les deux versions synchronisées visuellement.
 */

const ANIM_CSS = `
.phrm-l-sq { transform-box: fill-box; transform-origin: center; }
.phrm-l-sq-back  { animation: phrmLSqBack  2.8s ease-out infinite; }
.phrm-l-sq-front { animation: phrmLSqFront 2.8s ease-out infinite; }
.phrm-l-letter {
  transform-box: fill-box;
  transform-origin: center;
  animation-duration: 2.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}
.phrm-l-letter-p { animation-name: phrmLLp; }
.phrm-l-letter-h { animation-name: phrmLLh; }
.phrm-l-letter-r { animation-name: phrmLLr; }
.phrm-l-letter-m { animation-name: phrmLLm; }

@keyframes phrmLSqBack {
  0%        { opacity: 0; transform: translateX(-18px); }
  18%, 100% { opacity: 1; transform: translateX(0); }
}
@keyframes phrmLSqFront {
  0%, 10%   { opacity: 0; transform: translate(14px, 14px); }
  28%, 100% { opacity: 1; transform: translate(0, 0); }
}
@keyframes phrmLLp {
  0%, 28%   { opacity: 0; transform: translateY(-8px); }
  38%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes phrmLLh {
  0%, 38%   { opacity: 0; transform: translateY(-8px); }
  48%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes phrmLLr {
  0%, 48%   { opacity: 0; transform: translateY(-8px); }
  58%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes phrmLLm {
  0%, 58%   { opacity: 0; transform: translateY(-8px); }
  68%, 100% { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .phrm-l-sq-back,
  .phrm-l-sq-front,
  .phrm-l-letter { animation: none; opacity: 1; transform: none; }
}
`;

interface LogoLoaderProps {
    /** Taille du loader. "sm" pour Suspense en cours de section, "md" par défaut, "lg" pour écran plein. */
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    /** Libellé accessible (par défaut : "Chargement…"). */
    label?: string;
}

const sizeClass: Record<NonNullable<LogoLoaderProps['size']>, string> = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
};

export const LogoLoader = ({ size = 'md', className = '', label = 'Chargement…' }: LogoLoaderProps) => {
    return (
        <div className={`inline-flex flex-col items-center justify-center gap-3 ${className}`} role="status" aria-live="polite">
            <svg viewBox="0 0 200 200" className={sizeClass[size]} aria-hidden="true">
                <style>{ANIM_CSS}</style>
                <rect className="phrm-l-sq phrm-l-sq-back" x="15" y="15" width="110" height="110" rx="3" fill="#A8D6F4" />
                <rect className="phrm-l-sq phrm-l-sq-front" x="75" y="75" width="110" height="110" rx="3" fill="#0A1D34" />
                <g fontFamily="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" fontWeight="700" fontSize="44" textAnchor="middle" dominantBaseline="central">
                    <text className="phrm-l-letter phrm-l-letter-p" x="60" y="55" fill="#0A1D34">P</text>
                    <text className="phrm-l-letter phrm-l-letter-h" x="105" y="105" fill="#FFFFFF">H</text>
                    <text className="phrm-l-letter phrm-l-letter-r" x="130" y="130" fill="#FFFFFF">R</text>
                    <text className="phrm-l-letter phrm-l-letter-m" x="158" y="158" fill="#FFFFFF">M</text>
                </g>
            </svg>
            <span className="sr-only">{label}</span>
        </div>
    );
};
