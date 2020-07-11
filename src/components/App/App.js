import React, { Component } from 'react';
// import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {
  state = {
    galleryItems: []
  }

  componentDidMount() {
    console.log('Gallery mounted');
    this.getGalleryItems();
  }

  getGalleryItems() {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('back from GET:', response.data);
      this.setState({
        galleryItems: response.data
      });
    }).catch((error) => {
      console.log(error);
      alert('Get no worky werk');
    })
  }

  //PUT function to increment likes
  putGalleryLikes = (id) => {
    console.log('in putGalleryLikes');
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((response) => {
      console.log('back from PUT:', response);
      this.getGalleryItems();
    }).catch((error) => {
      console.log(error);
      alert('Put no worky werk');
    })
  }//end putGalleryLikes

  //function to add pic via form
  addSong = (songToAdd) => {
    console.log('Adding song', songToAdd);
    //Send it to the server
    Axios({
      method: 'POST',
      url: '/gallery',
      data: songToAdd
    })
      .then( (response) => {
        this.getGalleryItems();
      })
      .catch( (error) => {
        console.log( 'Error adding songs', error);
      })
  }//end add POST

  render() {
    return (
      <div className="App">
        {/* <img src="images/goat_small.jpg" /> */}
        <GalleryForm addSong={this.addSong} />

        <GalleryList like={this.putGalleryLikes} galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;
