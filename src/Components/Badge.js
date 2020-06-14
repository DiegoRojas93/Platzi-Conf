import React from 'react'

import confLogo from '../images/badge-header.svg'

// class Badge extends React.Component{
//   render(){
//     return(
//       <h1>soy un componente</h1>
//     )
//   }
// }

class Badge extends React.Component{
  render(){
    return(
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />

          <h1>Diego<br/>Rojas</h1>
        </div>

        <div>
          <p>Frontend Enginner</p>
          <p>@Mordelon4304</p>
        </div>

        <div>
          #PlatziConf
        </div>
      </div>
    )
  }
}

export default Badge