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
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteDialog from './FavoriteDialog';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const RestaurantTable = () => {

  const [restaurantList,setRestaurantList] = useState(restaurant_data);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[userFavoriteRestaurants,setUserFavoriteRestaurants] = useState([])
  
  const favoriteList = userFavoriteRestaurants

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  const handleAddClick = (row) => {
      
      if(userFavoriteRestaurants.includes(row)){
          alert("This restaurant has already been added to your favorites!!")
      }  
      else{
        if(window.confirm('This restaurant will be added to your favorites?')){
            userFavoriteRestaurants.push(row)
        }

        
      }
      
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
          <CardMedia>      
              <FavoriteDialog  favoriteList={favoriteList} />
              <Button className='suggestButton' variant="contained"  size='small' style={{width:235,color: '#283747' ,backgroundColor:'#F1948A',fontSize:14}} onClick={fetchRestaurant}>Suggest Me Restaurant</Button> 
          </CardMedia>
          <CardContent>
          <TableContainer component={Paper}  style={{marginTop:20}}>
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
                                        <StarBorderIcon/>
                                        
                                    </IconButton>
                                    <IconButton aria-label='deleteSuggestion'  size='small' onClick = {() => handleDeleteClick(row)} style={{color: '#34495E'}}>
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
   
