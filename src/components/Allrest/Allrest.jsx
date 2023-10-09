import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import child component in parent component
import Restcard from '../Restcard/Restcard'
import { Collapse } from '@mui/material'

function Allrest() {
  ///to hold all restaurant details in the form of array
  const[allrestaurant,setallrestaurant]=useState([])
  const fetchdata=async()=>
  {
    const response= await axios('http://localhost:3001/restaurants')
    console.log(response.data);
    setallrestaurant(response.data)
  }
console.log(allrestaurant);
  useEffect(()=>{
    fetchdata()//function call
  },[])
  return (
    <div>

      <Row>
      {
        allrestaurant.map((item)=>(       //use paranthesis 

        <Col sm={12} md={6} lg={4} xl={3}><Restcard restaurant={item}/></Col>  //assign item to a variable-restaurnat
        ))
      }
      </Row>
      
    </div>
  )
}

export default Allrest