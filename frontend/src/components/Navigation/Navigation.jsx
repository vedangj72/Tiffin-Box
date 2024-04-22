import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/userSlice';

function Navigator() {
  const { name, isloggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: "#ffc30099", height: "40px" }}>
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
            {isloggedIn ? (
              <Nav.Link className={'text-end'} onClick={handleLogout} as={NavLink} to="/login">Logout</Nav.Link>
            ) : (
              <Nav.Link className={'text-end'} as={NavLink} to="/login">Login</Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ backgroundColor: "#ffc30099", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "1200px", padding: "20px" }}>
          &copy; 2024 vedangjoshi772@gmail.com <br />
          Phone: +91-8668604093
        </div>
      </footer>
    </div>
  );
}

export default Navigator;
