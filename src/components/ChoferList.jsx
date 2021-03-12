import React, { useContext, useState } from 'react' 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { AuthContext } from './AuthContext'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableContainer = withStyles((theme) => ({
  root:{
    margin: 'auto',
  }
}))(TableContainer)

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});


const ChoferList = () => {
  
  const classes = useStyles();
  const [ lista, setLista] = useState([])
  const controller = useContext( AuthContext )[1]
  const ingresar = driver => {
    controller.ingresar(driver)
  }
  const fetchDrivers = async () => {
    try{
      const res = await fetch('http://localhost:8080/api/v1/driver/getDrivers')
      const data = await res.json()
      const normalized = await data.map( driver => {
        return {
          id:driver._id,
          nombre:driver.name,
          auto:driver.car,
        }
      })
      setLista(normalized)
    }
    catch(err){
      console.log(err)
    }
  }
fetchDrivers()
  
  return (
    <StyledTableContainer component={Paper}  style={{ margin:'auto', }}>
      <Table className={ classes.table } aria-label="lista de choferes">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Vehículo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { lista.map( driver  => (
            <StyledTableRow 
              key={driver.id} 
              onClick={ () => { ingresar(driver) }}
            >
              <StyledTableCell component="th" scope="row">
                {driver.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{driver.auto}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default ChoferList