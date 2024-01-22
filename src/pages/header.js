import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Swal from "sweetalert2";
import MenuItem from '@mui/material/MenuItem';
import{useNavigate}from "react-router-dom"
import Menu from '@mui/material/Menu';
import { useSelector,useDispatch } from 'react-redux';
import * as Actions from "../store/action"
export default function MenuAppBar() {
 const navigate=useNavigate();
 const dispatch=useDispatch();
 const user=useSelector(state=>state.user?.user);
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {

  //   setAuth(event.target.checked);
  // };
  const onLogOut = () => {
    Swal.fire({
      icon: "info",
      title: "See You Later...",
      text: `good bye ${user.Name}!!!`,
      showConfirmButton: false,
      timer: 2500
    }
    
    );
    dispatch({ type: Actions.SET_USER, user: null });
    navigate("/");
  }

 
 
  return (<>
   {!user?(
    <Box color="secondary" sx={{ flexGrow: 1 , }}>
    <AppBar style={{ backgroundColor:"black", opacity: 0.8}} position="static"><Toolbar><Button onClick={()=>{navigate("/signup")}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Signup
          </Button>
          
          <Button onClick={()=>{navigate("/signin")}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SignIn
          </Button>
          
          </Toolbar></AppBar></Box>):
          <Box sx={{ flexGrow: 1 }}>
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
          <AppBar style={{ backgroundColor:"black", opacity: 0.7 }}  position="static">
            <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={()=>{navigate("/homePage")}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Home Page
          </Button>
          <Button onClick={()=>{navigate("/recipes")}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Recipes
          </Button>
          <Button onClick={()=>{navigate("/myRecipes")}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Recipes
          </Button>
          <Button onClick={()=>{navigate("/cart")}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cart
          </Button>
          <Button onClick={onLogOut} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logout
          </Button>
          {false && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                // anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={true}
                // onClose={handleClose}
              >
                <MenuItem onClick={()=>navigate("/homePage")}>Profile</MenuItem>
                <MenuItem onClick={()=>navigate("/myRecipes")}>My Recipes</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>}</>
  );
}