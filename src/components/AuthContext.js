import React, { useState, createContext} from 'react'

const API_DOMAIN = 'http://localhost:8080'
const API_ROUTE =  '/api/v1'
const VIAJES_ROUTES = '/viaje'

const initialState = {
  authState: false,
  remember: true,
  driver:{
    nombre: 'Freddy T.',
    auto: 'bici sin rueditas',
    id:'',
  },
  enRuta: false,
  ruta:{
    id: '',
    origen: 'hotel',
    destino:'club',
  },
  posicion: 'hotel',
  pasajeros: 0,
}

export const AuthContext = createContext()

export const AuthContextProvider = props => {

  const [ auth, setAuth ] = useState(initialState)

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
        return initialState
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
    comenzarViaje: async destino => {
      setAuth( prevState => {
        const origen = prevState.posicion
        const body = {
          choferId: prevState.driver.id,
          origen: origen,
          destino: destino,
          pasajeros: ''+prevState.pasajeros,   
          inicio: new Date(),       
        }
        console.log(JSON.stringify(body))
        iniciarViaje(body)
        const newRuta = {
          origen: origen,
          destino: destino,
        }
        return {
          ...prevState,
          ruta: newRuta,
          enRuta: true,
        }
      })
    },
    terminarViaje: async () => {
      setAuth( prevState => {
        const body = {
          rutaId: prevState.ruta.id,
          driver: prevState.driver.id,
          fin: new Date(),
          origen: prevState.ruta.origen,
          destino: prevState.ruta.destino,
          pasajeros:prevState.pasajeros,
        }
        console.log(JSON.stringify(body))
        cerrarViaje(body)
        const newRuta = {
          origen: prevState.ruta.destino,
          destino: '',
        }
        return {
          ...prevState,
          posicion: prevState.ruta.destino,
          destino:'',
          ruta: newRuta,
          enRuta: false,
        }
      })
    },
    setRutaId: newId => {
      setAuth( prevState => {
        return{
          ...prevState,
          ruta: {
            ...prevState.ruta,
            id: newId,
          }
        }
      })
    },
  }
  const iniciarViaje = async viaje => {
      try{
        const res = await fetch(`${API_DOMAIN}${API_ROUTE}${VIAJES_ROUTES}/comenzarViaje`, {
          method: 'PUT', 
          body: JSON.stringify(viaje),
          headers:{
            'Content-Type': 'application/json',
          }
        })
        const data = await res.json()
        setAuth( prevState => {
          return{
            ...prevState,
            ruta:{
              ...prevState.ruta,
              id: data._id,
            }
          }
        })
      }
      catch(err){
        console.log(err)
      }
  }
  const cerrarViaje = async viaje => {
    try{
      const res = await fetch(`${API_DOMAIN}${API_ROUTE}${VIAJES_ROUTES}/terminarViaje/${viaje.rutaId}`, {
        method: 'POST', 
        body: JSON.stringify(viaje),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setAuth( prevState => {
        return{
          ...prevState,
          ruta:{
            ...prevState.ruta,
            id: data._id,
          }
        }
      })
    }
    catch(err){
      console.log(err)
    }
  }

  return(
    <AuthContext.Provider value={ [ auth, controller ] }>
      {props.children}
    </AuthContext.Provider>
  )
}