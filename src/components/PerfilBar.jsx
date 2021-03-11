import React, { useContext } from 'react'
import { 
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { AuthContext } from './AuthContext'

const PerfilBar = () => {

  const [ auth, controller ] = useContext( AuthContext )
  const logOut = () => {
    controller.logOut()
  }

  return(
    <AppBar position='sticky'>
      <Toolbar>
        <Grid xs={12} container>
          <Grid xs={10} item container>
            <Typography variant='h3'>
              {auth.authState ? auth.driver.nombre : 'Chile Open' }
            </Typography>
            <Typography variant='h6'>
              {auth.authState ? auth.driver.auto : 'Login' }
            </Typography>
          </Grid>
        </Grid>
        { auth.authState &&
        <IconButton color='inherit' onClick={logOut}>
          <ExitToApp/>
        </IconButton>
        }
      </Toolbar>
    </AppBar>
  )
}

export default PerfilBar