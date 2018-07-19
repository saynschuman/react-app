import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import Loader from '../components/Loader'
import { loadComments } from '../actions'
import { connect } from 'react-redux'
import store from '../store'
import {mapToArr} from '../helpers'

class CommentList extends Component {
  state = {
    IsOpenComment: false,
  }

  componentDidMount() {
    this.props.loadComments(this.props.id)
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
    const { IsOpenComment } = this.state
    const { id } = this.props
    const { isOpenArticle } = this.props
    if (!isOpenArticle) return null
    if (!this.state.IsOpenComment) return null
    // if (this.state.loadingComments) return <Loader />


    if (IsOpenComment)
      return (
        <div>
          <ul className="nop">
            {this.props.fullCom.map(comment => (
              <li className="comments" key={comment.id}>
                <Comment id={comment} />
              </li>
            ))}
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
          <br />
          <br />
        </div>
      )
  }

  toggleOpenComment = () => {
      this.setState({
        IsOpenComment: !this.state.IsOpenComment,
      })
  }
}

export default connect(
  (state, props) => {
    console.log((state.comments.fullComments.toJS())[props.id])
    return {
      fullCom: (state.comments.fullComments.toJS())[props.id],
      // fullCom: []
    }
  },
  { loadComments },
)(CommentList)
