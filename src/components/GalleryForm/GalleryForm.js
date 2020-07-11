import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class GalleryForm extends Component {

  state = {
    pic: {
      path: '',
      description: '',
    }
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      pic: {
        ...this.state.pic,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPhoto(this.state.pic);
    // Clear Form inputs
    this.setState({
      pic: {
        path: '',
        description: ''
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Add a Pic</h2>
        <form>
          {/* input value={this.state.pic.path} and value={this.state.pic.description}  */}
          <Input placeholder='URL'
            onChange={(event) => this.handleChangeFor(event, 'path')} />
          <Input placeholder='Description'
            onChange={(event) => this.handleChangeFor(event, 'description')} />
          <Button onClick={this.handleSubmit}>Add</Button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
