import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/userSlice';
import Logo from "../../asset/logo-color.png";

function Navigator() {
  const { isloggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Dispatch logout action
    dispatch(logout());
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar expand="md" style={{ backgroundColor: "rgb(233 237 234)" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              <img src={Logo} alt="logo" style={{ height: "40px", width: "40px" }} />
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/feedbackform">Feedback</Nav.Link>
          </Nav>
          {isloggedIn ? (
            <Nav.Link onClick={handleLogout} as={NavLink} to="/login">Logout</Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {/* <footer style={{ backgroundColor: "rgb(233 237 234)", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "1200px", padding: "20px" }}>
          &copy; 2024 vedangjoshi772@gmail.com <br />
          Phone: +91-8668604093
        </div>
      </footer> */}
    </div>
  );
}

export default Navigator;
