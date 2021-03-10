import React from 'react' 
import { 
  Grid, 
  Paper,
  
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ChoferForm from './ChoferForm'
import ChoferList from './ChoferList'

const useStyles = makeStyles( theme => ({
  root: {
    minHeight: '80vh'
    },
}))

const Login = () => {

  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Grid container >
        <ChoferForm/>
        <ChoferList/>
      </Grid>
    </Paper>
  )
}

export default Login