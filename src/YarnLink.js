import React from 'react'
import { Link } from 'react-router-dom'


const YarnLink = ({yarn}) => {
  return (
    
    <Link to={`/yarns/${yarn.id}`}>
        <h4>Show Plans </h4>
    
    
    </Link>



  )
}

export default YarnLink