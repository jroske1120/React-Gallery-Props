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
        <li>
          {(this.state.details ?
            <p onClick={this.toggleDetails}>{this.props.photo.description}</p>
            : <p onClick={this.toggleDetails}><img src={this.props.photo.path} width="100px" alt={this.props.photo.description} /></p>
         )}
         <button onClick={() => this.props.like(this.props.photo.id)}>Like This Photo!</button>
         Likes:  {this.props.photo.likes}
        </li>
      </div>
    );
  }
}

export default GalleryItem;
