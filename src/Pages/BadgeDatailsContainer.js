import React from 'react'
import { Link } from 'react-router-dom'


import PageLoading from '../Components/PageLoading'
import PageError from '../Components/PageError'
import BadgeDetails from './BadgesDetails'

import api from '../api'

class BadgeDatailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading:true, error:null})

    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading: false, data:data})
    }catch (error){
      this.setState({loading: false, error:error})
    }
  }

  render(){
    if (this.state.loading){
      return <PageLoading/>
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>
    }


    return (
      <BadgeDetails badge={this.state.data} />
    )
  }
}

export default BadgeDatailsContainer