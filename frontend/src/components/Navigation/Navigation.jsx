import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Navigator() {
  return (
    <div>
      <header style={{backgroundColor:"#ffc30099", height:"40px"}}> 
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link as={NavLink} to="/feedbackform">Feedback</Nav.Link>
          </Nav.Item>
          <Nav.Item className='ms-auto'>
            <Nav.Link className={' text-end '} as={NavLink} to="/login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Links and contact us</footer>
    </div>
  );
}

export default Navigator;
