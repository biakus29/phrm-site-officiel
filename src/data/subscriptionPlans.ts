/**
 * Source unique des abonnements PHRM — Paie (3 paliers) + Compta (3 paliers).
 * VERSION DÉMO : prix entre 10 et 25 FCFA (tests Mobile Money CamPay).
 * Le super admin peut écraser ces valeurs via Firestore `subscription_plans`.
 */

import { PAIE_REGISTER_URL } from '../config/appUrls';

export type ModuleId = 'paie' | 'compta';
export type PlanId = 'starter' | 'pro' | 'enterprise';
export type BillingPeriod = 'monthly' | 'yearly';

export interface SubscriptionPlan {
  id: PlanId;
  module: ModuleId;
  name: string;
  priceMonthly: number;
  /** Prix annuel (équivalent ~10 mois). */
  priceYearly: number;
  description: string;
  /** Limite employés (paie) ou -1 = illimité */
  maxEmployees: number;
  /** Limite écritures / mois (compta) ou -1 = illimité */
  maxEntriesPerMonth: number;
  features: string[];
  notIncluded: string[];
  featureKeys?: string[];
  popular: boolean;
  appUrl: string;
}

export const CURRENCY = 'FCFA';

export const PAIE_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    module: 'paie',
    name: 'Starter',
    priceMonthly: 10,
    priceYearly: 100,
    description: 'Démo — TPE et startups',
    maxEmployees: 10,
    maxEntriesPerMonth: -1,
    features: [
      "Jusqu'à 10 employés",
      'Bulletins de paie CNPS / IRPP',
      'Suivi des congés',
      'Rapports de base',
      'Support par e-mail',
    ],
    notIncluded: [
      'Contrats avancés',
      'Rapports personnalisés',
      'Support prioritaire',
      'Accès API',
    ],
    featureKeys: [
      'paie.employees',
      'paie.payslips',
      'paie.leave',
      'paie.reports_basic',
    ],
    popular: false,
    appUrl: 'https://paie.phrm.app',
  },
  {
    id: 'pro',
    module: 'paie',
    name: 'Professionnel',
    priceMonthly: 15,
    priceYearly: 150,
    description: 'Démo — entreprises en croissance',
    maxEmployees: 50,
    maxEntriesPerMonth: -1,
    features: [
      "Jusqu'à 50 employés",
      'Toutes les fonctionnalités Starter',
      'Contrats avancés',
      'Rapports personnalisés',
      'Documents RH automatisés',
      'Support prioritaire',
      'Intégrations tierces',
    ],
    notIncluded: ['Employés illimités', 'Support dédié 24/7'],
    featureKeys: [
      'paie.employees',
      'paie.payslips',
      'paie.leave',
      'paie.reports_basic',
      'paie.contracts',
      'paie.reports_custom',
      'paie.documents_rh',
      'paie.priority_support',
      'paie.integrations',
    ],
    popular: true,
    appUrl: 'https://paie.phrm.app',
  },
  {
    id: 'enterprise',
    module: 'paie',
    name: 'Entreprise',
    priceMonthly: 25,
    priceYearly: 250,
    description: 'Démo — grandes organisations',
    maxEmployees: -1,
    maxEntriesPerMonth: -1,
    features: [
      'Employés illimités',
      'Toutes les fonctionnalités Pro',
      'Support dédié 24/7',
      'API complète',
      'Tableau de bord exécutif',
    ],
    notIncluded: [],
    featureKeys: [
      'paie.employees',
      'paie.payslips',
      'paie.leave',
      'paie.reports_basic',
      'paie.contracts',
      'paie.reports_custom',
      'paie.documents_rh',
      'paie.priority_support',
      'paie.integrations',
      'paie.unlimited_employees',
      'paie.api',
      'paie.dedicated_support',
      'paie.executive_dashboard',
    ],
    popular: false,
    appUrl: 'https://paie.phrm.app',
  },
];

export const COMPTA_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    module: 'compta',
    name: 'Starter',
    priceMonthly: 12,
    priceYearly: 120,
    description: 'Démo — Comptabilité OHADA',
    maxEmployees: -1,
    maxEntriesPerMonth: 200,
    features: [
      "Jusqu'à 200 écritures / mois",
      '1 société',
      'Plan comptable OHADA intégré',
      'Journaux & grand livre',
      'Balance de vérification',
    ],
    notIncluded: [
      'Immobilisations',
      'Déclarations TVA avancées',
      'Multi-sociétés',
      'DSF',
    ],
    featureKeys: [
      'compta.entries',
      'compta.ohada',
      'compta.journals',
      'compta.balance',
    ],
    popular: false,
    appUrl: 'https://compta.phrm.app',
  },
  {
    id: 'pro',
    module: 'compta',
    name: 'Professionnel',
    priceMonthly: 18,
    priceYearly: 180,
    description: 'Démo — suivi comptable et fiscal',
    maxEmployees: -1,
    maxEntriesPerMonth: -1,
    features: [
      'Écritures illimitées',
      'Toutes les fonctionnalités Starter',
      'TVA & taxes',
      'Immobilisations',
      'États financiers',
      'Exports Excel / PDF',
    ],
    notIncluded: ['Multi-sociétés', 'DSF automatisée', 'Support dédié'],
    featureKeys: [
      'compta.entries',
      'compta.ohada',
      'compta.journals',
      'compta.balance',
      'compta.tva',
      'compta.immobilisations',
      'compta.financial_statements',
      'compta.exports',
    ],
    popular: true,
    appUrl: 'https://compta.phrm.app',
  },
  {
    id: 'enterprise',
    module: 'compta',
    name: 'Entreprise',
    priceMonthly: 25,
    priceYearly: 250,
    description: 'Démo — multi-sociétés et conformité',
    maxEmployees: -1,
    maxEntriesPerMonth: -1,
    features: [
      'Multi-sociétés',
      'Toutes les fonctionnalités Pro',
      'DSF & reporting fiscal',
      'API comptable',
      'Assistant IA comptable',
    ],
    notIncluded: [],
    featureKeys: [
      'compta.entries',
      'compta.ohada',
      'compta.journals',
      'compta.balance',
      'compta.tva',
      'compta.immobilisations',
      'compta.financial_statements',
      'compta.exports',
      'compta.multi_company',
      'compta.dsf',
      'compta.api',
      'compta.ai',
    ],
    popular: false,
    appUrl: 'https://compta.phrm.app',
  },
];

export function getPlansForModule(module: ModuleId): SubscriptionPlan[] {
  return module === 'paie' ? PAIE_PLANS : COMPTA_PLANS;
}

export function getPlan(module: ModuleId, planId: PlanId): SubscriptionPlan | undefined {
  return getPlansForModule(module).find((p) => p.id === planId);
}

export function getPlanPrice(plan: SubscriptionPlan, period: BillingPeriod): number {
  return period === 'yearly' ? plan.priceYearly : plan.priceMonthly;
}

export function formatPrice(amount: number): string {
  return amount.toLocaleString('fr-FR');
}

export function registerUrlForOrder(params: {
  module: ModuleId;
  planId: PlanId;
  orderId: string;
}): string {
  // Dev: localhost:5173 — Prod: paie.phrm.app (via VITE_PAIE_APP_URL)
  const qs = new URLSearchParams({
    plan: params.planId,
    module: params.module,
    orderId: params.orderId,
  });
  return `${PAIE_REGISTER_URL}?${qs.toString()}`;
}
