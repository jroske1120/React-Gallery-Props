import React, { Component } from 'react';

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
    this.props.addSong( this.state.pic );
    // Clear form inputs
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
          <input placeholder='URL'  
          onChange={(event) => this.handleChangeFor(event, 'path')}/>
          <input placeholder='Description'  
          onChange={(event) => this.handleChangeFor(event, 'description')}/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
