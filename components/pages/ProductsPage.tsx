'use client'

import Link from 'next/link'
import { ArrowRight, Globe2, Wallet } from 'lucide-react'
import { Container, Card, SectionTitle } from '@/components/ui'
import { products } from '@/components/site-config'
import { useI18n } from '@/components/i18n'

export function ProductsPageContent() {
  const { t } = useI18n()

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow={t('products.eyebrow')}
          title={t('products.title')}
          subtitle={t('products.subtitle')}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="neon-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{t('products.dolTitle')}</p>
                <p className="mt-2 text-sm text-white/70">{t('products.dolP')}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <Globe2 className="text-fuchsia-200" />
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {(t('products.dolBullets') as any[]).map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
                href={products.dolarizandose.url}
                target="_blank"
                rel="noreferrer"
              >
                {t('products.ctaSite')} <ArrowRight size={16} />
              </a>
              <Link
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
                href="/contact"
              >
                {t('products.ctaContact')}
              </Link>
            </div>
          </Card>

          <Card className="neon-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-white">{t('products.payTitle')}</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                    {t('products.payStatus')}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{t('products.payP')}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <Wallet className="text-emerald-200" />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('home.payImportant')}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{t('products.payDisclaimer')}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90" href="/contact">
                {t('home.payCta')} <ArrowRight size={16} />
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
