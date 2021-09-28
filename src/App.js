import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import Login from './components/Login';
import FavFruit from './components/FavFruit';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header auth0={this.props.auth0} />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `Home` component, if they are not, render the `Login` component */}
              {isAuthenticated?<Home auth0={this.props.auth0} />:<Login />}
              </Route>
              <Route exact path="/favFruit">
                {/* TODO: if the user is logged in, render the `FavFruit` component, if they are not, render the `Login` component */}
                {isAuthenticated?<FavFruit auth0={this.props.auth0} />:<Login />}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
