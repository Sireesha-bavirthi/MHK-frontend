import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Industries from '@/components/Industries';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <About />
      <Contact />
    </>
  );
};

export default Home;