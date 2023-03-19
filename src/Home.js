import React from 'react'
import Lotsyarn from './orgyarn.jpg'


const Home = () => {
  return (
    <div className='Home'>
        <h1>Welcome to Yarn Dragon!</h1>
        
        
        <img src={Lotsyarn} alt='an image of lots of organized yarn' />
        <h2>A place to organize your yarn hoard for maximum crafting enjoyment!</h2>
    </div>
  )
}

export default Home