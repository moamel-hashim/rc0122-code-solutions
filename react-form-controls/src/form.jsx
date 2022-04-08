import React from 'react';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email
        <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default NewsLetterForm;
