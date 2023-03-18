import React from 'react'
import Yarn from './Yarn'
import './Yarn.css'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Yarn Dragon!</h1>
        <hr/>
        <h2>A place to organize your yarn hoard for maximum crafting enjoyment!</h2>
        <Yarn name='Yarn name' image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FN7EQLjXRtic8oDcLDKZvAHaE9%26pid%3DApi&f=1&ipt=d538a8e652af643f99a74d6af6f7be5fb6501574e8c7c638ab11230692e12f11&ipo=images' body='Info info info'/> //change this to yarns later and map through
    </div>
  )
}

export default Home