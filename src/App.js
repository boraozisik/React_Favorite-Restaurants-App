import './App.css';
import Navbar from './components/Navbar';
import RestaurantTable from './components/RestaurantTable';
import { Stack } from '@mui/material';

function App() {
  return (
    <div>
        <Navbar/>
        <Stack style={{marginTop: 50}}>
          <RestaurantTable/>
        </Stack>
        
    </div>
  );
}

export default App;
