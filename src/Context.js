import React, { useState, useEffect } from 'react'

const MyContext = React.createContext() 

const MyProvider = (props) => {
    const [yarnsState, setYarnsState] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/yarns')
        .then((res) => res.json())
        .then((data) => {
            setYarnsState(data)
        })
    }, []) 
  
    console.log("yarnsState", yarnsState)



    return (<MyContext.Provider value={{
        yarnsState: yarnsState
    }}>
        {props.children}
    </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer


export { MyProvider, MyConsumer }