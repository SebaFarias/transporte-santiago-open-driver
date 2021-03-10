import React from 'react' 
import { 
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'
import opciones from './opciones'


const LugarButton = ({ lugar, funcion }) => { 

  return(
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center"    
    >
      <IconButton 
        variant='contained' 
        color='primary' 
        onClick={funcion?funcion:()=>{}}>
      {opciones.icons[lugar]}
      </IconButton>
      <Typography 
        variant='h4' 
        align='center'
      >
        { lugar? lugar : '' }
      </Typography>

    </Grid>

  )
}

export default LugarButton