import React, { Component } from "react";
import "./App.css";
import ArticleList from './components/ArticleList'
import Select from 'react-select'
import {connect} from 'react-redux'

class App extends Component {

  state = {
    selected: null
  }

  render() {
    const options = this.props.articles.map(article => ({
        label: article.author,
        value: article.id
    }))
    return (
        <div>
          <Select options = {options} isMulti />
          <ArticleList />
        </div>
    );
  }
}

export default connect(
    state => {

      return {
          articles: state.articles
      }
    }
)(App);