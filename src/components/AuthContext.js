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
    },
    posicion: 'hotel',
  })

  const controller = {
    toggleEnRuta: () => {
        setAuth( prevState => {
          return{
            ...prevState,
            enRuta: !prevState.enRuta,
          }
        })
    },
    setRuta: newRuta => {
      setAuth( prevState => {
        return {
          ...prevState,
          ruta: newRuta
        }
      })
    },
    setPosicion: lugar => {
      setAuth( prevState => {
        return{
          ...prevState,
          posicion: lugar,
        }
      })
    }
  }

  return(
    <AuthContext.Provider value={ [ auth, controller ] }>
      {props.children}
    </AuthContext.Provider>
  )
}