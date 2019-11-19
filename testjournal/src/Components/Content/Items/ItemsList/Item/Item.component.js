import React from 'react'
import { connect } from 'react-redux'

import ItemActions from '../../../../../Store/Actions/Item'
import CommentActions from '../../../../../Store/Actions/Comment'
import './Item.component.css'

class Item extends React.Component {
  
  deleteItem(item) {
    this.props.deleteItem(item && item.id)
    this.props.deleteComments(item && item.id)
  }
  
  render() {
        const commentCount = <span> {0} </span>
        
    return (
     
      <div className='items'>
        {
          this.props.items.map(item => 
          <div 
            className='item'
            key={`${item.id}${item.title}`}> 
              <p>
                {item.title} 
                {commentCount} 
              </p>
              <button className='to-delete-item' onClick={()=>this.deleteItem(item)}>Delete</button>
          </div>)
        }   
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
