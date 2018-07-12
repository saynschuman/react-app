import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'

class Comment extends Component {
  state = {
    IsOpenComment: false,
  }

  render() {
    return (
      <div>
        {this.getButton()}
        <br/>
        {this.getComments()}
      </div>
    )
  }

  getComments() {
    if (!this.state.IsOpenComment) return null
    const { comments } = this.props
    // console.log(this.props)
    // debugger
    if (!this.props.comments.length) {
      return <div>no comments!</div>
    }
    const articleComments = comments.map(comment => (
      <li className="comments" key={comment.id}>
        <b>{comment.user}</b> <br/> <i>{comment.text}</i>
      </li>
    ))
    return (
      <div>
        <section>{articleComments}</section>
        <CommentForm />
      </div>
    )
  }

  getButton() {
    const { isOpenArticle } = this.props
    const { IsOpenComment } = this.state
    if (isOpenArticle)
      return (
        <div>
          <button onClick={this.toggleOpenComment}>
            {IsOpenComment ? 'Закрыть комментарии' : 'Открыть комментарии'}
          </button>
          <span> ({this.props.comments.length}) </span>
        </div>
      )
  }

  toggleOpenComment = () => {
    this.setState({
      IsOpenComment: !this.state.IsOpenComment,
    })
  }
}

Comment.defaultProps = {
  comments: [],
}

export default connect((state, props) => {

  return {
    // comments: props.comments ? props.comments.map(id => comments[id]) : [],
    comments: props.comments
  }
})(Comment)
