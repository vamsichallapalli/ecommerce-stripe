import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';
import { Badge, Link, Stack, styled, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModel from '../cartModel/CartModel';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [open,setOpen] = React.useState(false)
  const LinkTheme = styled(Link)({
    color: "white",
    marginRight: "1rem",
    textDecoration:"none"
  })
  const CategoriesBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("sm")]:{
        display:"none"
    }
  }))
  const cartCount = useSelector(state=>state.cart.products)
  return (
    <div>
      <AppBar  position="static"  sx={{ flexDirection: "row", justifyContent: "space-between",width:"100%",overflow:"hidden" }}>
        <Toolbar>
        <CategoriesBox>
        <img  src="/img/flag.png" alt='ind' width={34} />
          <KeyboardArrowDownIcon />
          <Typography variant='h6' ml={2}>IND</Typography>
          <KeyboardArrowDownIcon />
        </CategoriesBox>
    
          <Box ml={2} sx = {{display:{xs:"none",sm:"block"}}}>
            <LinkTheme component={RouterLink} to="/products/5">
              Men
            </LinkTheme>
            <LinkTheme component={RouterLink} to="/products/4">
              Women
            </LinkTheme>
            <LinkTheme component={RouterLink} to="/products/8">
              New
            </LinkTheme>
            <LinkTheme component={RouterLink} to="/products/9">
              Accessories
            </LinkTheme>
          </Box>
        </Toolbar>
        <Toolbar>
          <LinkTheme component={RouterLink} to="/">
            <Typography variant="h5"><strong>VK</strong>  store</Typography>
          </LinkTheme>
        </Toolbar>
        <Toolbar sx ={{backgroundColor:"inherit"}}>
          <Box  sx = {{display:{xs:"none",sm:"block"}}}>
          <LinkTheme component={RouterLink} to="/">
            Homepage
          </LinkTheme>
          <LinkTheme component={RouterLink} to="/">
            About
          </LinkTheme>
          <LinkTheme component={RouterLink} to="/">
            Contact
          </LinkTheme>
          <LinkTheme component={RouterLink} to="/">
            Stores
          </LinkTheme>
          </Box>
          
          <Stack direction={"row"} >
            <SearchIcon sx={{ paddingRight: "0.5rem" }} />
            <PersonOutlineIcon sx={{ paddingRight: "0.5rem" }} />
            <FavoriteBorderIcon sx={{ paddingRight: "0.5rem" }} />
            <Badge badgeContent={cartCount.length} color="secondary" sx={{ paddingleft: "0.2rem",cursor:"pointer" }} onClick = {()=>setOpen(!open)}>
              <ShoppingCartIcon />
            </Badge>
          </Stack>

        </Toolbar>

      </AppBar>
      {open && <CartModel/>}
    </div>
  )
}

export default Navbar