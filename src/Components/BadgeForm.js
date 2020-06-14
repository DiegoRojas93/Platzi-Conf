import React from 'react'

class BadgeForm extends React.Component{

  handleChange = e =>{
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }
  handleClick = e =>{
    console.log('El boton fue clickeado');
  }
  handleSubmit = e =>{
    e.preventDefault(); //intentamos que el formulatio no recargue la pagina al hacer click al boton
    console.log('El formulario fue submiteado');
  }

  render(){
    return(
      <div>
        <h1>New Attendant</h1>

        <form>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"></input>
          </div>

          <button type="button" onClick={this.handleClick} className="btn btn-primary">save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm