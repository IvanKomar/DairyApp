import React from 'react'
import { connect } from 'react-redux'
import CreateComment from './CreateComment/CreateComment.component'
import CommentList from './CommentsList/CommentList.component'
import './Comments.component.css'

class Comments extends React.Component {

  render() {
 
    return (
      <div className='comments-container'>
        <CommentList/>
        {/* {
          this.props.comments.map(comment => <p key={comment.id}> {comment.itemId} {comment.text} </p>)
        }  */}
         <CreateComment/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  comments: state.comments
})

export default connect(mapStateToProps)(Comments)
