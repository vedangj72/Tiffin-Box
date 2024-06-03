import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from "../assect/logo-black.png";
import './Navigator.css';

function Navigator() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <nav className="nav flex-column bg-light p-3" style={{ width: '150px' }}>
        {/* <div className="text-center mb-3">
          
        </div> */}
        <NavLink to="/" className="nav-link"><img src={Logo} alt="logo" style={{ height: "40px", width: "40px" }} /></NavLink>
        <NavLink to="/menu" className="nav-link">Menu</NavLink>
        <NavLink to="/feedback" className="nav-link">Feedback</NavLink>
        <NavLink to="/adduser" className="nav-link">Add User</NavLink>
        <NavLink to="/update" className="nav-link">Updates</NavLink>
        {/* <NavLink to="/login" className="nav-link">Login</NavLink> */}
      </nav>
      <main className="flex-grow-1 p-3">
        <Outlet />
      </main>
    </div>
  );
}

export default Navigator;
