import React, { Component } from 'react'
import './App.css'
import ArticleList from './components/ArticleList'
import { connect } from 'react-redux'
import DayPick from './components/DayPick'
import { selectToState } from './actions'
import FilterSelect from './components/FilterSelect'
import { hot } from 'react-hot-loader'
import Counter from './components/counter'
import {reduce} from './components/test/reduce'
// import { postData } from './postData'
// import { normalize, schema } from 'normalizr';
//
// window.normalize = normalize
// window.schema = schema
// window.postData = postData



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
        {reduce()}
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
