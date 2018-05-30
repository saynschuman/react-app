import React, { Component } from "react";
import Comment from "./Comment";

class Article extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <h3>{article.author}</h3>
        {
          <button onClick={this.props.getArtId(article.id)}>
            {this.props.isOpen ? "close" : "open"}
          </button>
        }
        <br />
        {this.getBody()}

        {
          <Comment
            comments={article.comments}
            isOpenArticle={this.props.isOpen}
          />
        }
      </div>
    );
  }
  getBody() {
    if (!this.props.isOpen) return null;
    const { article } = this.props;
    return <section>{article.title}</section>;
  }
}

export default Article;
