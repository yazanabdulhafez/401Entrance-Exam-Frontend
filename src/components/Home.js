import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Fruit from './Fruit';
class Home extends React.Component {
constructor(props){
  super(props);
  this.state={
    apiData:[],
  }
}

componentDidMount=()=>{
  const apiUrl=`${process.env.REACT_APP_BACKEND_URL}Fruits`;
  axios.get(apiUrl).then(response=>{
    console.log(response.data.fruits);
    this.setState({
      apiData:response.data.fruits,
    })
  }).catch(error=>console.log(error.message));
}

addNewFavFruit=(element)=>{
  const creatUrl=`${process.env.REACT_APP_BACKEND_URL}FavFruits`;
  const dataBody={
      email:this.props.auth0.user.email,
      name: element.name,
        image:element.image,
    price: element.price

  }
  axios.post(creatUrl,dataBody).then(response=> console.log(response.data))
  .catch(error=>console.log(error.message));
}

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        
          <Fruit apiData={this.state.apiData} 
          addNewFavFruit={this.addNewFavFruit}
          />
        
      </>
    )
  }
}

export default withAuth0(Home);
