export const ADD_ITEM = 'ADD_ITEM'

/*
 * action creators
 */

export function addToList(text) {
  return { type: ADD_ITEM, text }
}