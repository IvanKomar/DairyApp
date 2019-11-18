import { ITEM_CREATE, ITEM_DELETE } from '../types'

export const ItemActions = {
  createItem: (item) => {
    return {
      type: ITEM_CREATE,
      payload: {
        item,
      }
    }
  },
  deleteItem: (item) => {
    return {
      type: ITEM_DELETE,
      payload: {
        item,
      }
    }
  },
}
