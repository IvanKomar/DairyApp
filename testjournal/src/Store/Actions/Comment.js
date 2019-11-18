import { COMMENT_CREATE, COMMENTS_DELETE } from '../types'

export default {
  createComment: (comment) => {
    return {
      type: COMMENT_CREATE,
      payload: {
        comment,
      }
    }
  },
  deleteComments: (itemId) => {
    return {
      type: COMMENTS_DELETE,
      payload: {
        itemId,
      }
    }
  },
}
