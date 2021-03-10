import React from 'react'
import { 
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'

const PerfilBar = ({ name, car }) => {
  return(
    <AppBar position='sticky'>
      <Toolbar>
        <Grid xs={12} container>
          <Grid xs={10} item container>
            <Typography variant='h3'>
              {name?name:'Chile Open'}
            </Typography>
            <Typography variant='h6'>
              {car?car:'Login'}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default PerfilBar