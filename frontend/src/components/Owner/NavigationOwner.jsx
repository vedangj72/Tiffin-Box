import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

function NavigationOwner() {
  return (
    <div>
      <header className="py-2">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav variant="pills" defaultActiveKey="/ownerPage/userAdd" className="flex-column m-4">
        <Nav.Item className="m-1">
            <Nav.Link as={NavLink} to="/ownerPage/allusers" className="text">Users</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-1">
            <Nav.Link as={NavLink} to="/ownerPage/userAdd" className="text">Add User</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-1">
            <Nav.Link as={NavLink} to="/ownerPage/seeFeedback" className="">Feedback</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-1">
            <Nav.Link as={NavLink} to="/ownerPage/addMenu" className="text">Add Menu</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
      <main className=' mt-2'>
        <Outlet />
      </main>
    </div>
  );
}

export default NavigationOwner;
