import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component{
  render(){
    return (
      <div className="Navbar">
      <div className="container-fluid"></div>
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">PLatzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    )
  }
}

export default Navbar