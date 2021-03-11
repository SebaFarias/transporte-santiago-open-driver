import React from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles( theme => ({
  root: {
      position: 'fixed',
      bottom: 0,
      left:0,
      right: 0,
    },
  }))
  const Footer = () => { 

    const classes = useStyles()
  
  return(
    <AppBar position='sticky' >
    <Toolbar>
      <Grid xs={12} container>
        {console.log(classes)}
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