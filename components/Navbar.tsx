'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from './site-config'
import { cn } from './utils'
import { Container, Button } from './ui'
import { useI18n } from './i18n'

const nav = [
  { href: '/products', key: 'nav.products' },
  { href: '/company', key: 'nav.company' },
  { href: '/contact', key: 'nav.contact' },
  { href: '/privacy-policy', key: 'nav.privacy' },
] as const

export function Navbar() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const today = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date())
    } catch {
      return new Date().toDateString()
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* top bar */}
      <div className="border-b border-white/10 bg-black/60 backdrop-blur">
        <Container>
          <div className="flex h-10 items-center justify-between text-xs text-white/65">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span>{site.name} • {t('topbar.status')} • {t('topbar.founded')} {site.founded}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">{today}</span>
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                className="hidden rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-white/75 hover:bg-white/10 sm:inline"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'PT' : 'EN'}
              </button>
              <a className="hover:text-white" href={`tel:${site.supportPhoneE164}`}>
                {site.supportPhoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className={cn('border-b border-white/10', scrolled ? 'bg-black/70 backdrop-blur' : 'bg-transparent')}>
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image src="/logo.png" alt="Rendey logo" fill className="object-contain p-1" priority />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">{site.name}</div>
                <div className="text-[11px] text-white/60">AI • SaaS • Global Products</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {nav.map((i) => (
                <Link key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                  {t(i.key)}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
              >
                {lang === 'en' ? 'PT' : 'EN'}
              </button>
              <Button href="/contact" className="ml-2" variant="outline">
                {t('nav.talk')}
              </Button>
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </div>

      {/* mobile menu */}
      {open ? (
        <div className="md:hidden">
          <div className="border-b border-white/10 bg-black/90 backdrop-blur">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="py-4"
              >
                <div className="grid gap-2">
                  {nav.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                    >
                      {t(i.key)}
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setLang(lang === 'en' ? 'pt' : 'en')
                    }}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80 hover:bg-white/10"
                  >
                    {lang === 'en' ? 'Switch to Portuguese (PT)' : 'Mudar para Inglês (EN)'}
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                  >
                    {t('nav.talk')}
                  </Link>
                </div>
              </motion.div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  )
}
