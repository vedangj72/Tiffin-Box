import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

function NavigationOwner() {
  return (
    <header className="py-3">
      <Container className="d-flex justify-content-center">
        <Nav  defaultActiveKey="/ownerPage/userAdd" className="flex-column">
          <Nav.Item>
            <Nav.Link  as={NavLink} to="/ownerPage/userAdd" >Add User</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={NavLink} to="/ownerPage/seeFeedback" >Feedback</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={NavLink} to="/ownerPage/addMenu" >Add Menu</Nav.Link>
          </Nav.Item>
        </Nav>
        
      </Container>
      <main>
        <Outlet/>
      </main>
    </header>
  );
}

export default NavigationOwner;
