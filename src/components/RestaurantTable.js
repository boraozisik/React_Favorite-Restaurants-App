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
import restaurant_data from './restaurant_data.json'
import './table.css'
import { Avatar,IconButton,Card, CardContent,CardMedia,Button } from "@mui/material"
import TablePagination from '@mui/material/TablePagination';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';



const RestaurantTable = () => {

  const [restaurantList,setRestaurantList] = useState(restaurant_data);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[userFavoriteRestaurants,setUserFavoriteRestaurants] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  const handleAddClick = (row) => {
      userFavoriteRestaurants.push(row)
      console.log(userFavoriteRestaurants)
  }
  const handleDeleteClick = (row) => {
    if(window.confirm('Are you sure to delete this restaurant suggestion?')){
      const newList = [...restaurantList];
      const index = restaurantList.findIndex((rowContact) => rowContact.id === row.id);      
      newList.splice(index,1)
      setRestaurantList(newList)
    } 
  }
  const fetchRestaurant = async () => {
    
    const res = await fetch("https://random-data-api.com/api/restaurant/random_restaurant");
    const data = await res.json(); 
    setRestaurantList([...restaurantList,data])
    


  }

  return (
      <Card>
          <CardMedia><Button variant="contained" color='success' size='large' style={{marginLeft: 950, width:300}} onClick={fetchRestaurant}>Suggest Me Restaurant</Button></CardMedia>
          <CardContent>
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
                    restaurantList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                                <TableCell>{<Avatar src={row.logo} /> }</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.phone_number}</TableCell> 
                                <TableCell> 
                                    <IconButton aria-label='addToFavorites' color='primary' size='small' onClick = {() => handleAddClick(row)}>
                                        <AddIcon/>
                                        
                                    </IconButton>
                                    <IconButton aria-label='deleteSuggestion' color='error' size='small' onClick = {() => handleDeleteClick(row)}>
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
            count={restaurantList.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />

    </TableContainer>
          </CardContent>
          
      </Card>
    
  )
}

export default RestaurantTable