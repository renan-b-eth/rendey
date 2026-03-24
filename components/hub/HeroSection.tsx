'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Building2, Zap, Globe } from 'lucide-react'
import { Container, Badge, Button } from '@/components/ui'
import { site } from '@/components/site-config'
import { ecosystem } from '@/components/data/ecosystem'

const stats = [
  { label: 'Projetos Ativos', value: '6', icon: Zap },
  { label: 'Escolas Atendidas', value: '100+', icon: Building2 },
  { label: 'Alunos Impactados', value: '50K+', icon: Globe },
]

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const activeProducts = ecosystem.edtech.products.filter((p) => p.status === 'active').length +
    ecosystem.media.products.filter((p) => p.status === 'active').length

  const labsProducts = ecosystem.labs.products.length

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-[120px]"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 100 }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px]"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 100 }}
          style={{ bottom: '20%', right: '15%' }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 border-violet-500/30 bg-violet-500/10 text-violet-300">
              <Building2 size={14} className="mr-2" />
              {site.name} • Fundada em {site.founded}
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Construindo o{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Futuro
            </span>{' '}
            da{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              EdTech
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/60 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hub oficial do ecossistema Rendey LLC. Soluções tecnológicas de ponta
            para transformar a educação brasileira e impulsionar inovação global.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              href="#edtech"
              className="group bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
            >
              Explorar Produtos
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/20 hover:bg-white/5"
            >
              <Sparkles size={18} className="mr-2" />
              Falar com o Time
            </Button>
          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <stat.icon size={20} className="text-violet-400" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Product Count Pills */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="#edtech"
              className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 transition-colors hover:bg-emerald-500/20"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {activeProducts} Produtos EdTech Ativos
            </Link>
            <Link
              href="#labs"
              className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-300 transition-colors hover:bg-amber-500/20"
            >
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              {labsProducts} Projetos em R&D
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-white/40">Scroll para explorar</span>
              <div className="h-8 w-5 rounded-full border-2 border-white/20 p-1">
                <motion.div
                  className="h-2 w-full rounded-full bg-white/40"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
