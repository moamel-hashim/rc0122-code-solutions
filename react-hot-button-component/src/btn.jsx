import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let color = '';
    const { clicks } = this.state;
    if (clicks <= 3) {
      color = 'purple';
    } else if (clicks <= 6) {
      color = 'light-purple';
    } else if (clicks <= 9) {
      color = 'light-red';
    } else if (clicks <= 12) {
      color = 'orange';
    } else if (clicks <= 15) {
      color = 'yellow';
    } else if (clicks >= 18 || clicks >= 16) {
      color = 'white';
    }
    return <button className={color} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default CustomButton;
