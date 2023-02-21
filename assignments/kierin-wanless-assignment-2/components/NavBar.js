import { AppBar } from '@mui/material';
import { Typography } from '@mui/material';

export default function NavBar(prop) {
  return <AppBar>
    <Typography
    variant="h6"
    component="div"
    sx={{ MR: 2 }}
    >
      Assignment 2
    </Typography>
  </AppBar>
}