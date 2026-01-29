import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundFX } from '@/components/BackgroundFX'
import { site } from '@/components/site-config'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: site.name,
    template: `%s • ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.website,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.website,
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.businessAddress.line1,
      addressLocality: site.businessAddress.city,
      addressRegion: site.businessAddress.region,
      postalCode: site.businessAddress.postal,
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.supportPhoneE164,
      contactType: 'customer support',
      email: site.supportEmail,
    },
  }

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Providers>
          <div className="relative min-h-screen overflow-hidden">
            <BackgroundFX />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
