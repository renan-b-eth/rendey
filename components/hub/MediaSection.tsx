'use client'

import { motion } from 'framer-motion'
import { Mic, Play, Headphones, ArrowUpRight, Clock, Users, Star } from 'lucide-react'
import { Container, Card, SectionTitle } from '@/components/ui'
import { ecosystem } from '@/components/data/ecosystem'

const episodes = [
  {
    number: 'EP. 42',
    title: 'Como Montar uma Estrutura Internacional',
    duration: '45 min',
    guests: 2,
  },
  {
    number: 'EP. 41',
    title: 'Mentalidade de Crescimento em Tempos de Crise',
    duration: '38 min',
    guests: 1,
  },
  {
    number: 'EP. 40',
    title: 'Investimentos nos EUA: O Guia Definitivo',
    duration: '52 min',
    guests: 3,
  },
]

export function MediaSection() {
  const podcast = ecosystem.media.products[0]

  return (
    <section id="media" className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Mídia"
          title={ecosystem.media.title}
          subtitle={ecosystem.media.subtitle}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Main Podcast Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="group relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8">
              {/* Glow effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-400">
                    <Mic size={32} />
                  </div>
                  {podcast.stats && (
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center">
                      <p className="text-xl font-bold text-white">{podcast.stats.value}</p>
                      <p className="text-xs text-white/50">{podcast.stats.label}</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-white">{podcast.name}</h3>
                <p className="mt-2 text-lg text-white/60">{podcast.tagline}</p>
                <p className="mt-4 leading-relaxed text-white/50">{podcast.description}</p>

                {/* Bullets */}
                <ul className="mt-6 space-y-3">
                  {podcast.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-white/60">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10">
                        <Headphones size={12} className="text-orange-400" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {podcast.url && (
                    <a
                      href={podcast.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-medium text-white transition-all hover:from-orange-400 hover:to-amber-400"
                    >
                      <Play size={16} fill="currentColor" />
                      Ouvir Agora
                    </a>
                  )}
                  <a
                    href={podcast.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                  >
                    Visitar Site
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recent Episodes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Episódios Recentes
            </h4>

            {episodes.map((episode, index) => (
              <motion.div
                key={episode.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="group flex items-center gap-4 border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/40 transition-colors group-hover:bg-orange-500/10 group-hover:text-orange-400">
                    <Play size={20} className="ml-0.5" fill="currentColor" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-orange-400">{episode.number}</span>
                      <span className="text-xs text-white/30">•</span>
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <Clock size={10} />
                        {episode.duration}
                      </span>
                    </div>
                    <h5 className="mt-1 truncate font-medium text-white transition-colors group-hover:text-orange-300">
                      {episode.title}
                    </h5>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-1 text-xs text-white/30">
                    <Users size={12} />
                    {episode.guests}
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Platforms */}
            <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs text-white/40">Disponível em</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Spotify', 'Apple Podcasts', 'YouTube', 'Google Podcasts'].map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-white">4.9/5</p>
                <p className="text-xs text-white/40">Baseado em 500+ avaliações</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
