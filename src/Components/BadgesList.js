/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './styles/BadgesList.css'
class BadgesList extends React.Component {
  render(){
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.data.map((badge)=>{
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
                        <h3>
                          {badge.firstName} {badge.lastName}
                        </h3>

                        <div className="d-flex">
                          <p className="text-success text-align-center font-weight-bold">Job:</p>
                          <h5 className="text-dark">{badge.jobTitle}</h5>
                        </div>

                        <p className=" text-primary">@{badge.twitter}</p>

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