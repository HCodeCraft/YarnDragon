import React from 'react'
import YarnLink from './YarnLink'

const Yarn = ({name, image, body, weight, yarn}) => {
  
  
    return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={image} alt='' />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>{name}</h3>
            <br/>
        </div>
        <div className="card-body">
            <p>{body}</p>
            <br/>
            <p>{weight}</p>
        </div>
     
        <div className='btn'>
        <button>
            Show notes/plans
        </button>
        <br/>
        <br/>
        </div>

        </div>


    </div>
  )
}

export default Yarn