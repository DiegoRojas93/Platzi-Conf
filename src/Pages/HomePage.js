import React from 'react'

import './styles/HomePage.css'
import astronauts from '../images/astronauts.svg'
import platziConf from '../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'


class HomePage extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="container-fluid">

          <div className="row HomePage my-auto d-flex dlex-column align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column align-items-center">
              <img className="img-fluid" src={platziConf} alt="Logo"/>
              <h1>Print Your Badges</h1>
              <h5 className="text-center">The easiest way to manage your  conference</h5>
              <Link to="/badges" className="btn btn-platzi">Start Now</Link>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 d-flex align-items-center justify-content-center">
              <img src={astronauts} className="img-fluid" alt="astronautas"/>
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default HomePage