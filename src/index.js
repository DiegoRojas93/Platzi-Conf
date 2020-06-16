import React from 'react';
import ReactDom from 'react-dom';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

import App from './Components/App'

const container = document.getElementById('app');

ReactDom.render(<App
  />,
  container
)