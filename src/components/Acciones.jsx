import React, { useContext } from 'react' 
import { 
  Button, 
  Grid,
 } from '@material-ui/core'
 import { AuthContext } from './AuthContext'  

const Acciones = () => { 

  const [ auth, controller] = useContext( AuthContext )
  const terminarViaje = () => {
    controller.setPosicion(auth.posicion)
  }
  const abrirModalComienzoViaje = () => {
    
  }


  return(
    <Grid container>
      {auth.enRuta?
      <Button 
        variant="contained" 
        size="large" 
        color="secondary"
        style={{fontSize: 50}}  
        onClick={terminarViaje}
      >
        Llegué
      </Button>
      :
      <Button 
        variant="contained" 
        size="large" 
        color="secondary"
        style={{fontSize: 50}} 
        onClick={abrirModalComienzoViaje} 
      >
        Voy
      </Button>
      }
    </Grid>
  )
}

export default Acciones