// 👋Hola chicos, **este es el resumen de la clase.**

// Generalmente para poder maquetar nuestra pagina web por medio de Js vanilla tiende hacer tedioso a medida que crece el proyecto.

// **_Ejemplo:_**

// ```
// const element = document.createElement('h1'); //Crea la etiqueta H1

// element.innerText = 'Hello, Platzi Badges!'; // Crea y guarda el conteniido de la etiqueta h1

// const container = document.getElementById('app'); //Obtenemos el id de la etiqueta div del archivo public=>index.HTML

// container.appendChild(element); // Agrega el h1 (con todo su contenido) internamente del la etiqueta div del archivo index.HTML

// /* appendChild: Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado, es dicir, que si un elemento padre (el container es esta ocacion que hace regerecia al div) se le puede agregar un nuevo contenido (el element)

// Nota: si el div tiene mas conetido(más etiquetas o estructuras intenas), al hacer ejecutado appendChild, se agregara el elemento al final de este contenido*/
// ```

// Gracias a React podemos mejorar nuestra forma de escribir el codigo de una forma más prolija.

// **_Ejemplo:_**


import React from 'react'; //Permitira escribir nuestro codigo con esta nueva sintaxis que vamos a aprender (JSX)
import ReactDOM from 'react-dom'; // Permite traer la funcionalidad de renderizar (Dibujar en el DOM) el codigo escrito (JSX)

const element = <h1>Hello, Platzi Badges!</h1>; // Sintaxis JSX

const container = document.getElementById('app'); // Obtenemos el id de la etiqueta div del archivo public=>index.HTML



// ReactDOM.render(__¿Qué vamos a renderizar?__, __¿En dónde lo vamos hacer?__);

ReactDOM.render(element, container); // Funcion que renderizara el codigo