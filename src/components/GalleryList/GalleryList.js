import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  componentDidMount() {
    console.log('GalleryList mounted:', this.props);
  } //end componentDidMount

  render() {
    return (
      <div>
        {this.props.galleryItems.map((item, index) =>
          <GalleryItem photo={item}
            id={this.props.id}
            delete={this.props.delete}
            like={this.props.like} key={index}
          />)}
      </div>
    );
  }
}

export default GalleryList;
