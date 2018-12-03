import React, { Component } from 'react';
import Contact from './Contact';
import SocialLinks from './SocialLinks';

class Footer extends Component {
  render(){

    return(
    <div id="footer">
     <Contact />
     <SocialLinks />
    </div>
  )}
}

export default Footer
