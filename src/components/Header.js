import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
  padding: '10px 20px 10px 20px', //top right bottom left
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
      <div className="my-jumbotron-inner">
      <h3>Anthropic Bot</h3>
      <p>
        Ask me anything!
      </p>
    </div>
      </Container>
    </Navbar>
  );
};

export default Header;