import React, { Component } from 'react';

class GalleryItem extends Component {
  componentDidMount(){
    console.log( 'GalleryItem mounted:', this.props );   
  } // end componentDidMount
  
  render() {
    return (
      <div>
       <li>
         <p><img src={ this.props.taco.path} width="100px" alt={this.props.taco.description}/></p>
       </li>
      </div>
    );
  }
}

export default GalleryItem;
