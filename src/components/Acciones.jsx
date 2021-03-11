import React, { useContext, useState } from 'react' 
import { 
  Button, 
  Grid,
} from '@material-ui/core'
import ModalViaje from './ModalViaje'
import { AuthContext } from './AuthContext'  

const Acciones = () => { 

  const [ open, setOpen ] = useState(false)
  const [ auth, controller] = useContext( AuthContext )
  const terminarViaje = () => {
    controller.terminarViaje()
  }
  const abrirModalComienzoViaje = () => {
    setOpen(true)
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
      <>
      <Button 
      variant="contained" 
      size="large" 
      color="secondary"
      style={{fontSize: 50}} 
      onClick={abrirModalComienzoViaje} 
      >
        Voy
      </Button>
      <ModalViaje open={open} setOpen={setOpen}/>
      </>
      }
    </Grid>
  )
}

export default Acciones