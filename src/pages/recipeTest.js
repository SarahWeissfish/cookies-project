
import *  as React from "react"
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import { useSelector,useDispatch } from "react-redux"
import {useLocation }from "react-router-dom"
import { addToCart } from "../services/cart";
import { Button, TextField, Typography,Card, CardMedia } from "@mui/material"
import CardContent from '@mui/material/CardContent';

import Divider from '@mui/material/Divider';
import { Stack } from "@mui/system";
const ShowRecipe=(props)=>{
    const { state }=useLocation();
    const dispatch=useDispatch();
  const{user,categories} =useSelector(state=>({
    user:state.user.user,
    categories:state.category.categories,
  }))
  const difficulty=["קל","בינוני","קשה","קשה מאד"];
  
    return(
        <Stack  direction="row"
        divider={<Divider orientation="vertical" />}
        spacing={2}>
   
      <Card sx={{ 
        
        backgroundImage: `url(${state.Img})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             position: 'fixed',
             top: 0,
             left: 0,
             bottom: 0,
             right: 0,}}>
      
         
   
       
            <Card sx={{ maxWidth: 500 ,
            }} 
             tyle={{ marginLeft: 50 }} elevation={3} >
        <CardContent>
        <Typography  variant="body2">
    <h2>Description: {state.Description}</h2>
    <h3>Category:</h3>
    <div>{categories[state.CategoryId - 1]?.Name}</div>
    <h3>Duration:</h3>
    <div> {state.Duration} minutes</div>
    <h3> Difficulty:</h3>
    <div>{difficulty[state.Difficulty - 1]}</div>
    <h3>Ingrident:</h3>{state.Ingrident.map((x, i) =>
        <Stack key={i}  direction="row"
        divider={<Divider orientation="vertical" />}
        spacing={2}>
            <div>{x.Name} {x.Count} {x.Type}</div>
            <Button variant="outlined" onClick={() => dispatch(addToCart(x, 1, user))}>
                הוסף לעגלה
            </Button>
        </Stack >)}
    <h3>Instructions:</h3>
     {state.Instructions.map((x, i) =>
        <div key={i}>
            {x}</div>)}
            </Typography> 
            </CardContent>
 </Card>
        </Card>
</Stack>

);


}
export default ShowRecipe;