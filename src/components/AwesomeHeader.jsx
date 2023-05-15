import React from 'react'
import Logo from './Logo';
import MyNavbar from './MyNavbar';

function AwesomeHeader() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
     <Logo />
     <MyNavbar />
   </nav>
  )
}

export default AwesomeHeader;