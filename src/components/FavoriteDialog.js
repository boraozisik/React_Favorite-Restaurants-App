import React from 'react'
import { Button,Dialog,DialogTitle,DialogContent,DialogActions } from '@mui/material'
import { useState } from 'react'
import FavoriteRestaurantsTable from './FavoriteRestaurantsTable'
import './table.css'

const FavoriteDialog = ({favoriteList}) => {


    const[open,setOpen] = useState(false)

  return (
    <>
    <Button className='favoriteDialog'  variant="contained" color='success' size='small' onClick={() => setOpen(true)} style={{width:170,color: '#283747',backgroundColor:'#F1948A',fontSize:14}}>Show Favorites</Button>
    <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={() => setOpen(false)}>
        <DialogTitle id='dialog-title'>
            Your Favorite Restaurants
        </DialogTitle>
        <DialogContent>
            <FavoriteRestaurantsTable favoriteList={favoriteList}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>Exit</Button>
            
        </DialogActions>
    </Dialog>
    </>
  )
}

export default FavoriteDialog
