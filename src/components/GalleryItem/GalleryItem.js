import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';



class GalleryItem extends Component {
  useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  // set initial boolean to false, can be changed onClick
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
        {/* Material UI's (MUI) Grid set-up
        for one column of pics */}
        <Grid className={this.useStyles.root}
          container direction="column"
          justify="center"
          alignItems="center"
        >
          {/* ternary operator to see description of
          the photo if it is clicked */}
          {(this.state.details ?
            <p className="descr-p" onClick={this.toggleDetails}>
              {this.props.photo.description}</p>
            : <p onClick={this.toggleDetails}>
              <img className="img-in"
                src={this.props.photo.path} width="80%"
                alt={this.props.photo.description} /></p>
          )}
          {/* MUI's Button setup for primary and secondary btns.
          Some spacing spans placed in buttons to separate elements */}
          <ButtonGroup
            variant="contained"
            color="primary">
            <Button
              onClick={() =>
                this.props.like(this.props.photo.id)}>
              <h1>{this.props.photo.likes}</h1>
              <span className="space-span"></span>
              <img src="https://i.ya-webdesign.com/images/first-clipart-in-line-5.png"
                alt="like btn" height="40px" />
            </Button>
            <Button
              color="secondary"
              onClick={() =>
                this.props.delete(this.props.photo.id)}>
              <span className="space-span"></span>
              <img src="https://i.ya-webdesign.com/images/delete-icon-png-4.png"
                alt="delete btn" height="30px" />
              <span className="space-span"></span>
            </Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}

export default GalleryItem;
