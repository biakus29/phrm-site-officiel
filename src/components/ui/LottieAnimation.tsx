import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
    /** Chemin vers le fichier .json dans /public (ex. "/animations/business-analysis.json"). */
    src: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
    ariaLabel?: string;
}

/**
 * Charge et joue une animation Lottie depuis un fichier JSON dans /public.
 * Le JSON est récupéré à l'exécution (pas bundlé dans le JS) pour garder le bundle léger.
 * Tant que l'animation n'est pas chargée, on rend un placeholder transparent qui
 * conserve la place de l'animation pour éviter les sauts de mise en page.
 */
export const LottieAnimation = ({
    src,
    className,
    loop = true,
    autoplay = true,
    ariaLabel,
}: LottieAnimationProps) => {
    const [animationData, setAnimationData] = useState<unknown>(null);

    useEffect(() => {
        let cancelled = false;
        fetch(src)
            .then(res => res.json())
            .then(data => {
                if (!cancelled) setAnimationData(data);
            })
            .catch(err => {
                // Soft fail: on garde le placeholder, on n'affiche pas d'erreur à l'utilisateur.
                console.error('Échec du chargement de l\'animation Lottie:', err);
            });
        return () => {
            cancelled = true;
        };
    }, [src]);

    if (!animationData) {
        return <div className={className} aria-hidden="true" />;
    }

    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            className={className}
            aria-label={ariaLabel}
        />
    );
};
