import React from 'react'

const Yarn = ({name, image, body}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={image} alt='' />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>{name}</h3>
        </div>
        <div className="card-body">
            <p>{body}</p>
        </div>

        <div className='btn'>
        <button>
            <a>
                View more
            </a>
        </button>
        </div>

        </div>


    </div>
  )
}

export default Yarn