import React, { Component } from 'react'
import './App.css'
import Articles from './components/routes/Articles'
// import { connect } from 'react-redux'
import DayPick from './components/DayPick'
// import { selectToState } from './actions'
// import FilterSelect from './components/FilterSelect'
// import { hot } from 'react-hot-loader'
import NewFoundPage from './components/NotFoundPage'
import Counter from './components/counter'
import { Route, Link, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'
import PropTypes from 'prop-types'
import UserForm from './components/UserForm'

class App extends Component {
  static childContextTypes = {
    user: PropTypes.string,
  }

  getChildContext() {
    return {
      user: this.state.username,
    }
  }

  state = {
    username: '',
  }

  render() {
    return (
      <ConnectedRouter history={history}>
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
          <br/>
            <UserForm value={this.state.username} onChange={this.handleUserChange} />

          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/daypick" component={DayPick} />
            <Route path="/articles" component={Articles} />
            <Route path="*" component={NewFoundPage} />
          </Switch>
          <br />
          {/*<FilterSelect*/}
          {/*value={this.props.selected}*/}
          {/*selectToState={this.props.selectToState}*/}
          {/*articles={this.props.articles}*/}
          {/*/>*/}
        </div>
      </ConnectedRouter>
    )
  }
  handleUserChange = username => this.setState({ username })
}

export default App
