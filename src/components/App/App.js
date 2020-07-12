import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {
  state = {
    galleryItems: []
  }

  // mount get to the DOM
  componentDidMount() {
    console.log('Gallery mounted');
    this.getGalleryItems();
  }

  //function to add pic via form
  addPhoto = (addedPhoto) => {
    console.log('Adding photo', addedPhoto);
    //Send it to the server
    Axios({
      method: 'POST',
      url: '/gallery',
      data: addedPhoto
    })
      .then((response) => {
        this.getGalleryItems();
        // gets images, including new one
      })
      .catch((error) => {
        console.log('Error adding songs', error);
      })
  }//end add POST

  deletePic = (id) => {
    console.log('in deletePic');
    // Confirmation ask to delete. If ok'd, run delete
    let theyAreSure = window.confirm(
      "Are you sure you want to remove this picture?"
    );
    if (theyAreSure) {
      Axios({
        method: 'DELETE',
        url: `/gallery/${id}`
      }).then((response) => {
        console.log('back from DELETE:', response);
        this.getGalleryItems();
      }).catch((error) => {
        console.log(error);
        alert('DELETE no worky werk');
      });
    } else {
      console.log('Reconsidered');
    }
  }

  getGalleryItems() {
    // Get the pics from the server
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

  //PUT function to increment likes, target by id
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

  render() {
    return (
      <div className="App">
        {<h1 className="header">Gallery of Joel's life</h1>}

        <GalleryForm addPhoto={this.addPhoto} />
        <GalleryList delete={this.deletePic} like={this.putGalleryLikes} galleryItems={this.state.galleryItems} />
      </div>
    ); //end return
  } //end render
} //end component

export default App;
