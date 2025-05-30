
import WhyBetter from './components/WhyBetter'
import StartWeek from './components/StartWeek'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import EndHiring from './components/EndHiring'
import Step6 from './components/Step6'
import Scrollbar from './components/Scrollbar'
import Success from './components/Success'
import WeInterviews from './components/WeInterviews'
import WhyChoose from './components/WhyChoose'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 scroll to top on mount
  }, []);
  return (
    <div className=' flex flex-col justify-center min-h-screen overflow-hidden'>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <WhyChoose/>
      <EndHiring />
      <WeInterviews />
      <WhyBetter />
      <Step6 />
      <Scrollbar />
      <Success />
      <Faq />
      <StartWeek />
      <Footer />
    </div>
  )
}
