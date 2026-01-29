'use client'

import { Container, Card, SectionTitle } from '@/components/ui'
import { site } from '@/components/site-config'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useI18n } from '@/components/i18n'

export function ContactPageContent() {
  const { t } = useI18n()

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Card className="neon-card lg:col-span-2">
            <p className="text-sm font-semibold text-white">{t('contact.company')}</p>
            <div className="mt-4 space-y-4 text-sm text-white/70">
              <div className="flex gap-3">
                <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2"><Mail size={16} className="text-cyan-200" /></div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-[0.18em]">{t('contact.email')}</p>
                  <a className="hover:text-white" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2"><Phone size={16} className="text-fuchsia-200" /></div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-[0.18em]">{t('contact.phone')}</p>
                  <a className="hover:text-white" href={`tel:${site.supportPhoneE164}`}>{site.supportPhoneDisplay}</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2"><MapPin size={16} className="text-cyan-200" /></div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-[0.18em]">{t('contact.address')}</p>
                  <p className="leading-relaxed">
                    {site.businessAddress.line1}<br />
                    {site.businessAddress.city}, {site.businessAddress.region} {site.businessAddress.postal}<br />
                    {site.businessAddress.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('contact.verification')}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                {t('contact.verificationP')}{' '}
                <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href={site.nmSosSearchUrl} target="_blank" rel="noreferrer">
                  New Mexico Secretary of State
                </a>.
              </p>
            </div>
          </Card>

          <Card className="neon-card lg:col-span-3">
            <p className="text-sm font-semibold text-white">{t('contact.sendTitle')}</p>
            <p className="mt-2 text-sm text-white/65">{t('contact.sendP')}</p>

            <form
              className="mt-6 grid gap-4"
              action="https://formspree.io/f/yourFormId"
              method="POST"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('contact.name')}</span>
                  <input
                    name="name"
                    required
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-300/40"
                    placeholder={t('contact.name')}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('contact.emailLabel')}</span>
                  <input
                    type="email"
                    name="_replyto"
                    required
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-300/40"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('contact.subject')}</span>
                <input
                  name="subject"
                  className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-300/40"
                  placeholder="How can we help?"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{t('contact.message')}</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-300/40"
                  placeholder="Tell us about your project, timeline and goals."
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90"
              >
                {t('contact.send')}
              </button>

              <p className="text-xs text-white/55">
                {t('contact.consent')}{' '}
                <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href="/privacy-policy">{t('legal.privacy.title')}</a>.
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}
