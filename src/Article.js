import React, { Component } from "react";
import Comment from "./Comment";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <h3>{article.author}</h3>
        <button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
        <br />
        {this.getBody()}

        {
          <Comment
            comments={article.comments}
            isOpenArticle={this.state.isOpen}
          />
        }
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const { article } = this.props;
    return <section>{article.title}</section>;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
