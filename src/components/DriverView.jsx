import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { 
  Grid,
  Typography,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Acciones from './Acciones'
import Position from './Position'

const useStyles = makeStyles( theme => ({
  root: {
    minHeight: '80vh',
    padding: '3rem 2rem',
  },
  title: {
    width: '100%',
  },
  item:{
    margin: 'auto',
  }
}))

const DriverView = () => {

  const classes = useStyles()
  const auth = useContext( AuthContext )[0]

  return (
    <Paper>
      <Grid 
        className={classes.root}
        container 
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item container spacing={2}>
          <Typography variant='h4' align='center' color='secondary'>
            En {auth.enRuta ? 'camino:' : ':'}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Position/>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Acciones/>
        </Grid>
      </Grid>
    </Paper>
  )

}

export default DriverView