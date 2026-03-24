'use client'

import { HeroSection } from './HeroSection'
import { EdTechSuiteSection } from './EdTechSuiteSection'
import { LabsSection } from './LabsSection'
import { MediaSection } from './MediaSection'

export function HomePageHub() {
  return (
    <>
      <HeroSection />
      <EdTechSuiteSection />
      <LabsSection />
      <MediaSection />
    </>
  )
}
