import { ArrowRight, Building2, UserRound } from 'lucide-react';
import { RECRUITMENT_APP_URL } from '../../config/appUrls';

export const RecruitmentProcess = () => (
  <section id="recrutement" className="border-y border-phrm-pale bg-white px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold text-phrm-navy">Recrutement & vérification de CV</p>
        <h2 className="text-3xl font-bold leading-tight text-phrm-text">l'idéal  pour chaque démarche</h2>
        <p className="mt-4 text-base leading-relaxed text-phrm-muted">Consultez les offres, suivez votre candidature ou demandez une vérification professionnelle. Retrouvez chaque étape dans votre espace PHRM.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: 'Je suis candidat', icon: UserRound, description: 'Un parcours simple pour postuler et suivre votre dossier.', steps: ['Choisissez une offre et consultez ses détails.', 'Envoyez votre CV et votre accord à la vérification.', 'Suivez la candidature et transmettez les pièces demandées.'], label: 'Consulter les offres', href: `${RECRUITMENT_APP_URL}/offres`, secondary: 'Suivre une vérification de CV', secondaryHref: `${RECRUITMENT_APP_URL}/verification/candidat` },
          { title: 'Je représente une entreprise', icon: Building2, description: 'Faites examiner les profils de vos candidats et employés.', steps: ['Inscrivez votre entreprise ou ouvrez votre compte PHRM.', 'Suivez la facture et l’activation du service.', 'Déposez les profils et consultez les résultats.'], label: 'Ouvrir l’espace entreprise', href: `${RECRUITMENT_APP_URL}/verification/entreprise`, secondary: 'Découvrir le service de vérification', secondaryHref: `${RECRUITMENT_APP_URL}/verification` },
        ].map(path => (
          <article key={path.title} className="flex flex-col rounded-xl border border-phrm-pale bg-white p-6 sm:p-8">
            <path.icon className="mb-4 h-7 w-7 text-phrm-navy" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-phrm-text">{path.title}</h3>
            <p className="mt-2 text-sm text-phrm-muted">{path.description}</p>
            <ol className="my-6 space-y-4">
              {path.steps.map((step, index) => <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-phrm-muted"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-phrm-pale text-xs font-semibold text-phrm-navy">{index + 1}</span><span>{step}</span></li>)}
            </ol>
            <a href={path.href} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg bg-phrm-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-phrm-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phrm-navy">{path.label}<ArrowRight className="h-4 w-4" /></a>
            <a href={path.secondaryHref} className="mt-4 self-start text-sm font-medium text-phrm-navy underline underline-offset-4">{path.secondary}</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
