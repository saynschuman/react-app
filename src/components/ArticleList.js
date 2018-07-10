import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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

function mapSTP(state) {
  const { to, from, selected} = state.filter
  const { articles } = state

  // // Variant 1
  // const newArr = []
  // if (selected.length === 0) {
  //   console.log('empty')
  // } else {
  //   for (var i = 0; i < selected.length; i++) {
  //     newArr.push(selected[i].value)
  //   }
  //   console.log(newArr)
  // }
  //
  // const test = state.articles.filter(
  //   article =>
  //     (Date.parse(from) < Date.parse(article.date) && Date.parse(article.date) < Date.parse(to)) &&
  //     newArr.includes(article.id),
  // )
  // const result = () => {
  //   if (test.length === 0 || from === null) {
  //     return state.articles
  //   } else {
  //     return test
  //   }
  // }

  // Variant 2
  const selectedId = selected.map(item => item.value)

  const result = articles.filter(article => {
    const published = Date.parse(article.date)
    return (
      (!selectedId.length || selectedId.includes(article.id)) &&
      (!from || !to || (from <= published && published <= to))
    )
  })

  return {
    articles: result,
  }

  // // Variant 3
  // const selectedId = selected.map(item => item.value)
  // let filtered = null
  // if (selectedId.length >= 1) {
  //   filtered = articles.filter(article => selectedId.includes(article.id))
  // }
  // if (from ) {
  //   filtered = articles.filter(article => {
  //     const date = Date.parse(article.date)
  //     return from <= date && date <= to
  //   })
  // }
  // return { articles: filtered ? filtered : state.articles }

}

export default connect(mapSTP)(ArticleList)
