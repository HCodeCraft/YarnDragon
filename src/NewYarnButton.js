import React from 'react'
import { Link } from 'react-router-dom'

const NewYarnButton = () => {
  return (
    <Link to={'/yarns/new'}>
        <button>Click the button to add a new Yarn!</button>
    </Link>

  )
}

export default NewYarnButton