import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

function DefaultLayout({ children }) {
    return (
      <>
        <GlobalStyles />
        <Header />
        {children}
      </>
    )
  }
  
  export default DefaultLayout