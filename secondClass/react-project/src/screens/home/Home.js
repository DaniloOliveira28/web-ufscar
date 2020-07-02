import React from 'react';
import Header from '../../common/components/Header';
import Signin from './containerSignin';
import { Airplane } from './Airplane';
import { Footer } from './Footer';

function Home() {
  return (
    <main className="body">
      <Header />
      <Signin />
      <Airplane />
      <Footer />
    </main>
  )
}

export default Home;
