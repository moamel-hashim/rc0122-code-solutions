import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validate';

const element = <ValidatedInput/>;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
