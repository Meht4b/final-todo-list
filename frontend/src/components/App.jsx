import React from 'react'
import Login from './Login'
import ToDoWrapper from './ToDoWrapper'
import { useState } from 'react'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(0)

  const fetchTasks = () => {
    console.log("fetching tasks")
  }



  return (
    <>
    {loggedIn===0?
      <Login propLogin={1}  setLoggedIn={setLoggedIn} callBack={fetchTasks}></Login> 

                    :

      <ToDoWrapper/>    
    }
    </>
    
    
    
  )
}

export default App

