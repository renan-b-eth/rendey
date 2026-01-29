'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'en' | 'pt'

type Dict = Record<string, any>

const EN: Dict = {
  nav: {
    products: 'Products',
    company: 'Company',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    refund: 'Refunds',
    talk: 'Talk to us',
  },
  topbar: {
    status: 'U.S.-registered',
    founded: 'Founded',
  },
  home: {
    badge: 'U.S.-registered • Founded {{founded}} • {{state}}',
    h1a: 'Building premium digital products.',
    h1b: 'Shipping globally.',
    heroP:
      'We build AI-powered products, modern SaaS, and digital infrastructure. Designed to feel trustworthy, fast, and ready for scale.',
    cta1: 'Explore products',
    cta2: 'Contact',
    stat1t: 'Operations',
    stat1v: 'United States',
    stat2t: 'Focus',
    stat2v: 'AI + SaaS',
    stat3t: 'Trust',
    stat3v: 'Stripe-ready',
    trustTitle: 'Trust & verification',
    trustP:
      'We keep public company information clear (address, phone, policies) and avoid exposing sensitive identifiers like EIN.',
    verify: 'Verify New Mexico registration',
    businessAddress: 'Business address',
    support: 'Support',
    responseTime: 'Response time: 1–2 business days.',
    productsEyebrow: 'Products',
    productsTitle: 'Global products owned by Rendey',
    productsSubtitle:
      'A U.S. company building technology and brands for international markets — including Brazil.',
    payImportant: 'Important',
    payCta: 'Request early access',
    payDetails: 'Product details',
    capEyebrow: 'Capabilities',
    capTitle: 'Modern engineering, built for trust',
    capSubtitle:
      'We combine product design, scalable systems, and compliance-aware communication to launch globally.',
    cap1t: 'AI-ready products',
    cap1p: 'From automation to intelligent workflows — shipping fast without sacrificing quality.',
    cap2t: 'Compliance-aware UX',
    cap2p: 'Clear policies, transparent messaging, and trust cues that reduce friction for users and partners.',
    cap3t: 'Global-first execution',
    cap3p: 'International brand building with a U.S. corporate foundation and Brazil-focused products.',
    partnerTitle: 'Want to partner with Rendey?',
    partnerP: "Tell us what you're building. We'll reply with next steps.",
    partnerCta: 'Contact',
  },
  products: {
    eyebrow: 'Products',
    title: 'Products & brands',
    subtitle:
      'Rendey LLC builds and owns global digital products. We operate from the U.S. with brands serving international markets.',
    dolTitle: 'DolarizandoSe',
    dolP:
      'An educational platform focused on helping Brazilian entrepreneurs build globally — even while living in Brazil.',
    dolBullets: [
      'International expansion playbooks and mentorship',
      'Operational and legal basics for going global',
      'Content, tools, and community for builders',
    ],
    payTitle: 'DolarizandoSe Pay',
    payStatus: 'In development',
    payP:
      'A self-custody wallet infrastructure concept designed to bridge local payments (like Pix) into stablecoin rails (USDT) under user control.',
    payDisclaimer:
      'Non-custodial technology concept. We do not take custody of user funds. Not a bank. Not a money transmitter. Not financial advice. Availability may vary by jurisdiction.',
    ctaSite: 'Visit website',
    ctaContact: 'Contact',
  },
  company: {
    eyebrow: 'Company',
    title: 'Rendey LLC',
    subtitle:
      'A U.S.-registered technology company founded in 2024, focused on AI products, SaaS, and global digital infrastructure.',
    verifyTitle: 'U.S. company verification',
    verifyP:
      'You can verify Rendey LLC registration using the official New Mexico Secretary of State business search (public record).',
    verifyCta: 'Open official business search',
    addrTitle: 'Business address',
    opsTitle: 'Operations',
    opsP:
      'We operate internationally with a U.S. corporate foundation. Our products include Brazil-focused brands owned by Rendey LLC.',
    metaState: 'State of registration',
    metaFounded: 'Founded',
    metaSupport: 'Support',
    metaEmail: 'Email',
    metaBoise: 'Boise, Idaho (mailing/business address)',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to Rendey',
    subtitle: "Tell us what you're building. We reply within 1–2 business days.",
    company: 'Company',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    verification: 'Verification',
    verificationP:
      'For public verification, use the official New Mexico business search:',
    sendTitle: 'Send a message',
    sendP:
      'This form uses Formspree by default. Replace the action URL with your endpoint.',
    name: 'Name',
    emailLabel: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send message',
    consent: 'By submitting this form, you agree to our',
  },
  legal: {
    privacy: {
      title: 'Privacy Policy',
      intro:
        'We collect minimal information needed to operate this website and respond to inquiries. We do not sell personal data.',
    },
    terms: {
      title: 'Terms of Service',
      intro:
        'By using this website, you agree to these terms. Content is provided “as is” and may change at any time.',
    },
    refund: {
      title: 'Refund Policy',
      intro:
        'Refunds depend on the specific product purchased. If a refund policy applies, it will be shown at checkout or in the product terms.',
    },
    updated: 'Last updated',
  },
  footer: {
    companyInfo: 'Company information',
    legal: 'Legal',
    verify: 'Verify registration',
    rights: 'All rights reserved.',
  },
}

