import React from 'react'
import Hero from './components/hero/Hero';
import PopularProducts from './components/popularProducts/PopularProducts';
import SuperQuality from './components/superQuality/SuperQuality';
import Services from './components/services/Services';
import SpecialOffer from './components/specialOffer/SpecialOffer';
import Testimonials from './components/testimonials/Testimonials';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
