import React from 'react'
import { connect } from 'react-redux'
import CreateComment from './CreateComment/CreateComment.component'
import CommentList from './CommentsList/CommentList.component'
import './Comments.component.css'

class Comments extends React.Component {

  render() {
 
    return (
      <div className='comments-container'>
        {
          this.props.items.length === 0
          ? <h2 className='comments-header'>Add your first item</h2>
          : <h2 className='comments-header'>Comments #{ this.props.items.findIndex( item => item.id === this.props.selectedItem) + 1}</h2>  
        }
      
        <CommentList/>
        <CreateComment/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  selectedItem: state.selectedItem
})

export default connect(mapStateToProps)(Comments)
