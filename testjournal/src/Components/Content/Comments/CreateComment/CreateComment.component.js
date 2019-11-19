import React from 'react'
import { connect } from 'react-redux'

import CommentActions from '../../../../Store/Actions/Comment'
import SelectedItemActions from '../../../../Store/Actions/SelectedItem'
import './CreateComment.component.css'

class CreateCommentInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  get event() {
    return 'keydown'
  }

  addComment() {
    if (!this.state.value) return
    const item = this.props.selectedItem
    if (!item) return 
    const nextId = this.props.comments.length + 1
    const comment = {
      id: nextId,
      itemId: item,
      text: this.state.value,
    }
    this.props.createComment(comment)
    this.setState({value: ''})
  }

  keydownHandler = (e) => {
    if(e.keyCode===13 && e.ctrlKey) this.addComment()
  }

  componentDidMount(){
    document.addEventListener(this.event, this.keydownHandler)
  }

  componentWillUnmount(){
    document.removeEventListener(this.event, this.keydownHandler)
  }

  render() {

    return <form className='comments-textarea-container' onSubmit={e => e.preventDefault()} >
      <div className='add-comment-avatar'></div>
      <textarea 
        className='comments-textarea'
        value={this.state.value} 
        onChange={e => this.setState({value: e.target.value})}
      >
      </textarea>
    </form>
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  comments: state.comments,
  selectedItem: state.selectedItem
})

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(CommentActions.createComment(comment)),
    selectItem: itemId => dispatch(SelectedItemActions.selectItem(itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentInput)
