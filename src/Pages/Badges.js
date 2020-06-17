import React from 'react'
import {Link} from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../Components/BadgesList'

class Badges extends React.Component{

  constructor(props){
    super(props)
    console.log('1. contructor()');
    this.state={
      data:[],
    }
  }

  componentDidMount(){
    console.log('3. componentDitMount()');

    this.timeoutId = setTimeout(()=>{
    this.setState({
      data:[
        {
          id: '1',
          firstName: 'Fredy',
          lastName: 'Grady',
          email: 'Leann_Berge@gmail.com',
          jobTitle: 'LegacyBrandDirector',
          twitter: 'FredaGrady22221-7573',
          avatarUrl:
            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
        },
        {
          id: '2',
          firstName: 'Major',
          lastName: 'Rodriguez',
          email: 'Ilene66@hotmail.com',
          jobTitle: 'HumanResearchArchitect',
          twitter: 'MajorRodriguez61545',
          avatarUrl:
            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
        },
        {
          id: '3',
          firstName: 'Daphney',
          lastName: 'Torphy',
          email: 'Ron61@hotmail.com',
          jobTitle: 'NationalMarketsOfficer',
          twitter: 'DaphneyTorphy96105',
          avatarUrl:
            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
        },
      ],
    })
    },3000)

  }

  componentDidUpdate(prevProps, prevState){
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps, prevState: prevState
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount(){
    console.log(`6. componentWillUnmount()`)
    clearTimeout(this.timeoutId)
  }

  render () {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div>
          <div className="Badges__hero" >
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Logo"/>
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badges
            </Link>
          </div>
          <div className="Badges__list" >
            <div className="Badges__container" >

              <BadgesList data={this.state.data}/>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges