import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import WhyChoose from './components/sections/WhyChoose'
import HowWeWork from './components/sections/HowWeWork'
import CoreValuesAndServices from './components/sections/CoreValuesAndServices'
import Team from './components/sections/Team'
import GlobalReach from './components/sections/GlobalReach'
import Contact from './components/sections/Contact'
import FAQ from './components/sections/FAQ'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChoose />
      <HowWeWork />
      <CoreValuesAndServices />
      <Team />
      <GlobalReach />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
