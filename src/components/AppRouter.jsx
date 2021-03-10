import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import DriverView from './DriverView'
import Login from './Login'

const AppRouter = () => {

  const auth = useContext( AuthContext )[0]

  return (
    <>
    { auth.authState ? 
    <DriverView driver={auth.driver}/>
    :
      <Login/>
    }
    </>
  )

}

export default AppRouter