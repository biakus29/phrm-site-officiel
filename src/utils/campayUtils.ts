/** Utilitaires CamPay / Mobile Money (adaptés de rindus test). */

const ORANGE_PREFIXES = ['69', '655', '656', '657', '658', '659'];
const MTN_PREFIXES = ['67', '68', '650', '651', '652', '653', '654'];

const MIN_AMOUNTS: Record<string, number> = {
  ORANGE: 10,
  MTN: 5,
};

export type Operateur = 'ORANGE' | 'MTN';

export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 9) return `237${digits}`;
  if (digits.startsWith('237') && digits.length === 12) return digits;
  return digits;
}

export function detectOperateurFromPhone(numeroTelephone: string): Operateur | null {
  const local = numeroTelephone.startsWith('237')
    ? numeroTelephone.slice(3)
    : numeroTelephone;

  if (local.length < 2) return null;

  const prefix3 = local.slice(0, 3);
  const prefix2 = local.slice(0, 2);

  if (ORANGE_PREFIXES.includes(prefix3) || prefix2 === '69') return 'ORANGE';
  if (MTN_PREFIXES.includes(prefix3) || prefix2 === '67' || prefix2 === '68') return 'MTN';
  return null;
}

export function getMinAmountForOperateur(operateur: string): number {
  return MIN_AMOUNTS[operateur] || 5;
}

export function validatePaymentAmount(
  numeroTelephone: string,
  montant: number,
  selectedOperateur: Operateur
): { valid: boolean; message?: string; operateur?: Operateur; minimum?: number } {
  const detected = detectOperateurFromPhone(numeroTelephone);
  const operateur = detected || selectedOperateur;
  const minimum = getMinAmountForOperateur(operateur);

  if (montant < minimum) {
    const label = operateur === 'ORANGE' ? 'Orange Money' : 'MTN MoMo';
    return {
      valid: false,
      message: `Montant minimum ${minimum} XAF pour ${label}. Votre total est ${montant} XAF.`,
    };
  }

  if (detected && selectedOperateur && detected !== selectedOperateur) {
    const detectedLabel = detected === 'ORANGE' ? 'Orange Money' : 'MTN MoMo';
    const selectedLabel = selectedOperateur === 'ORANGE' ? 'Orange Money' : 'MTN MoMo';
    return {
      valid: false,
      message: `Ce numéro correspond à ${detectedLabel}, pas ${selectedLabel}. Corrigez le numéro ou le mode de paiement.`,
    };
  }

  return { valid: true, operateur, minimum };
}

export function isValidCameroonPhone(numero: string): boolean {
  return /^237[26]\d{8}$/.test(numero);
}
