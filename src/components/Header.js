import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return(
      <Navbar style={{justifyContent:'space-between'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>My Favorite Fruits</Navbar.Brand>
        </Container>
        <Container>
        <Link to="/">Home </Link>
        <Link to="/favFruit"> Fav-Fruits</Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
