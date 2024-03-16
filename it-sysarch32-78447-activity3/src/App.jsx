// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Pokedex from './Pokedex';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon');
        const data = await response.json();
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="app">
      <Header />
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
};

export default App;
