import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  componentDidMount(){
    console.log('GalleryList mounted:', this.props);
  } //end componentDidMount
  
  render() {
    return (
      <div>
          <h1>Gallery of Joel's life</h1>
          <ul>
          { this.props.galleryItems.map( ( item, index )=>
          <GalleryItem taco={ item } id={this.props.id} like={this.props.like} key={ index }/>)}
        </ul>
      </div>
    );
  }
}

export default GalleryList;
