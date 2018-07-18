import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { deleteArticle, loadArticle } from '../actions'
import CommentList from './CommentList'
import Loader from '../components/Loader'

class Article extends Component {
  componentWillReceiveProps({ isOpen, loadArticle, article }) {
    if (isOpen && !article.text && !article.loading) {
      loadArticle(article.id)
    }
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
    if (article.loading) return <Loader />
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
    title: propTypes.string.isRequired,
  }).isRequired,
}

export default connect(
  null,
  { deleteArticle, loadArticle },
)(Article)
