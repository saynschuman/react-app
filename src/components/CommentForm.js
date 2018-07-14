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
        <form onSubmit={this.handleAddComment}>
          <input
            className={`${this.state.textValid}`}
            type="text"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
          <input type="submit" value="Add" />
          {/*<button>Add Comment</button>*/}
        </form>
      </div>
    )
  }

  handleAddComment = ev => {
    ev.preventDefault()
    const commentText = { text: this.state.comment, articleId: this.props.id }
    this.props.addComment(commentText)
    this.setState({
      comment: '',
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
//
// export default connect(
//   null,
//   (dispatch, ownProps) => ({
//     addComment: comment => dispatch(addComment(comment, ownProps.articleId)),
//   }),
// )(CommentForm)

export default connect(
  null,
  { addComment },
)(CommentForm)
