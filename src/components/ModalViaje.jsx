import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button,
  Grid,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';
import { AuthContext } from './AuthContext'
import opciones from './opciones'
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

const ModalViaje = ({ open, setOpen }) => {

  const [ auth, controller ] = useContext( AuthContext )
  const [destino, setDestino] = useState('')
  const destinos = opciones.lugares.filter( lugar => { return lugar !== auth.posicion } )
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };
  const comenzarViaje = () => {
    controller.comenzarViaje(destino)
    setOpen(false)
  }
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
            Dónde
          </Typography>
        </Grid>
        <Grid 
          xs={12} 
          item 
          container
          direction="row"
        >
        {destino !== '' && 
        <Grid xs={12} item>
          <Typography variant='h3' color='secondary'>
            {`Destino: ${destino}`}
          </Typography>
        </Grid>
        }
        {destinos.map( lugar => {
          return(
            <Grid item xs={12/destinos.length} key={`opcion-${lugar}`}>
              <LugarButton lugar={lugar} funcion={()=>setDestino(lugar)}/>
            </Grid>
          )
        })}
        </Grid>

      </Grid>
      <Grid item xs={12}>
        <Button 
          disabled={destino===''}
          variant="contained" 
          size="large" 
          color="secondary"
          style={{fontSize: 50}} 
          onClick={comenzarViaje} 
        >
          Voy
        </Button>
      </Grid>
    </Paper>
  );

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  )
}

export default ModalViaje