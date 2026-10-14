import * as React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { PhrmModule } from '../../data/modules';

interface ModuleSectionProps {
    module: PhrmModule;
    /** Position dans la liste : les index impairs inversent image/texte. */
    index: number;
}

export const ModuleSection: React.FC<ModuleSectionProps> = ({ module, index }) => {
    const reversed = index % 2 === 1;
    const Icon = module.icon;

    return (
        <div className="py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Texte */}
                <div className={`animate-fade-in-up ${reversed ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 ${module.badgeBg} ${module.badgeText}`}>
                        <Icon className="w-4 h-4" />
                        {module.badge}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-phrm-text mb-3">{module.name}</h3>
                    <p className="text-lg text-phrm-navy font-medium mb-4">{module.tagline}</p>
                    <p className="text-phrm-muted mb-6 leading-relaxed">{module.description}</p>
                    <ul className="space-y-3 mb-8">
                        {module.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-phrm-text">
                                <CheckCircle className="w-5 h-5 text-status-success mt-0.5 flex-shrink-0" />
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4 flex-wrap">
                        <a
                            href={module.ctaHref}
                            className="inline-flex items-center gap-2 bg-phrm-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-phrm-mid transition-colors"
                        >
                            {module.ctaLabel}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        {!module.available && (
                            <span className="text-sm text-phrm-muted/60 font-medium">Bientôt disponible</span>
                        )}
                    </div>
                </div>

                {/* Image */}
                <div className={`relative animate-fade-in-up animation-delay-200 ${reversed ? 'lg:order-1' : ''}`}>
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-phrm-bg border border-phrm-pale">
                        <img
                            src={module.image}
                            onError={(e) => { (e.target as HTMLImageElement).src = '/logophrm.png'; }}
                            alt={module.imageAlt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
