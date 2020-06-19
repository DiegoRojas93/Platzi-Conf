/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {Link} from 'react-router-dom'
import './styles/BadgesList.css'

function useSearchBadges(badges){

  const [query, setQuery] = React.useState('')
  const [ filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(()=>{
    const result = badges.filter( badge =>{
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    })

    setFilteredBadges(result)
  }, [badges, query])

  return {query, setQuery, filteredBadges}
}

function BadgesList (props) {

  const badges = props.badges

  const {query, setQuery, filteredBadges} = useSearchBadges(badges)

  if (filteredBadges.length === 0){
    return (
      <div>

        <div className="form-group">
          <label> Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) =>{
              setQuery(e.target.value)
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
      </div>
    )
  }

  return (
    <ul className="list-unstyled BadgesList">

      <div className="form-group">
        <label> Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e) =>{
            setQuery(e.target.value)
          }}
        />
      </div>

      {filteredBadges.map((badge)=>{
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

                      <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>

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
};

export default BadgesList;