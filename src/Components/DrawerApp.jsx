import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useState, useEffect } from 'react';

const DrawerApp = (props) => {
  const {open, toggleDrawer} = props;
  const [cartItems, setCartItems] = useState([]);
console.log(cartItems);


  useEffect(()=>{
    const cartItemArr = localStorage.getItem("cartList");
    setCartItems(cartItemArr);
  }, [])

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
      </Box>
      </Drawer>
    </div>
  );
}

export default DrawerApp;