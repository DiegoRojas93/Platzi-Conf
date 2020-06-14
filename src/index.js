import React from 'react';
import ReactDom from 'react-dom';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

import BadgeNew from './Pages/BadgeNew'

const container = document.getElementById('app');

ReactDom.render(<BadgeNew
  
  />,
  container
)