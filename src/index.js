import React from 'react';
import ReactDom from 'react-dom';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

import Badge from './Components/Badge'

const container = document.getElementById('app');

ReactDom.render(<Badge
  firstName="Diego"
  lastName="Rojas"
  avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
  jobTitle="Developer Frontend Jr" twitter="DiegoRo65061830"
  />,
  container
)