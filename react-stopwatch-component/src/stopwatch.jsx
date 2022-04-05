import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      pauseOrPlay: false,
      className: 'fa-solid fa-play'
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.interval = setInterval(() => {
      this.setState({
        pauseOrPlay: true,
        timer: this.state.timer + 1
      });
    }, 1000);
  }

  pause() {
    this.setState({ pauseOrPlay: false });
    clearInterval(this.interval);
  }

  handleClick() {
    const { pauseOrPlay } = this.state;
    if (!pauseOrPlay) {
      this.tick();
    } else {
      this.pause();
    }
  }

  reset() {
    this.setState({ timer: 0 });
  }

  render() {
    let { timer, className, pauseOrPlay } = this.state;
    if (pauseOrPlay === false) {
      className = 'fa-solid fa-play';
      pauseOrPlay = true;
    } else {
      className = 'fa-solid fa-pause';
      pauseOrPlay = false;
    }

    return (
      <div className="row height">
        <div className='button-container'>
        <button className="btn" onClick={this.reset}>{timer}</button>
        </div>
      <div className="icon">
          <button className='icon-btn' onClick={this.handleClick}>
            <i className={className}></i>
        </button>
      </div>
      </div>
    );
  }
}

export default StopWatch;
