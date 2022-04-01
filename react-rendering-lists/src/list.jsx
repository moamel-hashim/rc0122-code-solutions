import React from 'react';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const listPokemon = pokedex.map(value =>
      <li key={value.number}>{value.name}</li>
);

function PokemonList(props) {
  return <ul>{listPokemon}</ul>;
}

export default PokemonList;
