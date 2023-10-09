import React from 'react'
import './Restcard.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {  ////parent to child data passing
    console.log(restaurant);
  return (
    <div>
<Link to={`/view/${restaurant.id}`} style={{textDecoration:'none',color:'black'}} >
<Card style={{ height: '650px' }} id='card'>
      <Card.Img id='img' variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Title>
          Address:{restaurant.address}
          Neighbourhood:{restaurant.neighborhood}
          Cuisine Type:{restaurant.cuisine_type}
        </Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card></Link>
    </div>
  )
}

export default Restcard