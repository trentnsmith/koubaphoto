import React from 'react';
import Header from './components/Header';
import MainHero from './components/MainHero';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import WeddingGallery from './components/WeddingGallery';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      
      <Header />
      <MainHero />
      <BrowserRouter>
        <Route exact path="/" component={MainPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/wedding-gallery" component={WeddingGallery}/>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;