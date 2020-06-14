import React from 'react'

import './styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component{
  render(){
    return (
      <div className="Navbar">
      <div className="container-fluid"></div>
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">PLatzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    )
  }
}

export default Navbar