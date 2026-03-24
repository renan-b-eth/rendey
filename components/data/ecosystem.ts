import {
  GraduationCap,
  Trophy,
  DoorOpen,
  Focus,
  Lock,
  Smartphone,
  TrendingUp,
  Bot,
  Mic,
  type LucideIcon,
} from 'lucide-react'

export type ProductStatus = 'active' | 'beta' | 'development' | 'r&d'

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  url?: string
  icon: LucideIcon
  status: ProductStatus
  bullets: string[]
  stats?: {
    label: string
    value: string
  }
  techStack?: string[]
  comingSoon?: boolean
}

export interface ProductCategory {
  id: string
  title: string
  subtitle: string
  products: Product[]
}

export const ecosystem: {
  enterprise: ProductCategory
  productivity: ProductCategory
  labs: ProductCategory
  media: ProductCategory
} = {
  enterprise: {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    subtitle: 'B2B platforms powering educational institutions and government partnerships',
    products: [
      {
        id: 'rendey-class',
        name: 'Rendey Class',
        tagline: 'Advanced Offline Assessment & OCR Platform',
        description:
          'Enterprise-grade examination platform featuring AI-driven grading, dynamic QR code student tracking, and strict anti-cheat lockdown environments for public and private educational institutions.',
        url: 'https://rendey.app',
        icon: GraduationCap,
        status: 'active',
        bullets: [
          'AI-powered optical character recognition (OCR) grading',
          'Dynamic QR code generation for secure student identification',
          'Full-screen lockdown with mobile device detection',
          'Comprehensive analytics dashboard for learning gap analysis',
        ],
        stats: { label: 'Active Institutions', value: '50+' },
      },
      {
        id: 'estahack',
        name: 'Estahack',
        tagline: 'Official Government EdTech Partner',
        description:
          'The official provider of educational hackathons for the São Paulo State public school system, delivering problem-solving methodologies aligned with modern curriculum standards.',
        url: 'https://estahack.com',
        icon: Trophy,
        status: 'active',
        bullets: [
          'Official partner to São Paulo State public education',
          'Curriculum-aligned problem-solving methodologies',
          'Real-world community challenge resolution',
          'Official certification and credentialing',
        ],
        stats: { label: 'Participants Served', value: '10K+' },
      },
      {
        id: 'portaoedu',
        name: 'PortãoEdu',
        tagline: 'Campus Security & Access Management System',
        description:
          'Real-time student dismissal control platform featuring background Web Push Notifications, audio alerts, and seamless staff-to-parent workflow management for educational institutions.',
        icon: DoorOpen,
        status: 'active',
        bullets: [
          'Background Web Push Notification architecture',
          'Real-time audio alert system for dismissals',
          'Staff approval workflows with parent integration',
          'Complete audit trail and departure history',
        ],
      },
    ],
  },
  productivity: {
    id: 'productivity',
    title: 'Media & Productivity',
    subtitle: 'Workflow optimization tools and media content for professionals',
    products: [
      {
        id: 'classlock',
        name: 'ClassLock',
        tagline: 'Classroom Security & Device Control',
        description:
          'Enterprise-grade solutions for managing digital distractions and enhancing physical security in educational environments. Comprehensive device and application control during instruction.',
        icon: Lock,
        status: 'active',
        bullets: [
          'Network-wide device management and control',
          'Application whitelisting and blocking',
          'Real-time classroom monitoring dashboard',
          'Detailed usage reporting for administrators',
        ],
      },
      {
        id: 'focoativo',
        name: 'FocoAtivo',
        tagline: 'Workflow Optimization & Productivity Engine',
        description:
          'Advanced productivity platform designed to maximize learning potential through proven time management techniques and intelligent distraction blocking for students and professionals.',
        icon: Focus,
        status: 'active',
        bullets: [
          'Adaptive Pomodoro technique implementation',
          'Intelligent distraction blocking algorithms',
          'Focus pattern analytics and insights',
          'Gamified learning engagement system',
        ],
      },
    ],
  },
  labs: {
    id: 'labs',
    title: 'Rendey Labs',
    subtitle: 'Research & Development — Artificial Intelligence and Data-Driven Ventures',
    products: [
      {
        id: 'digital-guardian',
        name: 'Digital Guardian',
        tagline: 'Software-Defined Device Custody',
        description:
          'A logistical and legal compliance software layer enabling educational institutions to manage smartphone prohibition policies efficiently without expensive hardware investments.',
        icon: Smartphone,
        status: 'development',
        comingSoon: true,
        bullets: [
          'Zero-hardware digital custody solution',
          'Full legal compliance framework integration',
          'Seamless school management system connectivity',
          'Teacher-controlled release authorization',
        ],
        techStack: ['React Native', 'Node.js', 'WebRTC', 'Blockchain'],
      },
      {
        id: 'real-estate-ai',
        name: 'Real Estate AI Scraper',
        tagline: 'Automated Bidding & Predictive Analytics',
        description:
          'Python/Playwright-powered autonomous agent designed to aggregate, analyze, and identify high-EV+ US Foreclosure and Tax Lien investment opportunities for institutional decision-making.',
        icon: TrendingUp,
        status: 'r&d',
        comingSoon: true,
        bullets: [
          'Multi-source foreclosure auction data aggregation',
          'Real-time Tax Lien market analysis',
          'Expected Value (EV+) calculation engine',
          'Automated opportunity alert system',
        ],
        techStack: ['Python', 'Playwright', 'Pandas', 'AI/ML'],
      },
      {
        id: 'zeroclaw',
        name: 'ZeroClaw Analytics',
        tagline: 'Autonomous Sports Data Agent',
        description:
          'Advanced LLM-based predictive modeling platform for real-time market discrepancies and automated paper-trading execution in sports analytics.',
        icon: Bot,
        status: 'r&d',
        comingSoon: true,
        bullets: [
          'Real-time sports data stream processing',
          'Paper-trading execution with performance tracking',
          'Expected Value calculation for market odds',
          'Machine learning predictive model integration',
        ],
        techStack: ['Python', 'TensorFlow', 'Real-time APIs', 'Statistical Models'],
      },
    ],
  },
  media: {
    id: 'media',
    title: 'Media',
    subtitle: 'Global Business & Investment Media Platform',
    products: [
      {
        id: 'dolarizandose-podcast',
        name: 'Dolarizando-se Podcast',
        tagline: 'Global Business & Investment Media',
        description:
          'Premier audio and video content platform focusing on internationalization, wealth management, and technology entrepreneurship. In-depth conversations with global experts and real-world case studies.',
        url: 'https://dolarizandose.com.br',
        icon: Mic,
        status: 'active',
        bullets: [
          'Exclusive interviews with global industry experts',
          'Real-world internationalization case studies',
          'International market analysis and insights',
          'Entrepreneurship mindset and professional development',
        ],
        stats: { label: 'Episodes Published', value: '100+' },
      },
    ],
  },
}

export const getActiveProducts = () => {
  return [
    ...ecosystem.enterprise.products,
    ...ecosystem.productivity.products,
    ...ecosystem.media.products,
  ].filter((p) => p.status === 'active')
}

export const getLabsProducts = () => {
  return ecosystem.labs.products
}

export const getProductById = (id: string): Product | undefined => {
  const all = [
    ...ecosystem.enterprise.products,
    ...ecosystem.productivity.products,
    ...ecosystem.labs.products,
    ...ecosystem.media.products,
  ]
  return all.find((p) => p.id === id)
}
