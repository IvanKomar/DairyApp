import { ITEM_CREATE, ITEM_DELETE } from '../types'

export default {
  createItem: (item) => {
    return {
      type: ITEM_CREATE,
      payload: {
        item,
      }
    }
  },
  deleteItem: (itemId) => {
    return {
      type: ITEM_DELETE,
      payload: {
        itemId,
      }
    }
  },
}
