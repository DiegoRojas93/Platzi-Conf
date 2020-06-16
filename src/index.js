import React from 'react';
import ReactDom from 'react-dom';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

import BadgeNew from './Pages/BadgeNew'
import Badges from './Pages/Badges'

const container = document.getElementById('app');

ReactDom.render(<Badges
  />,
  container
)