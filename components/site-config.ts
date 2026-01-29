export const site = {
  name: 'Rendey LLC',
  tagline: 'Building global digital products in AI, software and financial infrastructure.',
  description:
    'Rendey LLC is a U.S.-registered technology company founded in 2024. We build AI-powered products, modern SaaS, and global-ready platforms — including educational brands serving Brazil.',
  founded: 2024,
  stateOfRegistration: 'New Mexico',
  businessAddress: {
    line1: '5060 E Woodcutter Dr #64930',
    city: 'Boise',
    region: 'ID',
    postal: '83716',
    country: 'United States',
  },
  registeredAgentAddress: {
    line1: '8206 Louisiana Blvd NE Suite A',
    city: 'Albuquerque',
    region: 'NM',
    postal: '87113',
    country: 'United States',
  },
  supportPhoneDisplay: '+1 (505) 308-6126',
  supportPhoneE164: '+15053086126',
  supportEmail: 'support@rendey.store',
  website: 'https://rendey.store',
  nmSosSearchUrl: 'https://portal.sos.state.nm.us/BFS/online/CorporationBusinessSearch',
  socials: {
    linkedin: 'https://www.linkedin.com',
  },
} as const;

export const products = {
  dolarizandose: {
    name: 'DolarizandoSe',
    url: 'https://dolarizandose.com.br',
    short:
      'An educational platform helping Brazilian entrepreneurs expand internationally — legally, strategically, and with world-class execution.',
    bullets: [
      'International expansion playbooks and mentorship',
      'Operational and legal basics for going global',
      'Content, tools, and community for builders',
    ],
  },
  dolarizandosePay: {
    name: 'DolarizandoSe Pay',
    status: 'In development',
    short:
      'Non-custodial wallet infrastructure focused on self-custody stablecoin management. Users maintain full control of their assets.',
    disclaimer:
      'Non-custodial technology. We do not take custody of user funds. Availability may vary by jurisdiction. Not a bank. Not a financial advisory service.',
  },
} as const;
