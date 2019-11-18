import { createStore } from 'redux'
import RootReducer from './Reducers'

const store = createStore(
  RootReducer,
  JSON.parse(localStorage.getItem('STATE')) || {},
)

store.subscribe(() => localStorage.setItem('STATE', JSON.stringify(store.getState())))

export default store