import { ITEM_SELECT } from '../types'

export default {
  selectItem: (itemId) => {
    return {
      type: ITEM_SELECT,
      payload: {
        itemId,
      }
    }
  },
}
