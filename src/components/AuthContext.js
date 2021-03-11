import React, { useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = props => {

  const [ auth, setAuth ] = useState({
    authState: true,
    remember: true,
    driver:{
      nombre: 'Freddy T.',
      auto: 'bici sin rueditas',
    },
    enRuta: false,
    ruta:{
      origen: 'hotel',
      destino:'club',
    },
    posicion: 'hotel',
  })

  const controller = {
    comenzarViaje: destino => {
      setAuth( prevState => {
        const newRuta = {
          origen: prevState.posicion,
          destino: destino,
        }
        return {
          ...prevState,
          ruta: newRuta,
          enRuta: true,
        }
      })
    },
    terminarViaje: () => {
      setAuth( prevState => {
        return {
          ...prevState,
          posicion: prevState.ruta.destino,
          ruta:{
            ...prevState.ruta,
            origen: prevState.ruta.destino,
          },
          enRuta: false,
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