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
      <div >
        <Grid className={this.useStyles.root}
          container direction="column"
          justify="center"
          alignItems="center"
        >
          {(this.state.details ?
            <p onClick={this.toggleDetails}>
              {this.props.photo.description}</p>
            : <p onClick={this.toggleDetails}>
              <img src={this.props.photo.path} width="400px"
                alt={this.props.photo.description} /></p>
          )}
          <ButtonGroup 
            variant="contained"
            color="primary">
            <Button 
            onClick={() =>
              this.props.like(this.props.photo.id)}>
              <h1>{this.props.photo.likes}</h1>
              <span className="space-span"></span>
              <img src="https://i.ya-webdesign.com/images/first-clipart-in-line-5.png"
               alt="like btn" height="40px"/>
               <span className="space-span"></span>
              </Button>
            <Button
              color="secondary"
              onClick={() =>
                this.props.delete(this.props.photo.id)}>
              <img src="https://lh3.googleusercontent.com/proxy/-OKWRS3ZBAmMfxyy7Qhsq-_sCKMtHDBby8en_Ol-VuSXIUOH5MVs18D931K7gcAVXxQ36F-_lQG08cu-0cfositnfFe2xWXS7XX5OH31QyH_sy9hpjVAGjGpnHZaWmxGvczl"
               alt="delete btn" height="30px"/> </Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}

export default GalleryItem;
