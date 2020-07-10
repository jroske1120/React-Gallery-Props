import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    details: false
  } // end state

  componentDidMount() {
    console.log('GalleryItem mounted:', this.props);
  } // end componentDidMount

  toggleDetails = () => {
    this.setState({
      details: !this.state.details
    }) // end setState
  } // end toggleDetails

  render() {
    return (
      <div>
        <li onClick={this.toggleDetails}>
          {(this.state.details ?
            <p><img src={this.props.taco.path} width="100px" alt={this.props.taco.description} /></p>
            : <p>{this.props.taco.description}</p>
         )}
        </li>
      </div>
    );
  }
}

export default GalleryItem;
