import { combineReducers } from 'redux'
import {
  ADD_ITEM,
} from './actions'

function imagesList(state = [], action){
  switch(action.type) {
    case ADD_ITEM: 
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    
  }
}

const imagesListApp = combineReducers({
  imagesList
})

export default imagesList