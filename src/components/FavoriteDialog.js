import React from 'react'
import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions } from '@mui/material'
import { useState } from 'react'
import FavoriteRestaurantsTable from './FavoriteRestaurantsTable'


const FavoriteDialog = ({favoriteList}) => {


    const[open,setOpen] = useState(false)

  return (
    <>
    <Button   variant="contained" color='success' size='large' onClick={() => setOpen(true)} style={{marginLeft: 950, width:300}}>Show Favorites</Button>
    <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={() => setOpen(false)}>
        <DialogTitle id='dialog-title'>
            Your Favorite Restaurants
        </DialogTitle>
        <DialogContent>
            <FavoriteRestaurantsTable favoriteList={favoriteList}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>Exit</Button>
            <Button autoFocus onClick={() => console.log(favoriteList)}>Save</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default FavoriteDialog