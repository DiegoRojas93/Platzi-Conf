import React from 'react'

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'
import PageLoading from '../Components/PageLoading'
import api from '../api'
import md5 from 'md5'

class BadgeEdit extends React.Component{

  state = {
    loading: true,
    error: null,
    form:{
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async e =>{
    this.setState({ loading: true, error: null})

    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({loading:false, form:data})
    }catch(error){
      this.setState({ loading: false, error:error })
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
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

        <div className="BadgeEdit__hero">
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit