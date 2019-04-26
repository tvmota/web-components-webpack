import { UPDATE_SHOW_LIST } from '../actions/actionsTypes'

const initialState = {
  showList: []
}

export const showsReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_SHOW_LIST:
      return { ...state, showList: action.showList }
      break
    default:
      return state
  }
}