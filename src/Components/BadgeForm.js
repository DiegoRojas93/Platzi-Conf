import React from 'react'

class BadgeForm extends React.Component{

  state = {}

  handleChange = e =>{
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // });

    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick = e =>{
    console.log('El boton fue clickeado');
  }
  handleSubmit = e =>{
    e.preventDefault(); //intentamos que el formulatio no recargue la pagina al hacer click al boton
    console.log('El formulario fue submiteado');
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="firstName"
            value={this.state.firstName}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="lastName"
            value={this.state.lastName}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
            onChange={this.handleChange}
            className="form-control"
            type="email"
            name="email"
            value={this.state.Email}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Job Tittle</label>
            <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={this.state.jobTitle}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="twitter"
            value={this.state.twitter}
            >
            </input>


          </div>

          <button onClick={this.handleClick} className="btn btn-primary form-group">save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm