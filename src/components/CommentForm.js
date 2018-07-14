import React, { Component } from 'react'
import './commentForm.css'
import { addComment } from '../actions'
import { connect } from 'react-redux'

class CommentForm extends Component {
  state = {
    comment: '',
    textValid: true,
  }
  render() {
    return (
      <div>
        <input
          className={`${this.state.textValid}`}
          type="text"
          value={this.state.comment}
          onChange={this.handleCommentChange}
        />
        <button onClick={this.handleAddComment}>Add Comment</button>
      </div>
    )
  }

  handleAddComment = () => {
    const commentText = { text: this.state.comment, articleId: this.props.id }
    this.props.addComment(commentText)
    this.setState({
      comment: ''
    })

  }



  handleCommentChange = e => {
    const value = e.target.value
    this.setState({
      comment: value,
      textValid: value.length > 5,
    })
  }
}

export default connect(state => {
  return {
    comments: state.comments
  }
}, {addComment})(CommentForm)