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
    data: undefined,
    modalIsOpen: false
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

  handleDeleteBadge = async e => {
    this.setState({Loading: true, error: null})

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({loading:false})

      this.props.history.push('/badges')
    } catch (error) {

      this.setState({loading:false, error: error})
    }
  }

  handleOpenModal = e =>{
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = e =>{
    this.setState({modalIsOpen: false})
  }

  render(){
    if (this.state.loading){
      return <PageLoading/>
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>
    }


    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    )
  }
}

export default BadgeDatailsContainer