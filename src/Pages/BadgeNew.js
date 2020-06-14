import React from 'react'

import Navbar from '../Components/Navbar'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'

import header from '../images/badge-header.svg'

import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Diego"
                lastName="Rojas"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                jobTitle="Developer Frontend Jr"              twitter="DiegoRo65061830"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                // firstName="Diego"
                // lastName="Rojas"
                // avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                // jobTitle="Developer Frontend Jr"              twitter="DiegoRo65061830"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew