import { combineReducers } from 'redux'
import {
  GOT_LIST,
} from './actions'

function imagesList(state = [], action){
  switch(action.type) {
    case GOT_LIST: 
      return [
        ...state,
        {
          text: action.text,
          completed: true
        }
      ]
    
  }
}

const imagesListApp = combineReducers({
  imagesList
})

export default imagesList