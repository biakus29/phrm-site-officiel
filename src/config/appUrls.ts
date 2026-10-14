/**
 * URLs apps PHRM — locales en dev, production sinon.
 * Override via .env : VITE_PAIE_APP_URL, VITE_COMPTA_APP_URL, VITE_VITRINE_URL
 */

const trimSlash = (url: string) => url.replace(/\/$/, '');

export const PAIE_APP_URL = trimSlash(
  import.meta.env.VITE_PAIE_APP_URL ||
    (import.meta.env.DEV ? 'http://localhost:5173' : 'https://paie.phrm.app')
);

export const COMPTA_APP_URL = trimSlash(
  import.meta.env.VITE_COMPTA_APP_URL ||
    (import.meta.env.DEV ? 'http://localhost:5174' : 'https://compta.phrm.app')
);

export const VITRINE_URL = trimSlash(
  import.meta.env.VITE_VITRINE_URL ||
    (import.meta.env.DEV ? 'http://localhost:5175' : 'https://phrm.app')
);

export const PAIE_REGISTER_URL = `${PAIE_APP_URL}/register-client`;
export const RECRUITMENT_APP_URL = trimSlash(import.meta.env.VITE_RECRUITMENT_APP_URL || 'https://recrutement.phrm.app');
export const PAIE_LOGIN_URL = `${PAIE_APP_URL}/client-admin-login`;
