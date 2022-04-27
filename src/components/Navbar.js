import React from 'react'
import { AppBar,Toolbar,IconButton,Typography} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';


const Navbar = () => {
  return (
    <AppBar position='static' >
    <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' href='http://localhost:3000/'> 
          <RestaurantIcon />
      </IconButton>
          <Typography variant ='h5' component='div'>Restaurant Suggestions</Typography>
    </Toolbar>
    </AppBar>
  )
}

export default Navbar