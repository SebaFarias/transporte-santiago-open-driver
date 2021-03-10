import React, { useState } from 'react'
import { 
  TextField,
}  from '@material-ui/core'
import { useForm } from 'react-hook-form'

const ChoferForm = () => {

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
        name='nombre'
        inputRef={register}
      />
      <button type='submit'></button>
      
    </form>  
  )
}

export default ChoferForm