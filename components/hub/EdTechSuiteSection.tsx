'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, ChevronRight } from 'lucide-react'
import { Container, Card, SectionTitle } from '@/components/ui'
import { ecosystem } from '@/components/data/ecosystem'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function EdTechSuiteSection() {
  const featuredProducts = ecosystem.edtech.products.slice(0, 3)
  const secondaryProducts = ecosystem.edtech.products.slice(3)

  return (
    <section id="edtech" className="relative py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <Container className="relative">
        <SectionTitle
          eyebrow="EdTech Suite"
          title={ecosystem.edtech.title}
          subtitle={ecosystem.edtech.subtitle}
        />

        {/* Featured Products - 3 columns */}
        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group relative h-full overflow-hidden border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]">
                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-fuchsia-500/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-500/10 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/10 group-hover:opacity-100" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-300">
                      <product.icon size={24} />
                    </div>
                    {product.stats && (
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">{product.stats.value}</p>
                        <p className="text-xs text-white/50">{product.stats.label}</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/60">{product.tagline}</p>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{product.description}</p>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2">
                    {product.bullets.slice(0, 3).map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-3">
                    {product.url ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                      >
                        Acessar Plataforma
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                      >
                        Saiba Mais
                        <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Products - Compact row */}
        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {secondaryProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group flex items-center gap-4 border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-violet-400">
                  <product.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white group-hover:text-violet-300 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-white/50 truncate">{product.tagline}</p>
                </div>
                <Link
                  href="/contact"
                  className="flex-shrink-0 text-white/40 transition-colors group-hover:text-violet-400"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            Quero implementar na minha escola
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
