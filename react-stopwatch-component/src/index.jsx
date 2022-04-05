import ReactDOM from 'react-dom/client';
import React from 'react';
import StopWatch from './stopwatch';

const elements = <StopWatch />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(elements);
