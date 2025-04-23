import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import CleanersSection from "../components/CleanersSection"
import ServicesSection from "../components/ServicesSection"
import WhyUsSection from "../components/WhyUsSection"
import CtaSection from "../components/CtaSection"
import Footer from "../components/Footer"

function landingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CleanersSection />
        <ServicesSection />
        <WhyUsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  )
}

export default landingPage
