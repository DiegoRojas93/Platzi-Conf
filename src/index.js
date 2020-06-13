import React from 'react';
import ReactDom from 'react-dom';

const container = document.getElementById('app');

const expresión = 'soy una expresion, lo que quiere decir que soy una algo que se va a evaluar por parte de JavaScript como una operacion (suma, resta, etc) o una funcion, etc.';

/*---------------------React.createElement---------------------*/

// Esta sintaxis no es la mas popular de para escribir nuestro codigo pero hace lo mismo que JSX //

// const elemento = React.createElement(
//   'div',                 // Etiqueta
//   {},                    // priopiedad de la Etiqueta
//   'Soy su contenido'     // Contenido de la etiqueta
// )

// const createElement = React.createElement(
//   'div',
//   {},
//   React.createElement(
//     'h1',
//     {},
//     'Hola! soy Diego'
//   ),
//   React.createElement(
//     'a',
//     { href:'https://Platzi.com' },
//     'Hola soy un link'
//   ),
//   React.createElement(
//     'P',
//     {},
//     `Hola!, ${expresión}`
//   )
// )

// ReactDom.render(createElement, container);

/*-----------------------------JSX------------------------------*/

// Esta es la sintaxis que vamos a utilizar y la que propone React para la creacion de nuestro codigo //

const jsx =(
  <div>
    <h1>Hola Soy Diego</h1>
    <a href='https://Platzi.com'>Hola soy un link</a>
    <p>Hola!, {expresión}</p>
  </div>
)
ReactDom.render(jsx, container)