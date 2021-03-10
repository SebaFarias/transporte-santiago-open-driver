import React, { useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = props => {

  const [ auth, setAuth ] = useState({
    authState: true,
    remember: true,
    driver:{

    },
    enRuta: true,
    ruta:{
      origen: 'hotel',
      destino:'club',
    }
  })

  const controller = {
    toggleEnRuta: () => {
        setAuth( prevState => {
          return({
            ...prevState,
            enRuta: !prevState.enRuta,
          })
        })
    }
  }

  return(
    <AuthContext.Provider value={ [ auth, controller ] }>
      {props.children}
    </AuthContext.Provider>
  )
}