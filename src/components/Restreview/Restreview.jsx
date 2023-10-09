import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({rw}) {
    console.log(rw);//array of reviews
    const [open, setOpen] = useState(false);
  return (
    <div>
         <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {rw?.map((item)=>(
            <p>
                <h4>{item.name}</h4>
                <h5>{item.date}</h5>
                <h3>{item.rating}</h3>
                <h6>{item.comments}</h6>
            </p>
          ))}
        </div>
      </Collapse>
    </div>
  )
}

export default Restreview