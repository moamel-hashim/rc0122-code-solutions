import react from 'react';
import reactDom from 'react-dom';

const h1 = react.createElement('h1', null, 'Hello, React');
reactDom.render(h1, document.getElementById('root'));
