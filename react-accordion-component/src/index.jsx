import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';
const topic = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content: 'Hypertext Markup Language(HTML) is the standard markup language for creating web pages and web applications. With Cascading style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS), is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web. alongside HTML and JavaScript.'
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation. and first-class functions.'
  }
];

const element = <Accordion topics={topic}/>;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
