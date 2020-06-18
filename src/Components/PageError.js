import React from 'react';

import './styles/PageError.css'
import Error503 from '../images/Error503.svg'

function PageError (props) {
  return (
    <React.Fragment>
      <div className="PageError">
        <img className="img-fluid Error503" src={Error503} alt="Error503"/>

        {/* <span role="img" aria-label="Error">
          ❌{props.error.message} 😱
        </span> */}
      </div>
    </React.Fragment>
  )
}

export default PageError