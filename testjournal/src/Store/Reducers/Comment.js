import { COMMENT_CREATE, COMMENTS_DELETE } from '../types'

export default (comments = [], action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return comments.concat(action.payload.comment)
    case COMMENTS_DELETE:
      return comments.filter((comment) => comment.itemId !== action.payload.itemId)
    default: {
      return comments
    }
  }
}
