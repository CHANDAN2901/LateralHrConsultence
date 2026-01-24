
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import EoRServices from './pages/EoRServices';
import GlobalHiring from './pages/GlobalHiring';
import HRStrategyPolicy from './pages/HRStrategyPolicy';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import WhyChoose from './components/sections/WhyChoose';
import HowWeWork from './components/sections/HowWeWork';
import CoreValuesAndServices from './components/sections/CoreValuesAndServices';
import Team from './components/sections/Team';
import GlobalReach from './components/sections/GlobalReach';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}


function MainLanding() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <HowWeWork />
      <CoreValuesAndServices />
      <Team />
      <GlobalReach />
      <Contact />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/services/eor" element={<EoRServices />} />
        <Route path="/services/global-hiring" element={<GlobalHiring />} />
        <Route path="/services/hr-strategy-policy" element={<HRStrategyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
