import { useEffect, useState } from 'react';
import { Loader2, Smartphone, X, CheckCircle2 } from 'lucide-react';
import {
  formatPrice,
  getPlanPrice,
  registerUrlForOrder,
  type BillingPeriod,
  type SubscriptionPlan,
} from '../../data/subscriptionPlans';
import {
  detectOperateurFromPhone,
  isValidCameroonPhone,
  normalizePhone,
  validatePaymentAmount,
  type Operateur,
} from '../../utils/campayUtils';
import { initierAbonnementWithFallback } from '../../services/subscriptionService';
import { useSubscriptionPaymentWatcher } from '../../hooks/useSubscriptionPaymentWatcher';

interface Props {
  plan: SubscriptionPlan;
  period: BillingPeriod;
  onClose: () => void;
}

type Step = 'form' | 'waiting' | 'success' | 'failed';

export const SubscriptionCheckout = ({ plan, period, onClose }: Props) => {
  const { watchPayment, stopWatching } = useSubscriptionPaymentWatcher();
  const [step, setStep] = useState<Step>('form');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [operateur, setOperateur] = useState<Operateur>('ORANGE');
  const [manualOperator, setManualOperator] = useState(false);

  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    mobileMoney: '',
  });

  const montant = getPlanPrice(plan, period);

  useEffect(() => () => stopWatching(), [stopWatching]);

  useEffect(() => {
    if (manualOperator) return;
    const normalized = normalizePhone(form.mobileMoney);
    if (normalized.length < 12) return;
    const detected = detectOperateurFromPhone(normalized);
    if (detected) setOperateur(detected);
  }, [form.mobileMoney, manualOperator]);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.companyName.trim() || !form.contactName.trim() || !form.email.trim()) {
      setError('Renseignez l’entreprise, votre nom et votre e-mail.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('E-mail invalide.');
      return;
    }

    const numeroTelephone = normalizePhone(form.mobileMoney);
    if (!isValidCameroonPhone(numeroTelephone)) {
      setError('Numéro Mobile Money invalide. Format : 6XXXXXXXX ou 2376XXXXXXXX.');
      return;
    }

    const amountCheck = validatePaymentAmount(numeroTelephone, montant, operateur);
    if (!amountCheck.valid) {
      setError(amountCheck.message || 'Montant invalide.');
      return;
    }

    setLoading(true);
    try {
      const result = await initierAbonnementWithFallback({
        module: plan.module,
        planId: plan.id,
        billingPeriod: period,
        companyName: form.companyName.trim(),
        contactName: form.contactName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || numeroTelephone,
        numeroTelephone,
        operateur,
      });

      setOrderId(result.orderId);
      setStep('waiting');

      watchPayment({
        orderId: result.orderId,
        onSuccess: () => setStep('success'),
        onFailed: (motif) => {
          setError(motif);
          setStep('failed');
        },
        onTimeout: () => {
          setError('Délai dépassé. Si vous avez validé sur votre téléphone, contactez le support.');
          setStep('failed');
        },
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Impossible d’initier le paiement.');
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    if (!orderId) return;
    window.location.href = registerUrlForOrder({
      module: plan.module,
      planId: plan.id,
      orderId,
    });
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-phrm-dark/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-phrm-navy/10">
          <div>
            <h3 id="checkout-title" className="text-lg font-bold text-phrm-text">
              Abonnement {plan.name}
            </h3>
            <p className="text-sm text-phrm-muted">
              {plan.module === 'paie' ? 'RH & Paie' : 'Comptabilité'} ·{' '}
              {formatPrice(montant)} FCFA / {period === 'yearly' ? 'an' : 'mois'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-phrm-pale text-phrm-muted"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field
                label="Entreprise"
                value={form.companyName}
                onChange={(v) => update('companyName', v)}
                required
              />
              <Field
                label="Nom du contact"
                value={form.contactName}
                onChange={(v) => update('contactName', v)}
                required
              />
              <Field
                label="E-mail"
                type="email"
                value={form.email}
                onChange={(v) => update('email', v)}
                required
              />
              <Field
                label="Téléphone (contact)"
                value={form.phone}
                onChange={(v) => update('phone', v)}
                placeholder="6XX XX XX XX"
              />

              <div>
                <label className="block text-sm font-semibold text-phrm-text mb-2">
                  Paiement Mobile Money
                </label>
                <div className="flex gap-2 mb-3">
                  <OpButton
                    active={operateur === 'ORANGE'}
                    color="#ff7900"
                    label="Orange Money"
                    onClick={() => {
                      setManualOperator(true);
                      setOperateur('ORANGE');
                    }}
                  />
                  <OpButton
                    active={operateur === 'MTN'}
                    color="#ffcc00"
                    label="MTN MoMo"
                    onClick={() => {
                      setManualOperator(true);
                      setOperateur('MTN');
                    }}
                  />
                </div>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-phrm-muted" />
                  <input
                    className="w-full border border-phrm-navy/20 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-phrm-navy/30"
                    placeholder="6XXXXXXXX"
                    value={form.mobileMoney}
                    onChange={(e) => update('mobileMoney', e.target.value)}
                    required
                  />
                </div>
                <p className="text-xs text-phrm-muted mt-1.5">
                  Validez le push USSD sur votre téléphone après validation.
                </p>
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 disabled:opacity-60"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Initiation…
                  </span>
                ) : (
                  `Payer ${formatPrice(montant)} FCFA`
                )}
              </button>
            </form>
          )}

          {step === 'waiting' && (
            <div className="text-center py-8 space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-phrm-navy mx-auto" />
              <h4 className="text-lg font-bold text-phrm-text">Confirmez sur votre téléphone</h4>
              <p className="text-sm text-phrm-muted max-w-sm mx-auto">
                Une demande {operateur === 'ORANGE' ? 'Orange Money' : 'MTN MoMo'} a été envoyée.
                Composez le code ou validez la notification, puis attendez la confirmation ici.
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-status-success mx-auto" />
              <h4 className="text-lg font-bold text-phrm-text">Paiement confirmé</h4>
              <p className="text-sm text-phrm-muted">
                Créez votre compte pour activer l&apos;abonnement {plan.name} (
                {plan.module === 'paie' ? 'Paie' : 'Compta'}).
              </p>
              <button type="button" onClick={goToRegister} className="btn-primary w-full py-3">
                Créer mon compte
              </button>
            </div>
          )}

          {step === 'failed' && (
            <div className="text-center py-8 space-y-4">
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error || 'Le paiement a échoué.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep('form');
                  setError('');
                }}
                className="btn-outline w-full py-3"
              >
                Réessayer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-phrm-text mb-1.5">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-phrm-navy/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-phrm-navy/30"
    />
  </div>
);

const OpButton = ({
  active,
  color,
  label,
  onClick,
}: {
  active: boolean;
  color: string;
  label: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-1 py-2.5 rounded-lg text-sm font-bold border-2 transition-all ${
      active ? 'shadow-sm' : 'opacity-60'
    }`}
    style={{
      borderColor: color,
      backgroundColor: active ? `${color}22` : 'white',
      color: '#0A1D34',
    }}
  >
    {label}
  </button>
);
