import React from 'react';
import './App.css';
import Header from './components/Header';
import Social from './components/Social';
import Text from './components/Text';

import Team from './components/Team';

function App() {
  return (
    <div className='container'>
      <Header />
      <Text />
      <Social />

      <Team />
    </div>
  );
}


export default App;
