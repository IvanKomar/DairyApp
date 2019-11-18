import React from 'react'
import './Item.component.css'
import ItemActions from '../Store/Actions/Item'
import CommentActions from '../Store/Actions/Comment'
import { connect } from 'react-redux'


class Items extends React.Component {
  

  addItem() {
    const nextId = this.props.items.length + 1
    const item = {
      id: nextId,
      title: 'vasya eto title',
    }
    this.props.createItem(item)
  }
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

    return (
      <div className='Items-container'> 
      <h2>Items</h2>
      {/* <form onSubmit={this.props.handleSubmit}> */}
      {/* <input 
        className='to-type-item-name' 
        placeholder='Type name here...' 
        value={this.state.value}  
      /> */}
      <button className='to-add-item' onClick={() => this.addItem()} >Add new item</button>
      <button className='to-add-item' onClick={() => this.deleteItem()} >Delete Item</button>
      <button className='to-add-item' onClick={() => this.addComment()} >Add comment</button>
      {/* </form> */}
      <div>
        {
          this.props.items.map(item => <p key={item.id}> {item.title} </p>)
        }   
      </div>
      <div>
        {
          this.props.comments.map(comment => <p key={comment.id}> {comment.itemId} {comment.text} </p>)
        }   
      </div>
      </div>
       
     
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

export default connect(mapStateToProps, mapDispatchToProps)(Items)
