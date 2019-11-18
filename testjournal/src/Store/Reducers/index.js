import { combineReducers } from 'redux'

import ItemReducer from './Item'
import CommentReducer from './Comment'

export default combineReducers({
  items: ItemReducer,
  comments: CommentReducer,
})
