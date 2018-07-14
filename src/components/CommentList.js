import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentList extends Component {
  state = {
    IsOpenComment: false,
  }

  render() {

    return (
      <div>
        {this.getButton()}
        {this.getComments()}
      </div>
    )
  }

  getComments() {
    const {comments} = this.props
    const { IsOpenComment } = this.state
    const { isOpenArticle } = this.props
    if(!isOpenArticle) return null
    if (!this.state.IsOpenComment) return null
    if (IsOpenComment)
      return (
        <div>
          <ul className="nop">
            {comments.map(id => <li className="comments" key={id}><Comment id = {id}/></li>)}
          </ul>
          <CommentForm id={this.props.id} />
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
          <br/>
          <br/>
        </div>
      )
  }

  toggleOpenComment = () => {
    this.setState({
      IsOpenComment: !this.state.IsOpenComment  ,
    })
  }
}

export default CommentList