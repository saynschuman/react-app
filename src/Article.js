import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const { art } = this.props;
    return (
      <div>
        <h3>{art.author}</h3>
        <section>{art.title}</section>
      </div>
    );
  }
}
