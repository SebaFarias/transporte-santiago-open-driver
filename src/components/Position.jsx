import React, { useContext } from 'react' 
import { 
  Grid,
} from '@material-ui/core'
import { AuthContext } from './AuthContext'
import LugarButton from './LugarButton'
import opciones from './opciones'

const Position = ({ lugar }) => { 
  const auth = useContext(AuthContext)[0]

  return(
    <Grid container>
      {auth.enRuta?
      <>
        <Grid xs={4} item justify='center'>
          <LugarButton lugar={auth.ruta.origen}/>
        </Grid>
        <Grid 
          xs={4} 
          item 
          container
          justify="center"
          alignItems="center"
        >
          {opciones.icons.flecha}
        </Grid>
        <Grid xs={4} item justify='center'>
          <LugarButton lugar={auth.ruta.destino}/>
        </Grid>
      </>
      :
      <LugarButton lugar={lugar}/>
    }
    </Grid>
  )
}

export default Position