import React from 'react'
import { connect } from 'react-redux'

import ItemActions from '../../../../../Store/Actions/Item'
import CommentActions from '../../../../../Store/Actions/Comment'
import SelectedItemActions from '../../../../../Store/Actions/SelectedItem'

import './Item.component.css'
class Item extends React.Component {
  
  deleteItem(item) {
    this.props.deleteItem(item && item.id)
    this.props.deleteComments(item && item.id)
  }
  
  get itemClasses() {
    const id = this.props.data.id
    return `item ${ id === this.props.selectedItem ? 'selected' : ''}` 
  }

  render() {
    const commentCount = <span> {0} </span>
    const item = this.props.data
        
    return (
     
      <div 
        className={this.itemClasses}
        key={`${item.id}${item.title}`}
        onClick={() => this.props.selectItem(item.id)}
      > 
        <p>
          {item.title} 
          {commentCount} 
        </p>
        <button className='to-delete-item' onClick={()=>this.deleteItem(item)}>Delete</button>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  selectedItem: state.selectedItem
})

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(ItemActions.createItem(item)),
    deleteItem: itemId => dispatch(ItemActions.deleteItem(itemId)),
    createComment: comment => dispatch(CommentActions.createComment(comment)),
    deleteComments: itemId => dispatch(CommentActions.deleteComments(itemId)),
    selectItem: itemId => dispatch(SelectedItemActions.selectItem(itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
