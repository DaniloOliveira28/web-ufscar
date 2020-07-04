import React from 'react';
import Header from '../../components/home/Header/index';
import Signin from '../../components/home/signIn';
import Airplane from '../../components/home/airPlane';
import Footer from '../../components/home/footer';

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
