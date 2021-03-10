import React, { useContext } from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'

const Footer = () => { 

  const useStyles = makeStyles( theme => ({
    footerContainer: {
      position: 'fixed',
      bottom: 0,
      left:0,
      right: 0,
    },
  }))

  return(
    <AppBar position='sticky'>
    <Toolbar>
      <Grid xs={12} container>
        <Grid xs={10} item container>
          <Typography variant='h2'>
            Footer
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  )
}

export default Footer