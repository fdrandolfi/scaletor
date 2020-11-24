import React from 'react';

import './index.scss';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Unsupported from '../../components/Unsupported';

const Home = () => (
  <main className="home">
    <Header />
    <Layout />
    <Footer />
    <Unsupported />
  </main>
);

export default Home;
