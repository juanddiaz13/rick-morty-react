import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import { Card } from './components/Card';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <>
      <h1>Rick and morty</h1>
      <Gallery></Gallery>
    </>
  );
}

export default App;
