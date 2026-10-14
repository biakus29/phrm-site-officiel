import { useCallback, useEffect, useRef } from 'react';
import {
  verifierStatutAbonnement,
  watchSubscriptionOrder,
} from '../services/subscriptionService';

const POLL_INTERVAL_MS = 5000;
const MAX_POLL_ATTEMPTS = 40;

export function useSubscriptionPaymentWatcher() {
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const unsubRef = useRef<(() => void) | null>(null);

  const stopWatching = useCallback(() => {
    unsubRef.current?.();
    unsubRef.current = null;
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  useEffect(() => () => stopWatching(), [stopWatching]);

  const watchPayment = useCallback(
    ({
      orderId,
      onSuccess,
      onFailed,
      onTimeout,
    }: {
      orderId: string;
      onSuccess: (data: Record<string, unknown>) => void;
      onFailed: (motif: string) => void;
      onTimeout: () => void;
    }) => {
      stopWatching();

      const finalize = (
        statut: string,
        data: Record<string, unknown> | undefined,
        motif?: string
      ) => {
        stopWatching();
        if (statut === 'SUCCESSFUL') onSuccess(data || {});
        else if (statut === 'FAILED') onFailed(motif || 'Le paiement a échoué.');
      };

      unsubRef.current = watchSubscriptionOrder(orderId, {
        onSuccess: (data) => finalize('SUCCESSFUL', data),
        onFailed: (motif) => finalize('FAILED', undefined, motif),
      });

      let attempts = 0;
      pollRef.current = setInterval(async () => {
        attempts += 1;
        try {
          const result = await verifierStatutAbonnement(orderId);
          if (result.statut === 'SUCCESSFUL' || result.statut === 'FAILED') {
            finalize(result.statut, undefined, result.motifEchec || undefined);
          }
        } catch {
          // Le snapshot Firestore suffit en mode mock
        }
        if (attempts >= MAX_POLL_ATTEMPTS) {
          stopWatching();
          onTimeout();
        }
      }, POLL_INTERVAL_MS);

      return stopWatching;
    },
    [stopWatching]
  );

  return { watchPayment, stopWatching };
}
