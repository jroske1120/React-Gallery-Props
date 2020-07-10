import React, { Component } from 'react';

class GalleryItem extends Component {
  componentDidMount(){
    console.log( 'GalleryItem mounted:', this.props );   
  } // end componentDidMount
  
  render() {
    return (
      <div>
       <li>
         <p>{ this.props.thisItem}</p>
       </li>
      </div>
    );
  }
}

export default GalleryItem;
