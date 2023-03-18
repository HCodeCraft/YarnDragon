import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NewYarnForm = () => {

    const [yarnsState, setYarnsState] = useState({
        name: '',
        image: '',
        colorway: '',
        amount: '',
        plans: '',
        origin: ''
    })

    const navigate = useNavigate()


    useEffect(() => {
        fetch('http://localhost:3001/yarns')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setYarnsState({
                name: data[0].name,
                image: data[0].image,
                colorway: data[0].colorway,
                amount: data[0].amount,
                plans: data[0].plans,
                origin: data[0].origin
            })
        })
    }, [])


    const handleChange = (e) => {
        setYarnsState({
            ...yarnsState, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newYarn = {
            name: yarnsState.name,
            image: yarnsState.image,
            colorway: yarnsState.colorway,
            amount: yarnsState.amount,
            plans: yarnsState.plans,
            origin: yarnsState.origin
        }
        
        fetch('http://localhost:3001/yarns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newYarn)
        })
        .then( r => r.json())
        .then( (data) => {
            console.log(data)
            navigate('/yarns')
        })


    }


  return (
    <div>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
            <label>Yarn name:</label>
            <input name="name" onChange={handleChange} type="text"/> <br/>
            <br/>
            <label>Image url:</label>
            <input name="image" onChange={handleChange} type="text"/> <br/>
            <br/>
            <label>Colorway:</label>
            <input name="colorway" onChange={handleChange} type="text"/> <br/>
            <br/>
            <label>Amount:</label>
            <input  name="amount" onChange={handleChange} type="text"/> <br/>
            <br/>
            <label>Plans:</label>
            <textarea name="plans" onChange={handleChange} type="text"/> <br/>
            <br/>
            <label>Origin:</label>
            <input name="origin" onChange={handleChange} type="text"/> <br/>
            <br/>
            <input type="submit"/>
        </form>



    </div>
  )
}

export default NewYarnForm