import { ITEM_CREATE, ITEM_DELETE } from '../types'

export default (items = [], action) => {
  switch (action.type) {
    case ITEM_CREATE:
      return items.concat(action.payload.item)
    case ITEM_DELETE:
      return items.filter((item) => item.id !== action.payload.itemId)
    default: {
      return items
    }
  }
}
