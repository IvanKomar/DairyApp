import React from 'react'
import './Item.component.css'
import ItemActions from '../../../Store/Actions/Item'
import CommentActions from '../../../Store/Actions/Comment'
import { connect } from 'react-redux'

{/* <Name/>
<CommentsCounter/>
<Button/> */}

class Item extends React.Component {
  
  deleteItem() {
    const item = this.props.items[this.props.items.length - 1]
    this.props.deleteItem(item && item.id)
    this.props.deleteComments(item && item.id)
  }
  addComment() {
    const item = this.props.items[this.props.items.length - 1]
    if (!item) return 

    const nextId = this.props.comments.length + 1
    const comment = {
      id: nextId,
      text: 'LOREM IPSUM TEXT RARARAtitle',
      itemId: item.id
    }
    this.props.createComment(comment)
  }

  render() {
        const commentCount = <span> {comments.filter(commment => commment.itemId).length} </span>
        const deleteButton = <button className='to-delete-item' onClick={() => this.deleteItem()} >Delete Item</button>
    return (
     
      
      
    //   <button className='to-add-item' onClick={() => this.addComment()} >Add comment</button>
      
      <div className='item'>
        {this.props.items.map(item => <p key={item.id}> {item.title} {commentCount} {deleteButton} </p>)}   
      </div>
    //   <div>
    //     {this.props.comments.map(comment => <p key={comment.id}> {comment.itemId} {comment.text} </p>)}   
    //   </div>
       
     
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  comments: state.comments
})

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(ItemActions.createItem(item)),
    deleteItem: itemId => dispatch(ItemActions.deleteItem(itemId)),
    createComment: comment => dispatch(CommentActions.createComment(comment)),
    deleteComments: itemId => dispatch(CommentActions.deleteComments(itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
