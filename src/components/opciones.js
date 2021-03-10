import { 
  ArrowForward,
  Flight,
  Hotel,
  SportsTennis,
} from '@material-ui/icons';

const iconStyle = {
  fontSize: 90, 
}

const opciones = {
  icons: {
    hotel: <Hotel style={iconStyle} />,
    club: <SportsTennis style={iconStyle} />,
    aeropuerto: <Flight style={iconStyle} />,
    flecha: <ArrowForward style={{fontSize:50}}/>
  },
  lugares: [ 
    'hotel',
    'club',
    'aeropuerto']
}

export default opciones