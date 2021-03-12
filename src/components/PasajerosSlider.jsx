import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import {
  Slider,
  Typography,
} from '@material-ui/core'

const PasajerosSlider = () => {
  
  const [ auth, controller ] = useContext( AuthContext )

  const handleChange = ( e, value) => {
    controller.setPasajeros(value)
  }

  return(
    <>
      <Slider
        onChange={handleChange}
        value={auth.pasajeros}
        aria-labelledby="pasajeros-slider"
        valueLabelDisplay="on"
        step={1}
        marks
        min={0}
        max={5}
      />
      <Typography variant='h3' color='primary'>
        {`Pasajeros: ${auth.pasajeros}`}
      </Typography>
</>
  )
}

export default PasajerosSlider

