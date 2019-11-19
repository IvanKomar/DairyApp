import React from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'

import CommentActions from '../../../../Store/Actions/Comment'

class CreateCommentInput extends React.Component {

  // get ItemIdFromQuery() {
  //   const params = queryString.parse(this.props.location.search)
  //   return parseInt(params.item)
  // }
  // state = {
  //   selectedItem: this.ItemIdFromQuery || this.props.item[0].id 
  // }

  fields = {
    text: 'text'
  }
  get text() {
    return this.props.form.getFieldsValue().text
  }
  addComment() {
    // if (window.event.keyCode == 13 && window.event.ctrlKey)
    //  {
      const item = this.props.items[this.props.items.length - 1]
      if (!item) return 
      const nextId = this.props.comments.length + 1
      const comment = {
        id: nextId,
        itemId: item.id,
        text: 'comment for ' + this.props.items[nextId-1].title,
      }
      this.props.createComment(comment)

    // }
  }
  render() {

    const propsText = this.props.form.getFieldProps('text')

    return (
      <form onSubmit={() => this.addComment()} >
        <div className='avatar'>avatar</div>
        <textarea 
          {...propsText}
        >
        </textarea>
        <button onClick={() => this.addComment()}>+</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  comments: state.comments
})

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(CommentActions.createComment(comment)),
  }
}

const CreateComment = createForm()(CreateCommentInput)

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)
