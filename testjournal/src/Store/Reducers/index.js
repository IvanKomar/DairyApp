import { combineReducers } from 'redux'

import ItemReducer from './Item'
import CommentReducer from './Comment'
import SelectedItemReducer from './SelectedItem'

export default combineReducers({
  items: ItemReducer,
  comments: CommentReducer,
  selectedItem: SelectedItemReducer,
})
