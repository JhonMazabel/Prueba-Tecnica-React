import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className='navbar'>
      <Navbar.Brand as={Link} to="/">ProjectManager</Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
