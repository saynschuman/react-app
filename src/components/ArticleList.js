import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filtratedArticlesSelector } from '../selectors'

class ArticleList extends Component {
  state = {
    openArtId: null,
  }

  render() {
    const { articles } = this.props

    const articleElements = articles.map(article => (
      <li key={article.id}>
        <Article
          isOpen={article.id === this.state.openArtId}
          article={article}
          getArtId={this.getArtId}
          comments={article.comments}
        />
      </li>
    ))
    return <ul>{articleElements}</ul>
  }

  getArtId = openArtId => ev => {
    this.setState(prevState => ({
      openArtId: openArtId === prevState.openArtId ? null : openArtId,
    }))
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array,
}

export default connect(state => {
  return {
    articles: filtratedArticlesSelector(state),
  }
}, null, null, {pure:false})(ArticleList)
