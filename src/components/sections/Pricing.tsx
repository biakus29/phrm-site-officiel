import { Check, X, Calculator, Users } from 'lucide-react';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  COMPTA_PLANS,
  PAIE_PLANS,
  formatPrice,
  getPlanPrice,
  type BillingPeriod,
  type ModuleId,
  type SubscriptionPlan,
} from '../../data/subscriptionPlans';
import { PAIE_REGISTER_URL } from '../../config/appUrls';
import { SubscriptionCheckout } from '../modals/SubscriptionCheckout';

function readHashParams(): { module?: ModuleId; plan?: string } {
  if (typeof window === 'undefined') return {};
  const hash = window.location.hash || '';
  const qIndex = hash.indexOf('?');
  if (qIndex === -1) return {};
  const params = new URLSearchParams(hash.slice(qIndex + 1));
  const module = params.get('module') as ModuleId | null;
  const plan = params.get('plan');
  return {
    module: module === 'paie' || module === 'compta' ? module : undefined,
    plan: plan || undefined,
  };
}

export const Pricing = () => {
  const [module, setModule] = useState<ModuleId>('paie');
  const [period, setPeriod] = useState<BillingPeriod>('monthly');
  const [selected, setSelected] = useState<SubscriptionPlan | null>(null);

  useEffect(() => {
    const apply = () => {
      const { module: m } = readHashParams();
      if (m) setModule(m);
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const plans = useMemo(
    () => (module === 'paie' ? PAIE_PLANS : COMPTA_PLANS),
    [module]
  );

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-phrm-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-phrm-text mb-4">Tarifs clairs, sans surprise</h2>
          <p className="text-xl text-phrm-muted max-w-2xl mx-auto">
            3 paliers pour la Paie, 3 paliers pour la Comptabilité. Paiement sécurisé Mobile Money
            depuis cette page.
          </p>
        </div>

        {/* Module switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-white border border-phrm-navy/15 p-1 shadow-sm">
            <ModuleTab
              active={module === 'paie'}
              onClick={() => setModule('paie')}
              icon={<Users className="w-4 h-4" />}
              label="RH & Paie"
            />
            <ModuleTab
              active={module === 'compta'}
              onClick={() => setModule('compta')}
              icon={<Calculator className="w-4 h-4" />}
              label="Comptabilité"
            />
          </div>
        </div>

        {/* Period switch */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setPeriod('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              period === 'monthly'
                ? 'bg-phrm-navy text-white'
                : 'bg-white text-phrm-text border border-phrm-navy/15'
            }`}
          >
            Mensuel
          </button>
          <button
            type="button"
            onClick={() => setPeriod('yearly')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              period === 'yearly'
                ? 'bg-phrm-navy text-white'
                : 'bg-white text-phrm-text border border-phrm-navy/15'
            }`}
          >
            Annuel
            <span className="ml-2 text-xs font-bold text-status-success bg-status-success/10 px-2 py-0.5 rounded">
              −2 mois
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const price = getPlanPrice(plan, period);
            return (
              <article
                key={`${plan.module}-${plan.id}`}
                className={`relative rounded-2xl border bg-white p-6 lg:p-8 flex flex-col ${
                  plan.popular
                    ? 'border-phrm-navy shadow-lg shadow-phrm-navy/10 scale-[1.02]'
                    : 'border-phrm-navy/15'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-phrm-navy text-white text-xs font-bold px-3 py-1 rounded-full">
                    Le plus populaire
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-phrm-text">{plan.name}</h3>
                  <p className="text-sm text-phrm-muted mt-1">{plan.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-phrm-navy">{formatPrice(price)}</span>
                    <span className="text-phrm-muted text-sm">
                      FCFA / {period === 'yearly' ? 'an' : 'mois'}
                    </span>
                  </div>
                  {plan.module === 'paie' && (
                    <p className="text-xs text-phrm-muted mt-2">
                      {plan.maxEmployees === -1
                        ? 'Employés illimités'
                        : `Jusqu'à ${plan.maxEmployees} employés`}
                    </p>
                  )}
                  {plan.module === 'compta' && (
                    <p className="text-xs text-phrm-muted mt-2">
                      {plan.maxEntriesPerMonth === -1
                        ? 'Écritures illimitées'
                        : `Jusqu'à ${plan.maxEntriesPerMonth} écritures / mois`}
                    </p>
                  )}
                </div>

                <ul className="space-y-2.5 flex-grow mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-phrm-text">
                      <Check className="w-4 h-4 text-status-success mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-phrm-muted/70">
                      <X className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelected(plan)}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    plan.popular
                      ? 'bg-phrm-navy text-white hover:brightness-90'
                      : 'bg-phrm-pale text-phrm-navy hover:bg-phrm-sky/40'
                  }`}
                >
                  S&apos;abonner — Mobile Money
                </button>
              </article>
            );
          })}
        </div>

        <p className="text-center text-sm text-phrm-muted mt-10">
          Essai gratuit de 14 jours effectifs disponible à l&apos;inscription (compte réel limité).{' '}
          <a href={PAIE_REGISTER_URL} className="text-phrm-navy font-semibold underline">
            Créer un compte d&apos;essai
          </a>
          {' '}· Compte démo → espace Paie /demo-signup.
        </p>
      </div>

      {selected && (
        <SubscriptionCheckout
          plan={selected}
          period={period}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

const ModuleTab = ({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
      active ? 'bg-phrm-navy text-white' : 'text-phrm-text hover:bg-phrm-pale'
    }`}
  >
    {icon}
    {label}
  </button>
);
