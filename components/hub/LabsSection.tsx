'use client'

import { motion } from 'framer-motion'
import { Clock, FlaskConical, ArrowRight, Sparkles } from 'lucide-react'
import { Container, Card, SectionTitle } from '@/components/ui'
import { ecosystem } from '@/components/data/ecosystem'

const statusConfig = {
  beta: {
    label: 'Beta Fechado',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    pulse: 'animate-pulse',
  },
  development: {
    label: 'Em Desenvolvimento',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    pulse: '',
  },
  'r&d': {
    label: 'R&D Labs',
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-400/10',
    border: 'border-fuchsia-400/30',
    pulse: '',
  },
}

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function LabsSection() {
  return (
    <section id="labs" className="relative overflow-hidden py-24">
      {/* Darker background for Labs */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated accent lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <Container className="relative">
        <SectionTitle
          eyebrow="Labs & Future"
          title={ecosystem.labs.title}
          subtitle={ecosystem.labs.subtitle}
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {ecosystem.labs.products.map((product) => {
            const status = statusConfig[product.status]

            return (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="group relative h-full overflow-hidden border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]">
                  {/* Ambient glow on hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-cyan-500/0 to-amber-500/0 opacity-0 blur-xl transition-all duration-700 group-hover:from-fuchsia-500/10 group-hover:via-cyan-500/5 group-hover:to-amber-500/10 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Header with icon and status */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:border-white/20">
                        <product.icon size={28} className="text-white/70 transition-colors group-hover:text-fuchsia-400" />
                      </div>
                      <div
                        className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${status.bg} ${status.border} ${status.color} ${status.pulse}`}
                      >
                        <FlaskConical size={12} />
                        {status.label}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-fuchsia-300">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-white/50">{product.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/40">{product.description}</p>

                    {/* Tech Stack */}
                    {product.techStack && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-xs text-white/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Feature bullets */}
                    <ul className="mt-4 space-y-2">
                      {product.bullets.slice(0, 2).map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-white/50">
                          <Sparkles size={12} className="mt-1 flex-shrink-0 text-fuchsia-400/60" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Coming Soon indicator */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-white/40">
                      <Clock size={14} />
                      <span>Em breve</span>
                      <ArrowRight size={14} className="ml-auto opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Beta Access CTA */}
        <motion.div
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-white/5 to-cyan-500/10 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <FlaskConical size={24} className="text-fuchsia-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">Quer ser um early adopter?</h3>
          <p className="mt-2 text-sm text-white/60">
            Entre em contato para participar dos programas beta fechados e ter acesso antecipado às nossas inovações.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Quero Participar do Beta
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
