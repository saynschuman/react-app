import React, { Component } from "react";
export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      IsOpenComment: false
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
        {this.getButton()}
        {this.getComments()}
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const { article } = this.props;
    return <section>{article.title}</section>;
  }

  getComments() {
    if (!this.state.IsOpenComment) return null;
    const { article } = this.props;
    const articleComments = article.comments.map(comment => (
      <li className="comments" key={comment.comment_id}>
        {comment.body}
      </li>
    ));
    return <section>{articleComments}</section>;
  }

  getButton() {
    if (!this.state.isOpen) return null;
    const { IsOpenComment } = this.state;
    return (
      <button onClick={this.toggleOpenComment}>
        {IsOpenComment ? "Закрыть комментарии" : "Открыть комментарии"}
      </button>
    );
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleOpenComment = () => {
    this.setState({
      IsOpenComment: !this.state.IsOpenComment
    });
  };
}
