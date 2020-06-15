import React from 'react'

class BadgeForm extends React.Component{

  // state = {}

  // handleChange = e =>{
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value
  //   // });

  //   this.setState({
  //     [e.target.name] : e.target.value
  //   })
  // }
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
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={this.props.firstName}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={this.props.lastName}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
            onChange={this.props.onChange}
            className="form-control"
            type="email"
            name="email"
            value={this.props.Email}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Job Tittle</label>
            <input
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={this.props.jobTitle}
            >
            </input>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={this.props.twitter}
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