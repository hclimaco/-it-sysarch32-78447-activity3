// Pokedex.jsx
import React, { useState } from 'react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemonList }) => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="pokedex">
      <div className="filters">
        <button
          className={language === 'english' ? 'active' : ''}
          onClick={() => handleLanguageChange('english')}
        >
          English
        </button>
        <button
          className={language === 'japanese' ? 'active' : ''}
          onClick={() => handleLanguageChange('japanese')}
        >
          Japanese
        </button>
        <button
          className={language === 'chinese' ? 'active' : ''}
          onClick={() => handleLanguageChange('chinese')}
        >
          Chinese
        </button>
        <button
          className={language === 'french' ? 'active' : ''}
          onClick={() => handleLanguageChange('french')}
        >
          French
        </button>
      </div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <div key={pokemon.id} className="pokemon-wrapper">
            <Pokemon pokemon={pokemon} language={language} />
            {(index + 1) % 3 === 0 && <div className="clearfix"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
