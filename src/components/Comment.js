import React, { Component } from 'react'
import { connect } from 'react-redux'
import { commentSelectorFactory } from '../selectors/'

class Comment extends Component {

  render() {
    return (
      <div>
        {this.getComment()}
      </div>
    )
  }

  getComment() {

    return (
        <span>
          <b>{this.props.fullComments.user}</b> <br/> <i>{this.props.fullComments.text}</i>
        </span>

    )
  }
}

const mapSTP = () => {
  const commentSelector = commentSelectorFactory()

  return (state, props) => {
    return {
      fullComments: commentSelector(state, props)
    }
  }
}


export default connect(mapSTP)(Comment)

// fullComments: state.comments[props.id]
// fullComments: commentSelectorFactory(state, props)
