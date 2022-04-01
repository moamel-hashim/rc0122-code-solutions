import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      color: '',
      onOrOff: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const $body = document.querySelector('body');
    let { toggle, color, onOrOff } = this.state;
    if (toggle === false) {
      onOrOff = 'OFF';
      $body.className = '';
    } else {
      onOrOff = 'ON';
      color = 'white';
      $body.className = 'dark';
      toggle = false;
    }
    return (
      <div className='row'>
      <label htmlFor="toggle" className='switch'>
        <input type="checkbox" name="toggle" id="toggle" onClick={this.handleToggle}/>
        <span className='slider round'></span>
      </label>
      <div>
        <p className={color}>{onOrOff}</p>
      </div>
      </div>
    );
  }
}

export default Toggle;
