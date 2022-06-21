import React from 'react';
import styles from '../../../CSS/Navbar.module.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

function navbar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: '35px' }}>
          u
          <span style={{ color: '#008dc8' }}>Connect</span>
        </a>
      </Navbar.Brand>
      <Form inline>
          <div className={styles.Middle}>
            <FormControl
              type="text"
              placeholder="Search"
              className={styles.Search}
            />
            <Button className={styles.SearchButton}>
              <AiOutlineSearch />
            </Button>
          </div>
        </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.ShiftRight}>
     
        <Button variant="outline-info">Login/Signup</Button>{' '}
        
   
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
