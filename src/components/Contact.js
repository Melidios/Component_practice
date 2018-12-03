import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class Contact extends Component {
  render(){

    return(
    <Panel id="contacts">
     <Panel.Body>Phone: XXX-XX-XX </Panel.Body>
     <Panel.Body>Email: xxx@lol.com</Panel.Body>
    </Panel>
  )}
}

export default Contact
