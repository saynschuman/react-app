import React, { Component } from "react";

class Comment extends Component {
  state = {
    IsOpenComment: false
  };

  render() {
    return (
      <div>
        {this.getButton()}
        {this.getComments()}
      </div>
    );
  }

  getComments() {
    if (!this.state.IsOpenComment) return null;
    const { comments } = this.props;
    if (!this.props.comments.length) {
      return <div>no comments!</div>;
    }
    const articleComments = comments.map(comment => (
      <li className="comments" key={comment.comment_id}>
        {comment.body}
      </li>
    ));
    return <section>{articleComments}</section>;
  }

  getButton() {
    const { isOpenArticle } = this.props;
    const { IsOpenComment } = this.state;
    if (isOpenArticle)
      return (
        <button onClick={this.toggleOpenComment}>
          {IsOpenComment ? "Закрыть комментарии" : "Открыть комментарии"}
        </button>
      );
  }

  toggleOpenComment = () => {
    this.setState({
      IsOpenComment: !this.state.IsOpenComment
    });
  };
}

Comment.defaultProps = {
  comments: []
};

export default Comment;
