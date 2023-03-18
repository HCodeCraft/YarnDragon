import React, { useState, useEffect } from 'react'
import Yarn from './Yarn'
import './Yarn.css'

const Yarns = ({yarn}) => {

    const [yarnsState, setYarnsState] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/yarns')
        .then((res) => res.json())
        .then((data) => {
            setYarnsState(data)
        })
    }, [])

    console.log("yarnsState", yarnsState)

    // eventually include {yarn.amount} , {yarn.plans} , and {yarn.origin}

    const yarnList = yarnsState.map((yarn) => <Yarn name={yarn.name} image={yarn.image} body=  {yarn.colorway} /> )

  return (
    <div>
        <h3>My Yarns</h3>
        <hr/>
        {yarnList}
        <br/>

    </div>
  )
}

export default Yarns