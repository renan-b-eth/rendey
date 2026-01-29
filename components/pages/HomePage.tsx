'use client'

import Link from 'next/link'
import { ArrowRight, BadgeCheck, Sparkles, Shield, Cpu, Globe2, Wallet } from 'lucide-react'
import { Container, Badge, Card, Button, SectionTitle } from '@/components/ui'
import { products, site } from '@/components/site-config'
import { FadeIn } from '@/components/Motion'
import { useI18n } from '@/components/i18n'

export function HomePageContent() {
  const { t } = useI18n()

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <FadeIn initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <Badge>{t('home.badge', { founded: site.founded, state: site.stateOfRegistration })}</Badge>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                {t('home.h1a')}
                <span className="block bg-gradient-to-r from-fuchsia-200 via-white to-cyan-200 bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
                  {t('home.h1b')}
                </span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                {t('home.heroP')}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/products" className="neon-primary">
                  {t('home.cta1')} <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="outline" className="neon-outline">
                  {t('home.cta2')} <Sparkles size={16} />
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-white/60">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-white/80">{t('home.stat1t')}</p>
                  <p className="mt-1 font-semibold text-white">{t('home.stat1v')}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-white/80">{t('home.stat2t')}</p>
                  <p className="mt-1 font-semibold text-white">{t('home.stat2v')}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-white/80">{t('home.stat3t')}</p>
                  <p className="mt-1 font-semibold text-white">{t('home.stat3v')}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(closest-side,rgba(34,211,238,0.22),transparent_70%),radial-gradient(closest-side,rgba(217,70,239,0.22),transparent_68%)] blur-2xl" />
              <Card className="relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <BadgeCheck className="text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t('home.trustTitle')}</p>
                    <p className="mt-1 text-sm text-white/65">{t('home.trustP')}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                        href={site.nmSosSearchUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('home.verify')}
                      </a>
                      <Link className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10" href="/terms-of-service">
                        {t('legal.terms.title')}
                      </Link>
                      <Link className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10" href="/privacy-policy">
                        {t('legal.privacy.title')}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('home.businessAddress')}</p>
                    <p className="mt-2 text-sm text-white/80">
                      {site.businessAddress.line1}
                      <br />
                      {site.businessAddress.city}, {site.businessAddress.region} {site.businessAddress.postal}
                      <br />
                      {site.businessAddress.country}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('home.support')}</p>
                    <p className="mt-2 text-sm text-white/80">
                      {site.supportPhoneDisplay}
                      <br />
                      {site.supportEmail}
                    </p>
                    <p className="mt-2 text-xs text-white/55">{t('home.responseTime')}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* PRODUCTS */}
      <section className="border-t border-white/10 py-16">
        <Container>
          <SectionTitle
            eyebrow={t('home.productsEyebrow')}
            title={t('home.productsTitle')}
            subtitle={t('home.productsSubtitle')}
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
                  href="/products"
                >
                  {t('home.payDetails')}
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
                <Link className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10" href="/products">
                  {t('home.payDetails')}
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow={t('home.capEyebrow')}
            title={t('home.capTitle')}
            subtitle={t('home.capSubtitle')}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="neon-card">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><Cpu className="text-cyan-200" /></div>
                <p className="text-sm font-semibold text-white">{t('home.cap1t')}</p>
              </div>
              <p className="mt-3 text-sm text-white/65">{t('home.cap1p')}</p>
            </Card>
            <Card className="neon-card">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><Shield className="text-fuchsia-200" /></div>
                <p className="text-sm font-semibold text-white">{t('home.cap2t')}</p>
              </div>
              <p className="mt-3 text-sm text-white/65">{t('home.cap2p')}</p>
            </Card>
            <Card className="neon-card">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><Globe2 className="text-cyan-200" /></div>
                <p className="text-sm font-semibold text-white">{t('home.cap3t')}</p>
              </div>
              <p className="mt-3 text-sm text-white/65">{t('home.cap3p')}</p>
            </Card>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 neon-panel">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-lg font-semibold text-white">{t('home.partnerTitle')}</p>
                <p className="mt-1 text-sm text-white/65">{t('home.partnerP')}</p>
              </div>
              <div className="flex gap-3">
                <Button href="/contact" className="neon-primary">{t('home.partnerCta')} <ArrowRight size={16} /></Button>
                <Button href="/company" variant="outline" className="neon-outline">{t('nav.company')}</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
