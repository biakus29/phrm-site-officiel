import { httpsCallable } from 'firebase/functions';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, functions } from '../lib/firebase';
import type { BillingPeriod, ModuleId, PlanId } from '../data/subscriptionPlans';
import type { Operateur } from '../utils/campayUtils';

export type PaymentStatut = 'EN_ATTENTE' | 'SUCCESSFUL' | 'FAILED' | null;

export interface SubscriptionOrderPayload {
  module: ModuleId;
  planId: PlanId;
  billingPeriod: BillingPeriod;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  numeroTelephone: string;
  operateur: Operateur;
  clientId?: string;
}

export interface InitAbonnementResult {
  orderId: string;
  reference: string;
  mock?: boolean;
}

/** Crée la commande + initie CamPay réel via Cloud Function. */
export async function initierAbonnement(
  payload: SubscriptionOrderPayload
): Promise<InitAbonnementResult> {
  const fn = httpsCallable(functions, 'initierAbonnement');
  const result = await fn(payload);
  return result.data as InitAbonnementResult;
}

export async function verifierStatutAbonnement(orderId: string): Promise<{
  statut: PaymentStatut;
  motifEchec?: string | null;
}> {
  const fn = httpsCallable(functions, 'verifierStatutAbonnement');
  const result = await fn({ orderId });
  return result.data as { statut: PaymentStatut; motifEchec?: string | null };
}

export function watchSubscriptionOrder(
  orderId: string,
  handlers: {
    onSuccess: (data: Record<string, unknown>) => void;
    onFailed: (motif: string) => void;
  }
): () => void {
  return onSnapshot(doc(db, 'subscription_orders', orderId), (snap) => {
    const data = snap.data();
    const statut = data?.paiement?.statut;
    if (statut === 'SUCCESSFUL') handlers.onSuccess(data || {});
    if (statut === 'FAILED') {
      handlers.onFailed(data?.paiement?.motifEchec || 'Le paiement a échoué.');
    }
  });
}

/**
 * Initie le paiement réel CamPay.
 * Plus de fallback mock silencieux — les erreurs serveur sont remontées.
 */
export async function initierAbonnementWithFallback(
  payload: SubscriptionOrderPayload
): Promise<InitAbonnementResult> {
  const result = await initierAbonnement(payload);
  if (result.mock) {
    console.warn(
      'Paiement mock reçu — ACTIVEZ CamPay (ALLOW_MOCK_PAYMENT doit être false).'
    );
  }
  return result;
}
