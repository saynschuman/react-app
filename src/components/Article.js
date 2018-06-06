import React, { Component } from "react";
import Comment from "./Comment";
import propTypes from "prop-types";

class Article extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isOpen !== this.props.isOpen;
  }
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
        {
            <button onClick={this.handleDelete}>delete</button>
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
  handleDelete = () => {
    console.log('deleting')
  }
  getBody() {
    if (!this.props.isOpen) return null;
    const { article } = this.props;
    return <section>{article.title}</section>;
  }
}

Article.propTypes = {
  article: propTypes.shape({
    author: propTypes.string.isRequired,
    title: propTypes.string.isRequired
  }).isRequired
};

export default Article;
