export const GET_LIST = 'GET_LIST'
export const GOT_LIST = 'GOT_LIST'

/*
 * action creators
 */

export function gotList(text) {
  return { type: GOT_LIST, text }
}