import { combineReducers } from 'redux'
import { showsReducer } from './tvShowReducer'

export const Reducers = combineReducers({
  showsState: showsReducer
})
