import React, { useContext } from 'react' 
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

const lista = [{
  nombre: 'Freddy T.',
  auto: 'Bici sin rueditas',
  id:'adoansdaosdnd',
},
{
  nombre: 'Eliseo S.',
  auto:'McLaren F1',
  id:'asfdasfasc',
},
]

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
  const controller = useContext( AuthContext )[1]
  const ingresar = driver => {
    controller.ingresar(driver)
  }

  
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