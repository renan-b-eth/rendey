'use client'

import { Container, Card } from '@/components/ui'
import { useI18n } from '@/components/i18n'

type Kind = 'privacy' | 'terms' | 'refund'

export function LegalPageContent({ kind }: { kind: Kind }) {
  const { t, lang } = useI18n()

  const title = t(`legal.${kind}.title`)
  const intro = t(`legal.${kind}.intro`)
  const updated = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date())

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-white/55">{t('legal.updated')}: {updated}</p>

        <Card className="neon-card mt-8">
          <p className="text-sm text-white/75 leading-relaxed">{intro}</p>

          <div className="mt-6 grid gap-4 text-sm text-white/70">
            {lang === 'en' ? (
              <>
                <div>
                  <p className="font-semibold text-white">1. Data we collect</p>
                  <p className="mt-1">Contact information you submit (name, email, message) and basic analytics (device/browser) to keep the website secure and improve performance.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">2. How we use data</p>
                  <p className="mt-1">To respond to inquiries, provide support, prevent abuse, and operate our products. We do not sell personal data.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">3. Policies & limitations</p>
                  <p className="mt-1">Some products may include additional terms at checkout. Where applicable, refunds and access rules are defined per product.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">4. Contact</p>
                  <p className="mt-1">If you have questions about these policies, contact us via the Contact page.</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="font-semibold text-white">1. Dados coletados</p>
                  <p className="mt-1">Informações de contato enviadas (nome, email, mensagem) e analytics básicos (dispositivo/navegador) para segurança e melhoria do site.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">2. Uso dos dados</p>
                  <p className="mt-1">Para responder solicitações, oferecer suporte, prevenir abuso e operar nossos produtos. Não vendemos dados pessoais.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">3. Políticas & limitações</p>
                  <p className="mt-1">Alguns produtos podem incluir termos adicionais no checkout. Quando aplicável, regras de reembolso e acesso são definidas por produto.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">4. Contato</p>
                  <p className="mt-1">Se tiver dúvidas sobre estas políticas, fale conosco pela página de contato.</p>
                </div>
              </>
            )}
          </div>
        </Card>
      </Container>
    </section>
  )
}
