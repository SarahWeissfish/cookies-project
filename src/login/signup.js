import {useDispatch,useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate,useLocation}  from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import Swal from "sweetalert2"
import { Button, TextField } from "@mui/material"
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const schema=yup.object({
    Username: yup.string().required(),
    Name: yup.string().required(),
    Adress: yup.string().required(),
    Email: yup.string().email().required(),
    Phone: yup.string().min(10).max(10).required(),
    Tz: yup.string().min(9).max(9).required(),
    Password: yup.string().min(3).required(),
}).required();
const Signup=()=>
{
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
    //     axios.post('http://localhost:8080/api/user/sighin', data)
    //     .then((res)=>
    //     {
    //         Swal.fire({
    //             position: "top-center",
    //             icon: "success",
    //             title: "you have signed up successfully:)",
    //             showConfirmButton: false,
    //             timer: 2500
    //         });
    //         navigate ("/signin",{state:data})
    //      }).catch((error)=> {Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: error.response.data,
    //     });
    //     reset();
    // })
    
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
    console.log("signup");
    return (<div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField  label="User Name" placeholder="user name"{...register("Username")} error={!!errors.Username} helperText={errors.Username?.message} />
          </Grid>     
                
                <Grid item xs={12} sm={6}>
                <TextField  label="Name" placeholder="Name" {...register("Name")} error={!!errors.Name} helperText={errors.Name?.message} />
                </Grid>
                <br />
                <Grid item xs={12}>
                <TextField   label="Adress" placeholder="Adress"{...register("Adress")} error={!!errors.Adress} helperText={errors.Adress?.message} />
                <br />
                </Grid>
                <Grid item xs={12}>
                <TextField   label="Email" type="email" placeholder="Email" {...register("Email")} error={!!errors.Email} helperText={errors.Email?.message} />
                <br />
                </Grid>
                <TextField  label="Phone" placeholder="Phone"{...register("Phone")} error={!!errors.Phone} helperText={errors.Phone?.message} />
                <br />
                <Grid item xs={12}>
                <TextField style={{width:"20%",backgroundColor: 'white', opacity: 0.8 }}  label="Tz" placeholder="Tz" {...register("Tz")} error={!!errors.Tz} helperText={errors.Tz?.message} />
                <br />
                </Grid>
                <Grid item xs={12}>
                <TextField style={{width:"20%",backgroundColor: 'white', opacity: 0.8 }}label="Password" placeholder="Password" type="Password" {...register("Password")} error={!!errors.Password} helperText={errors.Password?.message} />
                <br />
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
</Grid>
                
                <Button variant="outlined"style={{width:"20"}} type="submit">Submit</Button>

        </form>
    </div>

    );

}
export default Signup;
{/* style={{width:"20%",backgroundColor: 'white', opacity: 0.8 }} */}