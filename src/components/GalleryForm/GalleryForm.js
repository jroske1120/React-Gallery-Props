import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';


class GalleryForm extends Component {
  useStyles = makeStyles((theme) => ({
    root: {
    }
  }));

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
          <Input className={this.useStyles.root} placeholder='URL'
            onChange={(event) => this.handleChangeFor(event, 'path')} />
          <br></br>
          <Input className={this.useStyles.root} placeholder='Description'
            onChange={(event) => this.handleChangeFor(event, 'description')} />
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}>Add</Button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
