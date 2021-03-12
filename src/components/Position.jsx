import React, {  useState, useContext } from 'react' 
import { 
  Grid,
} from '@material-ui/core'
import { AuthContext } from './AuthContext'
import LugarButton from './LugarButton'
import PasajerosSlider from './PasajerosSlider'
import ModalLugar from './ModalLugar'
import opciones from './opciones'

const Position = () => { 
  const [ metodo, setMetodo ] = useState(null)
  const [ open, setOpen ] = useState(false)
  const auth = useContext(AuthContext)[0]
  
  return(
    <>
    <Grid container>
      {auth.enRuta?
      <>
        <Grid xs={4} item justify='center'>
          <LugarButton lugar={auth.ruta.origen} funcion={()=>{
        setMetodo('setOrigen')
        setOpen(true)
        }}/>
        </Grid>
        <Grid 
          xs={4} 
          item 
          container
          justify="center"
          alignItems="center"
        >
          {opciones.icons.flecha}
        </Grid>
        <Grid xs={4} item justify='center'>
          <LugarButton lugar={auth.ruta.destino} funcion={()=>{
            setMetodo('setDestino')
            setOpen(true)
        }}/>
        </Grid>
        <Grid item xs={12}>
          <PasajerosSlider/>
        </Grid>
      </>
      :
      <LugarButton lugar={auth.posicion} funcion={()=>{
        setMetodo('setPosicion')
        setOpen(true)
      }}/>
    }
    </Grid>
    <ModalLugar open={open} setOpen={setOpen} funcion={metodo}/>
</>
  )
}

export default Position