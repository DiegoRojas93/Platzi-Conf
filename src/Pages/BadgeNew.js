import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'
import PageLoading from '../Components/PageLoading'
import api from '../api'
import md5 from 'md5'
class BadgeNew extends React.Component{

  state = {
    loading: false,
    error: null,
    form:{
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  gravatarUrl = (text) =>{
    return `https://www.gravatar.com/avatar/${md5(text)}?d=identicon`
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value,
        [`avatarUrl`] : this.gravatarUrl(this.state.form.email)
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error:null })

    try{
      await api.badges.create(this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges')
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }
  render(){
    if(this.state.loading){
      return <PageLoading />
    }
    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container mb-5">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'TWITTER'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew