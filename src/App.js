import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { createStore } from 'redux'
import imageListApp from './reducers'
import {
  addToList,
} from './actions'


let store = createStore(imageListApp); 

class App extends Component {
  constructor() {
    super();
    this.state = {
      imagesList : [],
      showComponent : false
    };
    this._onFetchButtonClick = this._onFetchButtonClick.bind(this);
  }

  _onFetchButtonClick() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => {
      console.log(res)
      if(res.status == 200)
      {
        store.dispatch(addToList(res.status.toString()))
        this.setState({
          imagesList : res.data,
          showComponent : true
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div class="main"> 
        <button className="fetch" onClick={this._onFetchButtonClick}>Fetch</button>
        { this.state.showComponent ? <PhotosList listData = { this.state.imagesList } /> : null }
      </div>
    );
  }
}

class PhotosList extends Component {
  render() {
    console.log(this.props)
    var temp = this.props.listData
    var namesList = temp.map(function(item){
                        return <li>
                        {item.title} <a target="_blank" href={ item.thumbnailUrl }>
                                      <img src={ item.thumbnailUrl } />
                                    </a>
                        </li>;
                      })

    return (
      <ul>
        { namesList }
      </ul>
    )
  }
}
export default App;
