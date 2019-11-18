import { COMMENT_CREATE, COMMENTS_DELETE } from '../types'

export const CommentActions = {
  createComment: (comment) => {
    return {
      type: COMMENT_CREATE,
      payload: {
        comment,
      }
    }
  },
  deleteComments: (ItemId) => {
    return {
      type: COMMENTS_DELETE,
      payload: {
        ItemId,
      }
    }
  },
}
