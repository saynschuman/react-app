import React, { Component } from 'react'
import './App.css'
import ArticleList from './components/ArticleList'
import { connect } from 'react-redux'
import DayPick from './components/DayPick'
import { selectToState } from './actions'
import FilterSelect from './components/FilterSelect'
import { hot } from 'react-hot-loader'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <br />
        <FilterSelect
          value={this.props.selected}
          selectToState={this.props.selectToState}
          articles={this.props.articles}
        />
        <DayPick />
        <ArticleList />
      </div>
    )
  }
}

function mapSTP(state) {
  return {
    articles: state.articles,
    selected: state.filter.selected,
  }
}

export default hot(module)(
  connect(
    mapSTP,
    { selectToState },
  )(App),
)
