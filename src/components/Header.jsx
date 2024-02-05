import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <a href="/">
        <img src='/images/logo.svg' alt='Tesla Logo' />
      </a>
      <MobileMenuIcon onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`} />
        <div className={`bar ${showMenu ? 'open' : ''}`} />
        <div className={`bar ${showMenu ? 'open' : ''}`} />
      </MobileMenuIcon>
      <Menu showMenu={showMenu}>
        <MenuItem><a href='#'>Model S</a></MenuItem>
        <Line />
        <MenuItem><a href='#'>Model 3</a></MenuItem>
        <Line />
        <MenuItem><a href='#'>Model X</a></MenuItem>
        <Line />
        <MenuItem><a href='#'>Model Y</a></MenuItem>
        <Line />
        <MenuItem><a href='#'>Shop</a></MenuItem>
        <Line />
        <MenuItem><a href='#'>Tesla Account</a></MenuItem>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 650px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;


  @media (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;



const MenuItem = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  white-space: nowrap;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 5px 0;
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .bar {
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 6px 0;
      transition: 0.4s;
    }

    .open:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .open:nth-child(2) {
      opacity: 0;
    }

    .open:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;
