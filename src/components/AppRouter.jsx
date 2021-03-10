import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import DriverView from './DriverView'

const AppRouter = () => {

  const auth = useContext( AuthContext )[0]

  return (
    <>
    { auth.authState ? 
    <DriverView driver={auth.driver}/>
    :
      null
    }
    </>
  )

}

export default AppRouter