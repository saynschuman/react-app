import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { deleteArticle } from '../actions'
import CommentList from './CommentList'

class Article extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isOpen !== this.props.isOpen
  }
  render() {
    const { article } = this.props

    return (
      <div>
        <h3>{article.title}</h3>
        <p>{article.date}</p>
        {
          <button onClick={this.props.getArtId(article.id)}>
            {this.props.isOpen ? 'close' : 'open'}
          </button>
        }
        {<button onClick={this.handleDelete}>delete</button>}
        <br />
        {this.getBody()}

        {
          <CommentList
            id={article.id}
            comments={article.comments}
            isOpenArticle={this.props.isOpen}
          />
        }
      </div>
    )
  }
  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
    console.log('deleting')
  }
  getBody() {
    if (!this.props.isOpen) return null
    const { article } = this.props
    return (
      <section>
        <br />
        {article.text}
        <br />
        <br />
      </section>
    )
  }
}

Article.propTypes = {
  article: propTypes.shape({
    author: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
  }).isRequired,
}

export default connect(
  null,
  { deleteArticle },
)(Article)
