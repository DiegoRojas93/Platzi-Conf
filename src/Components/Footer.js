import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

function footer (props) {

    return(
      <React.Fragment>
        <div className="container-fluid align-items-center">
          <div className="row footer__bg-color text-white">
            <div className="col sm-6 m-2 align-items-center container-fluid d-flex">

              <div className="d-flex flex-column col sm-6 m-2 align-items-center">

                <h3 className="mr-3">Contáctanos</h3>

                <div className="d-flex">
                  <div className="input-group mx-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text ">Escribe tu mensaje</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                  </div>
                  <Link to="/404" className="btn btn-platzi text-center mx-2">Enviar</Link>
                </div>

              </div>

            </div>
            <div className="col sm-6 m-2 d-flex justify-content-center aling-items-center">
              <h4>Hecho con ❤ Diego Rojas</h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default footer