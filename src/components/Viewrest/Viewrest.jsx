import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import ListGroup from 'react-bootstrap/ListGroup';   
import Restop from '../Restop/Restop';
import Restreview from '../Restreview/Restreview';

function Viewrest() {
    // const pathParameter=useParams()
    // console.log(pathParameter);//id:2 object
    // console.log(pathParameter.id);//2

//////////////////////////////////////////////OR////////////////////////////////////////////
    /////destructure parameter
    const {id}=useParams()
    console.log(id);


    //////last step state creation

    const [RestDetails,SetRestDetails]=useState({})

////Api call to get particular restaurant details
const fetchData=async ()=>{
    const response=await axios.get(`http://localhost:3001/restaurants/${id}`)
    console.log(response.data);
    SetRestDetails(response.data)
}
console.log(RestDetails);

useEffect(()=>{
    fetchData();
},[])

  return (
    <div>
        <Row>
         <Col>
           {/* image */}
           <img src={`${RestDetails.photograph}`} style={{width:'400px',margin:'20px',height:'500px',borderRadius:'50px',boxShadow:'2px 2px 3px 3px' }}/>
         </Col>
         <Col>
            {/* content */}

            <ListGroup style={{marginTop:'100px'}}>
      <ListGroup.Item><h1>Name:{RestDetails.name}</h1></ListGroup.Item>
      <ListGroup.Item> <h2>Cuisine type:{RestDetails.cuisine_type}</h2></ListGroup.Item>
      <ListGroup.Item> <h4>Address:{RestDetails.address}</h4></ListGroup.Item>
      <ListGroup.Item><h4>Neighbourhood:{RestDetails.neighborhood}</h4></ListGroup.Item>
      <br />
      <ListGroup.Item><h4><Restop op={RestDetails.operating_hours}/></h4></ListGroup.Item>

      <ListGroup.Item> <Restreview rw={RestDetails.reviews}/></ListGroup.Item>
     

    </ListGroup>
         </Col>
        </Row>
    </div>
  )
}

export default Viewrest