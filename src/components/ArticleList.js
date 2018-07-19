import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filtratedArticlesSelector } from '../selectors'
import { loadAllArticles } from '../actions'
import Loader from '../components/Loader'

class ArticleList extends Component {
  state = {
    openArtId: null,
  }

  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props
    if (!loaded || !loading) loadAllArticles()

  }

  render() {
    const { articles, loading } = this.props
    if(loading) return <Loader />

    const articleElements = articles.map(article => (
      <li key={article.id}>
        <Article
          isOpen={article.id === this.state.openArtId}
          article={article}
          getArtId={this.getArtId}
          comments={article.comments}
          fullCom={this.props.fullCom}
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

export default connect(
  state => {
    return {
      articles: filtratedArticlesSelector(state),
      loading: state.articles.loading,
      loaded: state.articles.loaded,
    }
  },
  { loadAllArticles },
)(ArticleList)
