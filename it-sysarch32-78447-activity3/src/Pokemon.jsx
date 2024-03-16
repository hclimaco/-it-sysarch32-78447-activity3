// Pokemon.jsx
import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;
  const displayName = name[language] || name.english;

  return (
    <div className="pokemon">
      <img src={image} alt={displayName} />
      <div>[{id}] {displayName}</div>
      <div className="types-container">
        {type.map((t) => (
          <div key={t} className={`type ${t.toLowerCase()}`}>{t}</div>
        ))}
      </div>
      <div>HP: {base.HP}    Speed: {base.Speed}</div>
      <div>Attack: {base.Attack}    Sp. Attack: {base['Sp. Attack']}</div>
      <div>Defense: {base.Defense}  Sp. Defense: {base['Sp. Defense']}</div>
    </div>
  );
};

export default Pokemon;
