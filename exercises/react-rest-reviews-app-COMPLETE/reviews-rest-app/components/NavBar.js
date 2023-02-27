import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar({title}) {
  return <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
}