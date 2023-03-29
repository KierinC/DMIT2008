
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar(props) {
    return <AppBar position="relative" sx={{mb: '1rem'}}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Our Library
      </Typography>
    </Toolbar>
  </AppBar>
}