import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer(event) {
    this.setState({ isOpen: !this.state.isOpen });
    event.preventDefault();
  }

  render() {
    const { isOpen } = this.state;
    if (!isOpen) {
      return (
        <div className='container'>
          <div className='icon-position'>
            <i className='fas fa-bars font-size' onClick={this.handleDrawer}></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='overlay' onClick={this.handleDrawer}></div>
          <div className='menu'>
            <div className='text-container'>
              <div>
                <a href="" onClick={this.handleDrawer}><h1>Menu</h1></a>
              </div>
              <div>
                <a href="" onClick={this.handleDrawer}>About</a>
              </div>
              <div>
                <a href="" onClick={this.handleDrawer}>Get Started</a>
              </div>
              <div>
                <a href="" onClick={this.handleDrawer}>Sign In</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;
