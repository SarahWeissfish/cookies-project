import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import{useNavigate,Link,useLocation} from "react-router-dom"
import {SetUser}from "../services/user"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../images/DSC_4478.jpg'
import { useForm } from "react-hook-form"
import {useDispatch} from"react-redux"
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Cookies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const schema=yup.object({
    userName:yup.string().required(),
    password:yup.string().min(3).required(),
    }).required();

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { state } = useLocation();
//   {const handleSubmit = (data) => {
//     data.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
const {register,
    handleSubmit,
    formState:{errors},
}= useForm({resolver:yupResolver(schema),defaultValues:{userName:state?.Username,password:state?.password}})
// const onSubmit=(event)=>{
//     event.preventDefault();
//     const data1=new FormData(event.currentTarget)
//     const data={
//         userName:data1.get("user name"),
//         password:data1.get("password")

//     }
//     dispatch(SetUser(data,navigate))
// }
const onSubmit=(data)=>{
    
    dispatch(SetUser(data,navigate))
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1626180458221-GVJH7YJVEYVBGWE327IB/DSC_4478.jpg?format=1500w)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            
            <Box component="form" noValidate   onSubmit={handleSubmit(onSubmit)}sx={{ mt: 1 }}>
            {/* <form > */}
              <TextField
                margin="normal"
                //required
                fullWidth
                //id="userName"
                label="User Name"
                //name="userName"
                {...register("userName")}
                type="Name" 
                error={!!errors.userName} 
                helperText={errors.userName?.message}
                // autoComplete="email"
                autoFocus
              />
              
              <TextField
                margin="normal"
                //required
                fullWidth
                //name="password"
                label="Password"
                type="password"
                //id="password"
                //autoComplete="current-password"
                {...register("password")} 
                error={!!errors.password} 
                helperText={errors.password?.message}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="grey"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color='grey'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/signup"} variant="body2" color="grey">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              {/* </form> */}
            </Box>
           
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}