import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className={`row ${toggle === false ? '' : 'dark'}`}>
      <label htmlFor="toggle" className='switch'>
        <input type="checkbox" name="toggle" id="toggle" onClick={this.handleToggle}/>
        <span className='slider round'></span>
      </label>
      <div>
        <p className={toggle === false ? 'dark-text' : 'white'}>{toggle === false ? 'OFF' : 'ON'}</p>
      </div>
      </div>
    );
  }
}

export default Toggle;
