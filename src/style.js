
import { makeStyles } from '@material-ui/core';
import theme from './theme';

const useStyles = makeStyles({
  button: {
    padding: '0 30px',
    margin: 5,
  },
  inputField: {
    margin: 5
  },
  mainGrid: {
    margin: theme.spacing(1),
  }
})

export default useStyles;