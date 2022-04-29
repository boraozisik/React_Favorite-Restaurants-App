import React from 'react'
import { useState } from 'react';
import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper } from "@mui/material";

import './table.css'
import { Avatar,IconButton,Card, CardContent,CardMedia,Button } from "@mui/material"
import TablePagination from '@mui/material/TablePagination';




const FavoriteRestaurantsTable = ({favoriteList}) => {

  

  return (
    <div>
        <div>
            dsfd
        </div>
        <div>
            <button onClick={() => console.log(favoriteList)}>
                click
            </button>
        </div>
    </div>
  )
}

export default FavoriteRestaurantsTable