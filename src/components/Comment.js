import React, { Component } from 'react'
import { connect } from 'react-redux'

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

export default connect((state, props)=> {
  return {
    fullComments: state.comments[props.id]
  }
})(Comment)
