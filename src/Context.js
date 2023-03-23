import React, { useState, useEffect } from 'react'

const MyContext = React.createContext() 

const MyProvider = (props) => {
    const [yarnsState, setYarnsState] = useState([])
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        fetch('http://localhost:3001/yarns')
        .then((res) => res.json())
        .then((data) => {
            setYarnsState(data)
        })
    }, []) 
  
    console.log("yarnsState", yarnsState)

const addYarn = (yarn) => {
    setYarnsState([...yarnsState, yarn])
}


const changeFilter = (event) => setFilter(event.target.value)

const filterYarns = yarnsState.filter( yarn => yarn.weight === filter || filter ==='All')
    

    return (<MyContext.Provider value={{
        yarnsState: yarnsState,
        addYarn: addYarn,
        changeFilter:changeFilter,
        filterYarns:filterYarns
    }}>
        {props.children}
    </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer


export { MyProvider, MyConsumer }