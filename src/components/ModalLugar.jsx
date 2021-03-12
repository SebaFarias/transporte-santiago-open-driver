import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';
import opciones from './opciones'
import { AuthContext } from './AuthContext'
import LugarButton from './LugarButton';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '80%',
    borderColor: theme.palette.primary.main,
    borderWidth: theme.spacing(1),
    borderStyle: 'solid',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalLugar = ({ open, setOpen, funcion }) => {

  const destinos = opciones.lugares
  const classes = useStyles();
  const controller = useContext( AuthContext )[1]

  const body = (
    <Paper className={classes.paper}>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid xs={12} item>
          <Typography variant='h3' color='secondary'>
            Escoja Lugar
          </Typography>
        </Grid>
        <Grid 
          xs={12} 
          item 
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        {destinos.map( lugar => {
          return(
            <Grid item xs={12/destinos.length} key={`opcion-${lugar}`}>
              <LugarButton lugar={lugar} funcion={()=>{
                controller[funcion](lugar)
                setOpen(false)
                }}/>
            </Grid>
          )
        })}
        </Grid>
      </Grid>
    </Paper>
  );

  return (
      <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  )
}

export default ModalLugar