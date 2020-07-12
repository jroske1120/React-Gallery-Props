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

  //target property values
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
        <form>
          {/* MUI's input and Button styles  */}
          <Input
            placeholder='URL'
            value={this.state.pic.path}
            onChange={(event) =>
              this.handleChangeFor(event, 'path')} />
          <br></br>
          <Input
            placeholder='Description'
            value={this.state.pic.description}
            onChange={(event) =>
              this.handleChangeFor(event, 'description')} />
          {/* breaks to separate inputs and button */}
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}>
            Add to the collection</Button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
