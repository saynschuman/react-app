import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { deleteArticle, loadArticle } from '../actions'
import CommentList from './CommentList'
import Loader from '../components/Loader'
import PropTypes from 'prop-types'

class Article extends Component {
  static contextTypes = {
    user: PropTypes.string,
  }

  componentDidMount() {
    const { id, loadArticle, article } = this.props
    if (!article || (!article.text && !article.loading)) {
      loadArticle(id)
    }
  }
  render() {
    const { article } = this.props
    if (!article) return null

    return (
      <div>
        <h3>{article.title}</h3>
        <p>{article.date}</p>
        {<button onClick={this.handleDelete}>delete</button>}
        <br />
        {this.getBody()}
        User: {this.context.user}
        <br/> <br/>

        {
          <CommentList
            id={article.id}
            commentList={this.props.comments}
            isOpenArticle={this.props.isOpen}
            fullCom={this.props.fullCom}
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
  id: propTypes.string,
  // from connect
  article: propTypes.shape({
    title: propTypes.string,
  }),
}

export default connect(
  (state, props) => {
    return {
      article: state.articles.entities.get(props.id),
    }
  },
  { deleteArticle, loadArticle }, null, {pure: false}
)(Article)
