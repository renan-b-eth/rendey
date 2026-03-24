'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Building2 } from 'lucide-react'
import Link from 'next/link'
import { Container, Card, SectionTitle } from '@/components/ui'
import { ecosystem } from '@/components/data/ecosystem'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function EnterpriseSolutions() {
  const products = ecosystem.enterprise.products

  return (
    <section id="enterprise" className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Enterprise Solutions"
          title={ecosystem.enterprise.title}
          subtitle={ecosystem.enterprise.subtitle}
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:from-white/[0.08] hover:to-white/[0.04]">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                  <product.icon size={28} className="text-white/70 transition-colors group-hover:text-indigo-400" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-400">{product.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{product.description}</p>

                {/* Stats */}
                {product.stats && (
                  <div className="mt-4 flex items-center gap-2">
                    <Building2 size={14} className="text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-400">{product.stats.value}</span>
                    <span className="text-sm text-white/40">{product.stats.label}</span>
                  </div>
                )}

                {/* Bullets */}
                <ul className="mt-4 space-y-2">
                  {product.bullets.slice(0, 3).map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {product.url && (
                  <Link
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300"
                  >
                    Visit Platform
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
