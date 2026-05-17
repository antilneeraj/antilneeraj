import { useAppStore } from '@/shared/stores/app.store'
import { LoadingScreen } from './components/LoadingScreen'
import { HeroSection } from './components/HeroSection'
import { StatusBanner } from './components/StatusBanner'
import { AboutSection } from './components/AboutSection'
import { SocialChannels } from './components/SocialChannels'
import { SiteFooter } from './components/SiteFooter'

export function LandingPage() {
  const isLoading = useAppStore((s) => s.isLoading)

  return (
    <>
      <LoadingScreen />
      <main
        className={`relative transition-opacity duration-600 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        aria-label="Neeraj Antil — Portfolio"
      >
        <HeroSection />
        <StatusBanner />

        <div className="relative w-full">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />

          <AboutSection />
          <SocialChannels />
        </div>

        <SiteFooter />
      </main>
    </>
  )
}
