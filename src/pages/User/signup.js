import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import HomeIcon from '@mui/icons-material/Home';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import{useNavigate,Link,useLocation} from "react-router-dom"
import {SignUp}from "../../services/user";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
    Name:yup.string().required(),
    password:yup.string().min(3).required(),
    Tz:yup.string().min(9).max(9).required(),
    Phone:yup.string().min(10).max(10).required(),
 
    Email:yup.string().email().required()

    }).required();



const defaultTheme = createTheme();

export default function SignInSide() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { state } = useLocation();
const {register,
    handleSubmit,
    formState:{errors},
}= useForm({resolver:yupResolver(schema),defaultValues:{userName:state?.Username,password:state?.password}})
const onSubmit=(data)=>{
    
    dispatch(SignUp(data,navigate))
}
  return (
    <ThemeProvider theme={defaultTheme} id='signup' >
   <Box>      <Box
        sx={{
          backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1566597268255-34YU5IKLKQOVNH2HLW2P/DSC_2167.jpg?format=1500w)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -3

        }}

      >
        </Box>
      <Grid container component="main" sx={{ height: '100vh' , zIndex:9}} >
        <CssBaseline />
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1566597268255-34YU5IKLKQOVNH2HLW2P/DSC_2167.jpg?format=1500w)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }} */}
        {/* /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Button startIcon={<HomeIcon  color="disabled"/>} onClick={()=>navigate("/")}></Button>
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
              Sign up
            </Typography>
            
            <Box component="form" noValidate   onSubmit={handleSubmit(onSubmit)}sx={{ mt: 1 }}>
       
              <TextField
                margin="normal"
              
                fullWidth
               
                label="User Name"
             
                {...register("userName")}
                type="Name" 
                error={!!errors.userName} 
                helperText={errors.userName?.message}
              
                autoFocus
              />
              <TextField
                margin="normal"
              
                fullWidth
               
                label="Name"
             
                {...register("Name")}
                type="Name" 
                error={!!errors.Name} 
                helperText={errors.Name?.message}
              
                autoFocus
              />
                 <TextField
                margin="normal"
               fullWidth
                label="Tz"
                type="Tz"
                {...register("Tz")} 
                error={!!errors.Tz} 
                helperText={errors.Tz?.message}
              />
               <TextField
                margin="normal"
               fullWidth
                label="Phone"
                type="phone"
                {...register("Phone")} 
                error={!!errors.Phone} 
                helperText={errors.Phone?.message}
              />
            
                <TextField
                margin="normal"
               fullWidth
                label="Email Adress"
                type="Email"
                {...register("Email")} 
                error={!!errors.Email} 
                helperText={errors.Email?.message}
              />
              <TextField
                margin="normal"
               fullWidth
                label="Password"
                type="password"
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
                  <Link to={"/signin"} variant="body2" color="grey">
                    {"Don't have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
           
            </Box>
           
          </Box>
        </Grid>
      </Grid>
      </Box>
    </ThemeProvider>
  );
}