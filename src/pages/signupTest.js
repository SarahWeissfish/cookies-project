import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate,Link,useLocation} from"react-router-dom"
import{useDispatch} from"react-redux"
import axios from "axios"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const schema=yup.object({
    Username: yup.string().required(),
    Name: yup.string().required(),
    Adress: yup.string().required(),
    Email: yup.string().email().required(),
    Phone: yup.string().min(10).max(10).required(),
    Tz: yup.string().min(9).max(9).required(),
    Password: yup.string().min(3).required(),
}).required();

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate=useNavigate();
    const { state } = useLocation()
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { Username: state?.userName }
    })
    const onSubmit=(data)=>
    {
  
        axios.post('http://localhost:8080/api/user/sighin', data)
            .then((d) => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "you have signed up successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate("/signin", { state: data })
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data,
                });
                reset()
            })
    
   
    }
    
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data1 = new FormData(event.currentTarget);
//     const data={
  
//         userName:data1.get("userName"),
//         Name:data1.get("Name"),
//         Password:data1.get(""),
//         Email:data1.get("email"),
//         Tz:data1.get("Tz") ,
//         Phone:data1.get("phone"),
//         Adress:data1.getAll("adress")
//     }
//     axios.post('http://localhost:8080/api/user/sighin', data)
//             .then((d) => {
//                 Swal.fire({
//                     position: "top-center",
//                     icon: "success",
//                     title: "you have signed up successfully",
//                     showConfirmButton: false,
//                     timer: 2500
//                 });
//                 navigate("/signin", { state: data })
//             }).catch((error) => {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops...",
//                     text: error.response.data,
//                 });
//                 //reset()
//             })
//   };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

   
        <Box
sx={{
  backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1626180458221-GVJH7YJVEYVBGWE327IB/DSC_4478.jpg?format=1500w)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,

}}

>
  </Box>

        <Box
          style={{ padding: '5%',backgroundColor:"whitesmoke", opacity: 0.8 }}
          sx={{
              
            
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
       
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          
          <Box 
          
          
          component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                //   autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  {...register("Name")}
                   error={!!errors.Name} 
                   helperText={errors.Name?.message}
                   style={{ backgroundColor:"whitesmoke", opacity: 0.7 }}
                   
               
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  {...register("Username")}
                   error={!!errors.Username} 
                   helperText={errors.Username?.message}
                //   autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  {...register("Phone")}
                   error={!!errors.Phone}
                    helperText={errors.Phone?.message}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 
                  required
                  fullWidth
                  id="TZ"
                  label="Identity Number"
                  name="Tz"
                  {...register("Tz")} 
                  error={!!errors.Tz}
                   helperText={errors.Tz?.message}
                //   autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="Address"
                  name="addres"
                  autoComplete="addres"
                  {...register("Adress")}
                   error={!!errors.Adress}
                    helperText={errors.Adress?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("Email")}
                   error={!!errors.Email} 
                   helperText={errors.Email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("Password")} 
                  error={!!errors.Password} 
                  helperText={errors.Password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/signin"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        {/* </Box> */}
             
        <Copyright sx={{ mt: 5 }} />
        
      </Container>
      
    </ThemeProvider>
    
  );
}