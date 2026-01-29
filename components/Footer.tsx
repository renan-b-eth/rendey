'use client'

import Link from 'next/link'
import { site } from './site-config'
import { Container } from './ui'
import { useI18n } from './i18n'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-white/65">{site.tagline}</p>
            <p className="mt-4 text-xs text-white/55">
              {t('topbar.status')} • {t('topbar.founded')} {site.founded} • {site.stateOfRegistration}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{t('footer.companyInfo')}</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link className="text-white/70 hover:text-white" href="/company">{t('nav.company')}</Link></li>
                <li><Link className="text-white/70 hover:text-white" href="/products">{t('nav.products')}</Link></li>
                <li><Link className="text-white/70 hover:text-white" href="/contact">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{t('footer.legal')}</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link className="text-white/70 hover:text-white" href="/privacy-policy">{t('legal.privacy.title')}</Link></li>
                <li><Link className="text-white/70 hover:text-white" href="/terms-of-service">{t('legal.terms.title')}</Link></li>
                <li><Link className="text-white/70 hover:text-white" href="/refund-policy">{t('legal.refund.title')}</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{t('home.support')}</p>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <p>
                <span className="text-white/50">{t('contact.email')}:</span>{' '}
                <a className="hover:text-white" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </p>
              <p>
                <span className="text-white/50">{t('contact.phone')}:</span>{' '}
                <a className="hover:text-white" href={`tel:${site.supportPhoneE164}`}>{site.supportPhoneDisplay}</a>
              </p>
              <p className="leading-relaxed">
                <span className="text-white/50">{t('contact.address')}:</span><br />
                {site.businessAddress.line1}<br />
                {site.businessAddress.city}, {site.businessAddress.region} {site.businessAddress.postal}<br />
                {site.businessAddress.country}
              </p>
              <p className="pt-2 text-xs text-white/55">
                {t('footer.verify')}: {' '}
              <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href={site.nmSosSearchUrl} target="_blank" rel="noreferrer">
                  New Mexico Secretary of State
              </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. {t('footer.rights')}</p>
          <p className="text-center sm:text-right">Built for trust • Designed for scale • Deployed on Vercel</p>
        </div>
      </Container>
    </footer>
  )
}
