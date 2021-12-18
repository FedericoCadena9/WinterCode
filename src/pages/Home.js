import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Caracteristicas from '../partials/Caracteristicas';
import QuienesSomos from '../partials/QuienesSomos';
import Correo from '../partials/Correo';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">

        <HeroHome />
        <Caracteristicas/>
        <QuienesSomos />
        <Correo />

      </main>
      
      <Footer />

    </div>
  );
}

export default Home;