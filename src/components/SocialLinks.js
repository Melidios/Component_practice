import React, { Component } from 'react';
import {ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap'

class SocialLinks extends Component {
  render(){

    return(
    <div>
      <ButtonToolbar>
        <ButtonGroup>
          <Button bsSize="small" href='https://github.com/Melidios'>
          <Glyphicon glyph="thumbs-up" /> GitHub
          </Button>
          <Button bsSize="small" href='https://www.linkedin.com/in/kskhodyreva/'>
          <Glyphicon glyph="star" /> Linkedin
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  )}
}

export default SocialLinks
