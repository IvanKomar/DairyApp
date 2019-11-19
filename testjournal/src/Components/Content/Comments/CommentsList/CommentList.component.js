import React from 'react'
import { connect } from 'react-redux'

import CommentItem from './CommentItem/CommentItem.component'

class CommentList extends React.Component {

  render() {

    return <div className='comments-list' >
    <h2>Comments #{this.props.selectedItem}</h2>
     { this.props.comments.map(comment => comment.itemId === this.props.selectedItem 
        ? <CommentItem key={comment.id} data={comment} />  
        : null)
    }  
    </div>
  }

  
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  selectedItem: state.selectedItem
})

export default connect(mapStateToProps, {})(CommentList)
