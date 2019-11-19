import React from 'react'
import { connect } from 'react-redux'

import './CommentItem.component.css'
class CommentItem extends React.Component {

  // getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   const color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  render() {

    const comment = this.props.data

    return <div className='comment-item'  key={`${comment.id}${comment.text}`}>
      <div className='avatar' ></div>
      <p className='coments-text'>{comment.text}</p>
    </div>
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  comments: state.comments,
  selectedItem: state.selectedItem
})

export default connect(mapStateToProps, {})(CommentItem)
