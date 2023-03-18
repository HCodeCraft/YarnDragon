import React, { useState, useEffect } from 'react'

const Yarns = () => {

    const [yarns, setYarns] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/yarns')
        .then((res) => res.json())
        .then((data) => {
            setYarns(data)
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Yarns