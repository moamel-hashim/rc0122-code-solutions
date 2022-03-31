import React from 'react';
import reactDOM from 'react-dom/client';

function CustomButton(props) {
  return (
    <button>{props.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="Know" />
    <CustomButton text="React" />
  </div>
);

const root = reactDOM.createRoot(document.querySelector('#root'));
root.render(element);
