import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const number = Number(event.target.className);
    const openNote = number === this.state.id ? null : number;
    this.setState({ id: openNote });
  }

  render() {
    return (
      this.props.topics.map((topic, index) => {
        return (
          <div key={index}>
            <h3 className={index} onClick={this.handleClick}>{topic.title}</h3>
            <p className={this.state.id === index ? 'content' : 'hidden'}>{topic.content}</p>
          </div>
        );
      })
    );
  }
}

export default Accordion;
