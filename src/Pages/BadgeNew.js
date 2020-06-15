import React from 'react'

import Navbar from '../Components/Navbar'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'

import header from '../images/badge-header.svg'

import './styles/BadgeNew.css'

class BadgeNew extends React.Component{

  state = {
    form:{
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  handleChange = e => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value

    // this.setState({
    //   form: nextForm
    // })

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value,
      }
    })
  }
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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}              twitter={this.state.form.twitter}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew