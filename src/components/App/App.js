import React, { Component } from 'react';
// import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItems: []
  }

  componentDidMount() {
    console.log('Gallery mounted');
  }

  getGalleryItems() {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response)=>{
      console.log('back from GET:', response.data);
      this.setState({
        galleryItems: response.data
      }); 
    }).catch((error)=>{
      console.log(error);
      alert('Get no worky werk');
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg" /> */}
      <GalleryList galleryItems={ this.state.galleryItems}/>
      </div>
    );
  }
}

export default App;
