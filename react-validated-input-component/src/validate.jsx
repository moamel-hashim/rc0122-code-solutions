import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      text: '',
      className: '',
      textClass: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    let { text, className, textClass } = this.state;
    if (event.target.value.length < 8) {
      text = 'Your password is too short.';
      className = 'fas fa-times wrong';
      textClass = 'wrong-text';
    } else {
      text = '';
      className = 'fas fa-check correct';
    }
    this.setState({
      password: event.target.value,
      text: text,
      textClass: textClass,
      className: className
    });
  }

  handleSubmit(event) {
    let { text, className, textClass, password } = this.state;
    if (password.length === 0) {
      text = 'A password is required';
      className = 'fas fa-times wrong';
      textClass = 'wrong-text';
    }
    this.setState({ text: text, className: className, textClass: textClass });
    event.preventDefault();
  }

  render() {
    const { text, className, textClass } = this.state;
    return (
      <form action='' onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password</label>
        <div>
          <input type="password" name="password" id="password" onChange={this.handleInput}/> <span><i className={className}></i></span>
        </div>
        <div>
          <p className={textClass}>{text}</p>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;
