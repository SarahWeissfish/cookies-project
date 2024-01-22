
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button, TextField } from "@mui/material"
import {useNavigate,useLocation,Link}from "react-router-dom"
import {useDispatch} from "react-redux"
import {SetUser} from '../services/user'

const schema=yup.object({
userName:yup.string().required(),
password:yup.string().min(3).required(),
}).required();


const Signin=()=>
{
const navigate=useNavigate();
const dispatch=useDispatch();
const { state } = useLocation();

const {register,
    handleSubmit,
    formState:{errors},
}= useForm({resolver:yupResolver(schema),defaultValues:{userName:state?.Username,password:state?.password}})
const onSubmit=(data)=>{
    dispatch(SetUser(data,navigate))
}

return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField style={{width:'20%'}} label="User Name" {...register("userName")} placeholder="שם משתמש" type="Name" error={!!errors.userName} helperText={errors.userName?.message}/>
      <br/>
      <TextField style={{width:'20%'}} label="Password" placeholder="סיסמא" type="Password" {...register("password")} error={!!errors.password} helperText={errors.password?.message}/>
      <br/>
      <Button  variant="outlined" color="secondary" style={{width:'10%'}} type="submit">התחברות</Button>
      <br/>
      <Link to={"/signup"}>אין לכם חשבון עדיין? לחצו כאן להרשמה</Link>
      
     </form>
</div>
}
export default Signin;