import React, { Component } from 'react'
import './App.css'
import Articles from './components/routes/Articles'
// import { connect } from 'react-redux'
import DayPick from './components/DayPick'
// import { selectToState } from './actions'
// import FilterSelect from './components/FilterSelect'
// import { hot } from 'react-hot-loader'
import Counter from './components/counter'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>Menu</h2>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/counter">Counter</Link>
            </div>
            <div>
              <Link to="/daypick">Daypick</Link>
            </div>
            <div>
              <Link to="/articles">Articles</Link>
            </div>
          </div>
          <Route path="/counter" component={Counter} />
          <Route path="/daypick" component={DayPick} />
          <Route path="/articles" component={Articles} />
          <br />
          {/*<FilterSelect*/}
          {/*value={this.props.selected}*/}
          {/*selectToState={this.props.selectToState}*/}
          {/*articles={this.props.articles}*/}
          {/*/>*/}
        </div>
      </Router>
    )
  }
}

export default App
