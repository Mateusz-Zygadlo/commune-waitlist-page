import React from 'react'
import {  
  Navbar,
  Main,
} from '../components'
 
export const Home = () => {
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto bg-main rounded-lg">
      <Navbar />
      <Main />
    </div>
  )
}