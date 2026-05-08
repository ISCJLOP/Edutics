
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import Results from './components/Results';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Benefits />
        <Courses />
        <Results />
        <Testimonials />
        <Coverage />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;