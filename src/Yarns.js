import React, { useState, useEffect } from 'react'
import Yarn from './Yarn'
import './Yarn.css'
import NewYarnButton from './NewYarnButton'

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

    const yarnList = yarnsState.map((yarn) => <Yarn name={yarn.name} image={yarn.image} body=  {yarn.colorway} key={yarn.name} /> )

  return (
    <div>
        <h3>My Yarns</h3>
        <hr/>
        {yarnList}
        <br/>
        <NewYarnButton/>
    </div>
  )
}

export default Yarns