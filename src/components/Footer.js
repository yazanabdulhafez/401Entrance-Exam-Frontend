import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar style={{display:'flex',justifyContent:'center'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy; Fruits App</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
