import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="http://cdn.onlinewebfonts.com/svg/img_8721.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TOPFORM
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header