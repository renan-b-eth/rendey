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
  edtech: ProductCategory
  labs: ProductCategory
  media: ProductCategory
} = {
  edtech: {
    id: 'edtech',
    title: 'EdTech Suite',
    subtitle: 'Soluções tecnológicas de ponta para transformar a educação brasileira',
    products: [
      {
        id: 'rendey-class',
        name: 'Rendey Class',
        tagline: 'Avaliação offline inteligente para escolas',
        description:
          'Plataforma avançada para aplicação de provas offline em escolas, com geração de QR Code, correção automatizada via OCR, sistema anticola inteligente e exportação de dados analíticos de defasagem.',
        url: 'https://rendey.app',
        icon: GraduationCap,
        status: 'active',
        bullets: [
          'Geração de QR Code para cada prova',
          'Correção automatizada via OCR',
          'Sistema anticola inteligente (tela cheia/mobile)',
          'Exportação de dados analíticos de defasagem',
        ],
        stats: { label: 'Escolas Ativas', value: '50+' },
      },
      {
        id: 'estahack',
        name: 'Estahack',
        tagline: 'Hackathons educacionais oficiais do Estado de SP',
        description:
          'O fornecedor oficial de hackathons educacionais para a rede pública do Estado de São Paulo, focado em resolver problemas reais com a metodologia do Novo Ensino Médio.',
        url: 'https://estahack.com',
        icon: Trophy,
        status: 'active',
        bullets: [
          'Hackathons oficiais da rede pública paulista',
          'Metodologia alinhada ao Novo Ensino Médio',
          'Resolução de problemas reais da comunidade',
          'Premiação e certificação oficial',
        ],
        stats: { label: 'Participantes', value: '10K+' },
      },
      {
        id: 'portaoedu',
        name: 'PortãoEdu',
        tagline: 'Controle de saída de alunos em tempo real',
        description:
          'Sistema de gestão e controle de saída de alunos, com Web Push Notifications em background, alertas sonoros e aprovação de liberação em tempo real para a equipe escolar.',
        icon: DoorOpen,
        status: 'active',
        bullets: [
          'Web Push Notifications em background',
          'Alertas sonoros para liberação',
          'Aprovação em tempo real pela equipe',
          'Histórico completo de saídas',
        ],
      },
      {
        id: 'focoativo',
        name: 'FocoAtivo',
        tagline: 'Ferramenta de produtividade e foco para estudantes',
        description:
          'Ferramenta focada em produtividade e foco, ajudando estudantes a maximizar seu potencial de aprendizado com técnicas comprovadas de gestão do tempo.',
        icon: Focus,
        status: 'active',
        bullets: [
          'Técnica Pomodoro adaptada',
          'Bloqueio de distrações inteligente',
          'Análise de padrões de foco',
          'Gamificação do estudo',
        ],
      },
      {
        id: 'classlock',
        name: 'ClassLock',
        tagline: 'Gestão e segurança tecnológica em sala de aula',
        description:
          'Solução tecnológica completa para gestão e segurança em sala de aula, permitindo controle granular de dispositivos e aplicações durante as aulas.',
        icon: Lock,
        status: 'active',
        bullets: [
          'Controle de dispositivos em rede',
          'Bloqueio de apps não educacionais',
          'Monitoramento em tempo real',
          'Relatórios de uso para pais',
        ],
      },
    ],
  },
  labs: {
    id: 'labs',
    title: 'Labs & Future',
    subtitle: 'Laboratório de inovação — Projetos em desenvolvimento e R&D',
    products: [
      {
        id: 'guardiao-digital',
        name: 'Guardião Digital',
        tagline: 'Locker lógico para celulares em escolas públicas',
        description:
          'Sistema em software para gestão e custódia de celulares em salas de aula de escolas públicas, resolvendo o problema da nova lei de proibição de smartphones sem exigir a compra de hardwares e cofres caros pelo Estado.',
        icon: Smartphone,
        status: 'development',
        comingSoon: true,
        bullets: [
          'Custódia digital sem hardware físico',
          'Conformidade com lei de proibição',
          'Integração com sistema escolar',
          'Liberação controlada pelo professor',
        ],
        techStack: ['React Native', 'Node.js', 'WebRTC', 'Blockchain'],
      },
      {
        id: 'foreclosure-scraper',
        name: 'US Foreclosure Scraper',
        tagline: 'Automação inteligente para oportunidades imobiliárias nos EUA',
        description:
          'Automação inteligente baseada em Python e Playwright para raspar e cruzar dados de leilões de imóveis e Tax Liens nos EUA, identificando oportunidades de alto valor (EV+) para a Rendey LLC.',
        icon: TrendingUp,
        status: 'r&d',
        comingSoon: true,
        bullets: [
          'Raspagem de dados de leilões multi-fonte',
          'Análise de Tax Liens em tempo real',
          'Cálculo de Expected Value (EV+)',
          'Alertas de oportunidades',
        ],
        techStack: ['Python', 'Playwright', 'Pandas', 'AI/ML'],
      },
      {
        id: 'zeroclaw',
        name: 'ZeroClaw Betting AI',
        tagline: 'Agente autônomo de análise esportiva e valor esperado',
        description:
          'Agente autônomo focado em análise de dados esportivos em tempo real (Paper Trading) para cálculo de valor esperado em odds, operando com precisão matemática.',
        icon: Bot,
        status: 'r&d',
        comingSoon: true,
        bullets: [
          'Análise de dados em tempo real',
          'Paper Trading com rastreamento',
          'Cálculo de EV em odds esportivas',
          'Modelos preditivos de ML',
        ],
        techStack: ['Python', 'TensorFlow', 'Real-time APIs', 'Statistical Models'],
      },
    ],
  },
  media: {
    id: 'media',
    title: 'Mídia',
    subtitle: 'Conteúdo educativo e podcast sobre internacionalização',
    products: [
      {
        id: 'dolarizandose-podcast',
        name: 'Podcast Dolarizando-se',
        tagline: 'Internacionalização, mentalidade e investimentos',
        description:
          'Nosso braço de mídia e conteúdo em áudio focado em internacionalização, mentalidade empreendedora e investimentos globais. Conversas profundas com especialistas e cases reais.',
        url: 'https://dolarizandose.com.br',
        icon: Mic,
        status: 'active',
        bullets: [
          'Entrevistas com especialistas globais',
          'Cases reais de internacionalização',
          'Análise de mercados internacionais',
          'Mentalidade e desenvolvimento pessoal',
        ],
        stats: { label: 'Episódios', value: '100+' },
      },
    ],
  },
}

export const getActiveProducts = () => {
  return [
    ...ecosystem.edtech.products,
    ...ecosystem.media.products,
  ].filter((p) => p.status === 'active')
}

export const getLabsProducts = () => {
  return ecosystem.labs.products
}

export const getProductById = (id: string): Product | undefined => {
  const all = [
    ...ecosystem.edtech.products,
    ...ecosystem.labs.products,
    ...ecosystem.media.products,
  ]
  return all.find((p) => p.id === id)
}
