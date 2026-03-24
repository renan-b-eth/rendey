'use client'

import { HeroSection } from './HeroSection'
import { EnterpriseSolutions } from './EnterpriseSolutions'
import { MediaProductivity } from './MediaProductivity'
import { LabsSection } from './LabsSection'

export function HomePageHub() {
  return (
    <main>
      <HeroSection />
      <EnterpriseSolutions />
      <MediaProductivity />
      <LabsSection />
    </main>
  )
}
