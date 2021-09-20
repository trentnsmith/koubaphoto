import React from 'react';
import Header from './components/Header';
import MainHero from './components/MainHero';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      
      <Header />
      <MainHero />
      <BrowserRouter>
        <Route exact path="/" component={MainPage}/>
        <Route path="/aboutme" component={AboutMe}/>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;