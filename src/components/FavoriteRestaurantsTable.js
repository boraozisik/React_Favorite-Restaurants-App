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
import { Avatar,IconButton,} from "@mui/material"
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/Delete';




const FavoriteRestaurantsTable = ({favoriteList}) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const[favoriteRestaurantList,setFavoriteRestaurantList] = useState(favoriteList)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

      const handleDeleteClick = (row) => {
        if(window.confirm('Are you sure to delete this restaurant from favorites?')){
          const newList = [...favoriteRestaurantList];
          const index = favoriteRestaurantList.findIndex((rowContact) => rowContact.id === row.id);      
          newList.splice(index,1)
          setFavoriteRestaurantList(newList)
        } 
      }

  return (
    <TableContainer component={Paper} >
    <Table aria-label='simple table' >
        <TableHead>
            <TableRow>                   
                <TableCell>Logo</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Phone Number</TableCell> 
                <TableCell>Actions</TableCell>                
            </TableRow>
        </TableHead>
        <TableBody>
            {
                favoriteRestaurantList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map((row) => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                            <TableCell>{<Avatar src={row.logo} /> }</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.phone_number}</TableCell> 
                            <TableCell> 
                                   
                                    <IconButton aria-label='deleteSuggestion' style={{color: '#E74C3C'}} size='small' onClick = {() => handleDeleteClick(row)} >
                                        <DeleteIcon/>
                                        
                                    </IconButton>
                            </TableCell> 
                    </TableRow>
                ))
            }
            
            
        </TableBody>
        
    </Table>
    <TablePagination
        rowsPerPageOptions={[5,10,25]}
        component="div"
        count={favoriteRestaurantList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />

    </TableContainer>
  )
}

export default FavoriteRestaurantsTable
