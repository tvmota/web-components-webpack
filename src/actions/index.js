import { UPDATE_SHOW_LIST } from './actionsTypes'

export const updateShows = updatedList => ({
  type: UPDATE_SHOW_LIST,
  showList: updatedList
})