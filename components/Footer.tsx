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
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-white/65">{site.tagline}</p>
            <p className="mt-4 text-xs text-white/55">
              {t('topbar.status')} • {t('topbar.founded')} {site.founded} • {site.stateOfRegistration}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Ecosystem</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#enterprise" className="text-white/70 hover:text-white">Enterprise Solutions</a></li>
              <li><a href="#productivity" className="text-white/70 hover:text-white">Media & Productivity</a></li>
              <li><a href="#labs" className="text-white/70 hover:text-white">R&D Labs</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-white/70 hover:text-white" href="/company">About Us</Link></li>
              <li><Link className="text-white/70 hover:text-white" href="/products">Products</Link></li>
              <li><Link className="text-white/70 hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-white/70 hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="text-white/70 hover:text-white" href="/terms-of-service">Terms of Service</Link></li>
              <li><Link className="text-white/70 hover:text-white" href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-sm text-white/70">
              <p className="font-medium text-white/90">{site.name}</p>
              <p className="mt-1 text-xs text-white/50">
                {site.businessAddress.line1}<br />
                {site.businessAddress.city}, {site.businessAddress.region} {site.businessAddress.postal}<br />
                {site.businessAddress.country}
              </p>
              <p className="mt-3 text-xs text-white/50">
                {t('footer.verify')}:{' '}
                <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href={site.nmSosSearchUrl} target="_blank" rel="noreferrer">
                  New Mexico Secretary of State
                </a>
              </p>
            </div>
            <div className="text-right md:text-right">
              <p className="text-xs text-white/50">Enterprise Support</p>
              <p className="mt-1 text-sm text-white/70">
                <a className="hover:text-white" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </p>
              <p className="text-sm text-white/70">
                <a className="hover:text-white" href={`tel:${site.supportPhoneE164}`}>{site.supportPhoneDisplay}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">Official Hub of Rendey LLC • Built with Next.js • Deployed on Vercel</p>
        </div>
      </Container>
    </footer>
  )
}
