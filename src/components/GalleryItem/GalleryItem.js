import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

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
      <List>
        <ListItem>
          {(this.state.details ?
            <p onClick={this.toggleDetails}>{this.props.photo.description}</p>
            : <p onClick={this.toggleDetails}><img src={this.props.photo.path} width="250px" alt={this.props.photo.description} /></p>
          )} </ListItem>
        <ListItem>
          <Button onClick={() => this.props.like(this.props.photo.id)}>Like This Photo!</Button>
            Likes:  {this.props.photo.likes}
        </ListItem>
        <ListItem>
          <Button onClick={() => this.props.delete(this.props.photo.id)}>Remove This Photo</Button>
        </ListItem>
      </List>
    );
  }
}

export default GalleryItem;
