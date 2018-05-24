import React, { Component } from "react";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  render() {
    const { art } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <h3>{art.author}</h3>
        <button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const { art } = this.props;
    return <section>{art.title}</section>;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
