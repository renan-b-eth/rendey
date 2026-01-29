'use client'

import { Building2, ShieldCheck, MapPin } from 'lucide-react'
import { Container, Card, SectionTitle, Button } from '@/components/ui'
import { site } from '@/components/site-config'
import { useI18n } from '@/components/i18n'

export function CompanyPageContent() {
  const { t } = useI18n()

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow={t('company.eyebrow')}
          title={t('company.title')}
          subtitle={t('company.subtitle')}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="neon-card lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <ShieldCheck className="text-cyan-200" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t('company.verifyTitle')}</p>
                <p className="mt-2 text-sm text-white/70">{t('company.verifyP')}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
                    href={site.nmSosSearchUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('company.verifyCta')}
                  </a>
                  <Button href="/contact" variant="outline" className="neon-outline">
                    {t('nav.contact')}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('company.addrTitle')}</p>
                <p className="mt-2 text-sm text-white/80">
                  {site.name}
                  <br />
                  {site.businessAddress.line1}
                  <br />
                  {site.businessAddress.city}, {site.businessAddress.region} {site.businessAddress.postal}
                  <br />
                  {site.businessAddress.country}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('company.opsTitle')}</p>
                <p className="mt-2 text-sm text-white/70">{t('company.opsP')}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Registered agent (NM)</p>
              <p className="mt-2 text-sm text-white/70">
                {site.registeredAgentAddress.line1}<br />
                {site.registeredAgentAddress.city}, {site.registeredAgentAddress.region} {site.registeredAgentAddress.postal}<br />
                {site.registeredAgentAddress.country}
              </p>
              <p className="mt-2 text-xs text-white/55">
                Public record address used for state correspondence.
              </p>
            </div>
          </Card>

          <Card className="neon-card">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><Building2 className="text-fuchsia-200" /></div>
              <p className="text-sm font-semibold text-white">{site.name}</p>
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                <span className="text-white/55">{t('company.metaState')}:</span> {site.stateOfRegistration}
              </p>
              <p>
                <span className="text-white/55">{t('company.metaFounded')}:</span> {site.founded}
              </p>
              <p>
                <span className="text-white/55">{t('company.metaSupport')}:</span> {site.supportPhoneDisplay}
              </p>
              <p>
                <span className="text-white/55">{t('company.metaEmail')}:</span> {site.supportEmail}
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <MapPin size={14} className="text-cyan-200" />
                <span>{t('company.metaBoise')}</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
