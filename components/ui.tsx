import Link from 'next/link'
import { cn } from './utils'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  )
}

export function Button(
  props: React.ComponentProps<typeof Link> & { variant?: 'primary' | 'ghost' | 'outline' }
) {
  const { variant = 'primary', className, ...rest } = props
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition will-change-transform active:translate-y-[1px]'
  const styles: Record<string, string> = {
    primary:
      'bg-white text-black hover:bg-white/90 shadow-glow',
    outline:
      'border border-white/15 bg-white/5 text-white hover:bg-white/10',
    ghost:
      'text-white/80 hover:text-white hover:bg-white/5',
  }
  return <Link className={cn(base, styles[variant], className)} {...rest} />
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.45)]',
        className
      )}
    >
      {children}
    </div>
  )
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="h-1 w-1 rounded-full bg-cyan-300/80" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{eyebrow}</p>
          <span className="h-1 w-1 rounded-full bg-indigo-400/80" />
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-white/65">{subtitle}</p> : null}
    </div>
  )
}
