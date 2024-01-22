// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import { useLocation } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import {useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';
// import axios from "axios";
// import Swal from "sweetalert2"
// const schema = yup
//   .object({
//     Name: yup.string().required('שדה חובה'),
//     Phone: yup.string().required('שדה חובה').min(9, 'לפחות 9 ספרות ').max(10, '  עד 10 ספרות '),
//     Email: yup.string().required('שדה חובה').email('המייל אינו חוקי'),
//     Tz: yup.string().required('שדה חובה').min(9, ' 9 ספרות ').max(9, '9 ספרות '),
//     Username: yup.string().required('שדה חובה'),
//     Password: yup.string().required('שדה חובה').min(3, 'סיסמא חייבת להכיל לפחות 3 ספרות'),
//   })
//   .required()


// export default function App() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { state } = useLocation()
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Username: state?.Username,
//       Password: state?.Password,
//     },
//   })
//   let d;
//   const onSubmit = (data) => {
//         alert("afsgf");
//         console.log(data)
//         axios.post('http://localhost:8080/api/user/sighin', data)
//           .then((d) => {
//             Swal.fire({
//               position: "top-center",
//               icon: "success",
//               title: "you have signed up successfully",
//               showConfirmButton: false,
//               timer: 2500
//             });
//             navigate("/signin", { state: data })
//           }).catch((error) => {
//             Swal.fire({
//               icon: "error",
//               title: "Oops...",
//               text: error.response.data,
//             });
//             // reset()
//           })
    
    
//       }
//   return (<div id="container">
//     <div id="form" class="ui placeholder segment">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div   class="ui one column very relaxed stackable grid">
//           <div class="column">
//             <div class="ui form">
//               <div class="field">
//                 <label>שם משתמש:</label>
//                 <div class="ui rigth icon input">
//                   <input placeholder="הכנס שם משתמש"{...register("Username")} />
//                   <i class="user icon"></i>
//                 </div>
//                 {errors.Username && <p class="ui pointing red basic label">{errors.Username?.message}</p>}
//               </div>
//               <div class="field">
//                 <label>סיסמא:</label>
//                 <div class="ui rigth icon input">
//                   <input type="password" placeholder="הכנס סיסמא" {...register("Password")} />
//                   <i class="lock icon"></i>
//                 </div>
//                 {errors.Password && <p class="ui pointing red basic label">{errors.Password?.message}</p>}
//               </div>
//               <div class="field">
//                 <label>שם:</label>
//                 <div class="ui rigth icon input">
//                   <input placeholder="הכנס שם"{...register("Name")} />
//                   <i class="user icon"></i>
//                 </div>
//                 {errors.Name && <p class="ui pointing red basic label">{errors.Name?.message}</p>}
//               </div>
//               <div class="field">
//                 <label>טלפון:</label>
//                 <div class="ui rigth icon input">
//                   <input placeholder="הכנס טלפון" {...register("Phone")} />
//                   <i class="phone icon"></i>
//                 </div>
//                 {errors.Phone && <p class="ui pointing red basic label">{errors.Phone?.message}</p>}
//               </div>
//               <div class="field">
//                 <label>מייל:</label>
//                 <div class="ui rigth icon input">
//                   <input placeholder="הכנס מייל"{...register("Email")} />
//                   <i class="mail icon"></i>
//                 </div>
//                 {errors.Email && <p class="ui pointing red basic label">{errors.Email?.message}</p>}
//               </div>
//               <div class="field">
//                 <label>מספר תעודת זהות:</label>
//                 <div class="ui rigth icon input">
//                   <input placeholder="הכנס מספר תעודת זהות" {...register("Tz")} />
//                   <i class="lock icon"></i>
//                 </div>
//                 {errors.Tz && <p class="ui pointing red basic label">{errors.Tz?.message}</p>}
//               </div>
//               <Button class="ui blue submit button" type="submit">הרשמה</Button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
//   )
// }




import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom"
import { SetUser } from "../services/user"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../images/DSC_4478.jpg'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
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
const schema = yup.object({
  Username: yup.string().required(),
  Name: yup.string().required(),
  Adress: yup.string().required(),
  Email: yup.string().email().required(),
  Phone: yup.string().min(10).max(10).required(),
  Tz: yup.string().min(9).max(9).required(),
  Password: yup.string().min(3).required(),
}).required();

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Signup=() =>{
  const navigate = useNavigate();
  const { state } = useLocation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { Username: state?.userName }
  })
  const onSubmit = (data) => {
    alert("afsgf");
    console.log(data)
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
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
      

             <Box
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


        <Grid container component="main" sx={{ height: '100vh' }} >
          <CssBaseline />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
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
                Sign Up
              </Typography>

              <Box component="form" noValidate  onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>

                {/* <form > */}
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
                  //name="userName"
                  {...register("Name")}
                  type="Name"
                  error={!!errors.Name}
                  helperText={errors.Name?.message}
                  // autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  //required
                  fullWidth
                  //id="userName"
                  label="Identity Number"
                  //name="userName"
                  {...register("Tz")}
                  type="Tz"
                  error={!!errors.Tz}
                  helperText={errors.Tz?.message}
                  // autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  //required
                  fullWidth
                  //id="userName"
                  label="Adress"
                  //name="userName"
                  {...register("Adress")}
                  type="Adress"
                  error={!!errors.Adress}
                  helperText={errors.Adress?.message}
                  // autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Phone Number"
                  //name="userName"
                  {...register("Phone")}
                  type="Phone"
                  error={!!errors.Phone}
                  helperText={errors.Phone?.message}
                  // autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  //required
                  fullWidth
                  //id="userName"
                  label="Email"
                  //name="userName"
                  {...register("Email")}
                  type="Email"
                  error={!!errors.Email}
                  helperText={errors.Email?.message}
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
                  Sign Up
                </Button>
                

                <Grid container>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="secondary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                  <Grid item>

                    <Link to={"/signin"} variant="body2" color="grey">
                      Already have an account? Sign in
                    </Link>

                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
                {/* </form> */}
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default Signup;