const PT: Dict = {
  nav: {
    products: 'Produtos',
    company: 'Empresa',
    contact: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos',
    refund: 'Reembolsos',
    talk: 'Fale conosco',
  },
  topbar: {
    status: 'Registrada nos EUA',
    founded: 'Fundada',
  },
  home: {
    badge: 'Registrada nos EUA • Fundada em {{founded}} • {{state}}',
    h1a: 'Construindo produtos digitais premium.',
    h1b: 'Escalando globalmente.',
    heroP:
      'Criamos produtos com IA, SaaS moderno e infraestrutura digital. Feitos para transmitir confiança, velocidade e escala.',
    cta1: 'Ver produtos',
    cta2: 'Contato',
    stat1t: 'Operação',
    stat1v: 'Estados Unidos',
    stat2t: 'Foco',
    stat2v: 'IA + SaaS',
    stat3t: 'Confiança',
    stat3v: 'Pronto para Stripe',
    trustTitle: 'Confiança & verificação',
    trustP:
      'Mantemos informações públicas claras (endereço, telefone, políticas) e evitamos expor identificadores sensíveis como EIN.',
    verify: 'Verificar registro no Novo México',
    businessAddress: 'Endereço comercial',
    support: 'Suporte',
    responseTime: 'Prazo de resposta: 1–2 dias úteis.',
    productsEyebrow: 'Produtos',
    productsTitle: 'Produtos globais da Rendey',
    productsSubtitle:
      'Uma empresa dos EUA que cria tecnologia e marcas para mercados internacionais — incluindo o Brasil.',
    payImportant: 'Importante',
    payCta: 'Pedir acesso antecipado',
    payDetails: 'Detalhes do produto',
    capEyebrow: 'Capacidades',
    capTitle: 'Engenharia moderna, feita para confiança',
    capSubtitle:
      'Unimos design de produto, sistemas escaláveis e comunicação alinhada a compliance para lançar globalmente.',
    cap1t: 'Produtos prontos para IA',
    cap1p: 'De automações a fluxos inteligentes — entregando rápido sem perder qualidade.',
    cap2t: 'UX alinhado a compliance',
    cap2p: 'Políticas claras, transparência e sinais de confiança para reduzir atrito com usuários e parceiros.',
    cap3t: 'Execução global',
    cap3p: 'Construção de marcas internacionais com base corporativa nos EUA e produtos focados no Brasil.',
    partnerTitle: 'Quer fazer parceria com a Rendey?',
    partnerP: 'Conte o que você está construindo. Respondemos com os próximos passos.',
    partnerCta: 'Contato',
  },
  products: {
    eyebrow: 'Produtos',
    title: 'Produtos & marcas',
    subtitle:
      'A Rendey LLC cria e possui produtos digitais globais. Operamos a partir dos EUA com marcas para mercados internacionais.',
    dolTitle: 'DolarizandoSe',
    dolP:
      'Plataforma educacional para ajudar empreendedores brasileiros a expandirem internacionalmente — mesmo morando no Brasil.',
    dolBullets: [
      'Playbooks e mentoria para expansão internacional',
      'Bases operacionais e legais para atuar fora',
      'Conteúdo, ferramentas e comunidade para builders',
    ],
    payTitle: 'DolarizandoSe Pay',
    payStatus: 'Em desenvolvimento',
    payP:
      'Conceito de infraestrutura de carteira auto-custódia para integrar pagamentos locais (como Pix) a trilhos de stablecoin (USDT) sob controle do usuário.',
    payDisclaimer:
      'Conceito tecnológico non-custodial. Não fazemos custódia de fundos. Não somos banco. Não somos instituição financeira. Não é aconselhamento financeiro. Disponibilidade pode variar por jurisdição.',
    ctaSite: 'Visitar site',
    ctaContact: 'Contato',
  },
  company: {
    eyebrow: 'Empresa',
    title: 'Rendey LLC',
    subtitle:
      'Empresa de tecnologia registrada nos EUA (2024), focada em produtos com IA, SaaS e infraestrutura digital global.',
    verifyTitle: 'Verificação da empresa nos EUA',
    verifyP:
      'Você pode verificar o registro da Rendey LLC pelo buscador oficial do Secretary of State do Novo México (registro público).',
    verifyCta: 'Abrir buscador oficial',
    addrTitle: 'Endereço comercial',
    opsTitle: 'Operação',
    opsP:
      'Operamos internacionalmente com base corporativa nos EUA. Nossos produtos incluem marcas focadas no Brasil, pertencentes à Rendey LLC.',
    metaState: 'Estado de registro',
    metaFounded: 'Fundada',
    metaSupport: 'Suporte',
    metaEmail: 'Email',
    metaBoise: 'Boise, Idaho (endereço comercial/correspondência)',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Fale com a Rendey',
    subtitle: 'Conte o que você está construindo. Respondemos em 1–2 dias úteis.',
    company: 'Empresa',
    email: 'Email',
    phone: 'Telefone',
    address: 'Endereço',
    verification: 'Verificação',
    verificationP: 'Para verificação pública, use o buscador oficial do Novo México:',
    sendTitle: 'Enviar mensagem',
    sendP:
      'Este formulário usa Formspree por padrão. Troque a URL do action pelo seu endpoint.',
    name: 'Nome',
    emailLabel: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    send: 'Enviar',
    consent: 'Ao enviar, você concorda com nossa',
  },
  legal: {
    privacy: {
      title: 'Política de Privacidade',
      intro:
        'Coletamos o mínimo necessário para operar este site e responder contatos. Não vendemos dados pessoais.',
    },
    terms: {
      title: 'Termos de Serviço',
      intro:
        'Ao usar este site, você concorda com estes termos. O conteúdo é fornecido “como está” e pode mudar a qualquer momento.',
    },
    refund: {
      title: 'Política de Reembolso',
      intro:
        'Reembolsos dependem do produto adquirido. Se houver política específica, ela será exibida no checkout ou nos termos do produto.',
    },
    updated: 'Última atualização',
  },
  footer: {
    companyInfo: 'Informações da empresa',
    legal: 'Legal',
    verify: 'Verificar registro',
    rights: 'Todos os direitos reservados.',
  },
}

const dictionaries: Record<Lang, Dict> = { en: EN, pt: PT }

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string, vars?: Record<string, any>) => any }

const I18nContext = createContext<I18nCtx | null>(null)

function get(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => (acc && typeof acc === 'object' ? acc[part] : undefined), obj)
}

function interpolate(str: string, vars?: Record<string, any>) {
  if (!vars) return str
  return str.replace(/\{\{(.*?)\}\}/g, (_, k) => {
    const key = String(k).trim()
    return vars[key] === undefined ? '' : String(vars[key])
  })
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('rendey_lang') as Lang | null
      if (saved === 'en' || saved === 'pt') setLang(saved)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem('rendey_lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  const value = useMemo<I18nCtx>(() => {
    const dict = dictionaries[lang]
    return {
      lang,
      setLang,
      t: (key, vars) => {
        const v = get(dict, key)
        if (typeof v === 'string') return interpolate(v, vars)
        return v
      },
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
