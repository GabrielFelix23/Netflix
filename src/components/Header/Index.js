import React from 'react'
import {Link} from 'react-router-dom'

import {Container} from './style'

import logo from '../../Images/logo.png'

function Header(){
  return(
    <Container>
      <img src={logo} alt="logo"/>
      <Link to="/login">Entrar</Link>
    </Container>
  )
}

export default Header