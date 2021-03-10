import React, { useContext } from 'react' 
import { 
  Button, 
  Grid,
 } from '@material-ui/core'
 import { AuthContext } from './AuthContext'  

const Acciones = () => { 

  const auth = useContext( AuthContext )[0]

  return(
    <Grid container>
      {auth.enRuta?
      <Button 
        variant="contained" 
        size="large" 
        color="secondary"
        style={{fontSize: 50}}  
      >
        Llegué
      </Button>
      :
      <Button 
        variant="contained" 
        size="large" 
        color="secondary"
        style={{fontSize: 50}}  
      >
        Voy
      </Button>
      }
    </Grid>
  )
}

export default Acciones