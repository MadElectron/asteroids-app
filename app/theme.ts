import { createTheme } from "@mui/material/styles";
import {
  blue,
  red,
  blueGrey,
  green,
  orange,
  purple,
} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: blueGrey[700],
    },
    success: {
      main: green[700],
    },
    error: {
      main: red[700],
    },
    warning: {
      main: orange[700],
    },
    info: {
      main: purple[700],
    },
  },
});

export default theme;
