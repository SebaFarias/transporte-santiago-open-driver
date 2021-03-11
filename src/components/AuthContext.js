import React, { useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = props => {

  const [ auth, setAuth ] = useState({
    authState: false,
    remember: true,
    driver:{
      nombre: 'Freddy T.',
      auto: 'bici sin rueditas',
      id:'',
    },
    enRuta: false,
    ruta:{
      origen: 'hotel',
      destino:'club',
    },
    posicion: 'hotel',
    pasajeros: 0,
  })

  const controller = {
    ingresar: driver => {
      setAuth( prevState => {
        return{
          ...prevState,
          authState: true,
          driver: driver,
        }
      })
    },
    logOut: () => {
      setAuth( prevState => {
        return {
          ...prevState,
          authState:false,
          driver: null,
        }
      })
    },
    setPasajeros: pasajeros => {
      setAuth( prevState => {
        return {
          ...prevState,
          pasajeros: pasajeros,
        }
      })
    },
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