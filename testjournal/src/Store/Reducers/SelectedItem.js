import { ITEM_SELECT } from '../types'

export default (selectedItem = null, action) => {
  switch (action.type) {
    case ITEM_SELECT:
      return selectedItem = action.payload.itemId
    default: {
      return selectedItem
    }
  }
}
