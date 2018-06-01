import React, { Component } from "react";
import "./commentForm.css";

export default class CommentForm extends Component {
  state = {
    comment: "",
    textValid: true
  };
  render() {
    return (
      <div>
        <input
          className={`${this.state.textValid}`}
          type="text"
          value={this.state.comment}
          onChange={this.handleCommentChange}
        />
        <button>Add Comment</button>
      </div>
    );
  }
  handleCommentChange = e => {
    const value = e.target.value;
    this.setState({
      comment: value,
      textValid: value.length > 5
    });
  };
}
