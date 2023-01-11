import React from 'react'
import './styles/App.css';

// Components
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
//import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
