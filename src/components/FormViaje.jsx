import React, { useState } from 'react'
import {
  Button,
  TextField,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'


const FormViaje = () => {
  const { handleSubmit, register, errors } = useForm()
  const [ submitting, setSubmitting ] = useState(false)
  const onSubmit = data => console.log( JSON.stringify(data))


  return(
    <form onSubmit={ handleSubmit(onSubmit) }>
      <TextField
        id='filled-secondary'
        label='Nombre ( Ej: Freddy T. )'
        variant='outlined'
        color='secondary'
        name='pasajeros'
        inputRef={register}
      />
      <Button type='submit'></Button>      
    </form>  
  )
}

export default FormViaje