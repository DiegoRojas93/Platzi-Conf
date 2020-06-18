/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
class BadgesList extends React.Component {
  render(){

    if (this.props.badges.length === 0){
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-prymary" to="/badges/new">Create new badge</Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge)=>{
          return (
            <div className="card shadow-lg mt-2 p-3 rounded">
              <div className="cardBody">

                <div className="container">
                  <div className="row">

                    <div className="col-sm-3">
                      <img src={badge.avatarUrl} className="rounded"/>
                    </div>

                    <div className="col-sm-9 justify-contend-start">
                      <li key={badge.id}>

                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>

                          <h3>
                            {badge.firstName} {badge.lastName}
                          </h3>

                          <div className="d-flex">
                            <p className="text-success text-align-center font-weight-bold mr-1">Job:</p>
                            <h5 className="text-dark">{badge.jobTitle}</h5>
                          </div>

                          <p className=" text-primary">@{badge.twitter}</p>

                        </Link>

                      </li>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </ul>
    )
  }
};

export default BadgesList;