import React from 'react';
import Game from './components/Game';
import Footer from './components/universal/Footer';
import Header from './components/universal/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
