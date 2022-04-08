import React from 'react';
import ReactDOM from 'react-dom/client';
import PokemonList from './list';

const element = <PokemonList/>;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
