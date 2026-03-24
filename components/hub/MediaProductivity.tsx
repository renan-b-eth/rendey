'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mic, Focus, Lock } from 'lucide-react'
import Link from 'next/link'
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
  visible: { opacity: 1, y: 0 },
}

export function MediaProductivity() {
  const productivityProducts = ecosystem.productivity.products
  const mediaProducts = ecosystem.media.products
  const allProducts = [...productivityProducts, ...mediaProducts]

  return (
    <section id="productivity" className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Media & Productivity"
          title="Workflow Optimization & Content"
          subtitle="Professional tools and media content designed for enhanced productivity and knowledge sharing"
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {allProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:from-white/[0.08] hover:to-white/[0.04]">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:border-violet-500/30 group-hover:bg-violet-500/10">
                  <product.icon size={28} className="text-white/70 transition-colors group-hover:text-violet-400" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-violet-300">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet-400">{product.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{product.description}</p>

                {/* Stats */}
                {product.stats && (
                  <div className="mt-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">{product.stats.value}</span>
                      <span className="text-sm text-white/50">{product.stats.label}</span>
                    </div>
                  </div>
                )}

                {/* Bullets */}
                <ul className="mt-4 space-y-2">
                  {product.bullets.slice(0, 3).map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400/60" />
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
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300"
                  >
                    {product.id.includes('podcast') ? 'Listen Now' : 'Learn More'}
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
