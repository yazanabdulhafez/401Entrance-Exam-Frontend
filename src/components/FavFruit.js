import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Col, Row,Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';
class FavFruit extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favData:[],
      showModal:false,
      name:'',
      image:'',
      price:'',
      id:0,
elementData:[],
    }
  }
  
  componentDidMount=()=>{
    const apiUrl=`${process.env.REACT_APP_BACKEND_URL}FavFruits?email=${this.props.auth0.user.email}`;
    axios.get(apiUrl).then(response=>{
      console.log(response.data.favFruits);
      this.setState({
        favData:response.data.favFruits,
      })
    }).catch(error=>console.log(error.message));
  }
  
  deleteFav=(id)=>{
    const deleteUrl=`${process.env.REACT_APP_BACKEND_URL}FavFruits/${id}?email=${this.props.auth0.user.email}`;
   
    axios.delete(deleteUrl).then(response=> {console.log(response.data.favFruits);
      this.setState({
        favData:response.data.favFruits,
      })
    })
    .catch(error=>console.log(error.message));
  }
  
  /////////////////////
setName=(e)=>{
  this.setState({
    name:e.target.value,
  })
}
setImageUrl=(e)=>{
  this.setState({
    image:e.target.value,
  })
}
setPrice=(e)=>{
  this.setState({
    price:e.target.value,
  })
}
  ///////////////////////

  showModal=(element,id)=>{
this.setState({
  id:id,
  showModal:!this.state.showModal,
elementData:element,
})
  };

  updateData=(e)=>{
    e.preventDefault();
    const updateUrl=`${process.env.REACT_APP_BACKEND_URL}FavFruits/${this.state.id}`;
    const dataBody={
      email:this.props.auth0.user.email,
      name: this.state.name,
        image:this.state.image,
    price: this.state.price
  }
    axios.put(updateUrl,dataBody).then(response=> {console.log(response.data.favFruits);
      this.setState({
        favData:response.data.favFruits,
        showModal:false,
      })
    })
    .catch(error=>console.log(error.message));
  }

  handleClose=()=>{
    this.setState({
      
      showModal:false,
    })
      };
  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        {
          <UpdateForm 
          element={this.state.elementData}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          updateData={this.updateData}
          setName={this.setName}
          setImageUrl={this.setImageUrl}
          setPrice={this.setPrice}
          />
        }
        <Row>
        { this.state.favData.map((element,index)=>{
        return <Col key={index}style={{margin:'20px'}}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={element.image} />
  <Card.Body style={{overflow:'auto'}}>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
    price: {element.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button onClick={()=>this.showModal(element,element._id)} variant="warning">Update</Button>
  <Button onClick={()=>this.deleteFav(element._id)} variant="danger">Delete</Button>
  </Card.Footer>
</Card>
        </Col>
      }
      ) 
  }
  </Row>
      </>
    )
  }
}

export default withAuth0(FavFruit);
