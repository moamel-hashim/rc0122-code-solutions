import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return this.state.isClicked === false
      ? <button onClick={this.handleClick}>Click Me!</button>
      : <button onClick={this.handleClick}>Thanks</button>;
  }
}

const elements = (
  <CustomButton isClicked= {false}/>,
  <CustomButton isClicked={true}/>
);

const render = ReactDOM.createRoot(document.querySelector('#root'));
render.render(elements);
