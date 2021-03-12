import React from 'react' 
import { 
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'

  const Footer = () => { 
  
  return(
    <AppBar position='sticky' >
    <Toolbar>
      <Grid xs={12} container>
        <Grid xs={10} item container>
          <Typography variant='subtitle1'>
            Seba Farias | Marzo 2021
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  )
}

export default Footer