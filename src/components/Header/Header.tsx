import * as React from 'react';
import './Header.css';
import logoSvg from '../../assets/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logoSvg} className="logo" alt="logo" />
        <h1 className="title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
