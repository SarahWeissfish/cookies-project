
import *  as React from "react"
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import { useSelector,useDispatch } from "react-redux"
import {useLocation,useNavigate }from "react-router-dom"
import { addToCart } from "../services/cart";
import { Button, TextField, Typography,Card, CardMedia } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import { Stack } from "@mui/system";
import Header from "./header"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export default (props) => {
  const { user, categories } = useSelector(state => ({
      user: state.user.user,
      categories: state.category.categories
  }))
  const { state } =useLocation();

  const dispatch = useDispatch();
  const difficulty = ["קל", "בינוני", "קשה", "קשה מאד"]
    
        // // <Stack  direction="row"
        // // divider={<Divider orientation="vertical" />}
        // // spacing={2}>
        //   <Grid item  xs={12} sm={6} md={4}>
        //         <Card
        //           sx={{ height: '50%', display: 'flex', flexDirection: 'column' }}
        //         >
        //           <CardMedia
        //             component="div"
        //             sx={{
        //               // 16:9
        //               pt: '56.25%',
        //               width:"50%"
        //             }}
        //             image={state.Img}
        //           />
        //           <CardContent sx={{ flexGrow: 1 }}>

        //             <Typography gutterBottom variant="h5 " component="h2">
        //               {state.Name}
        //             </Typography>
        //             <Divider variant="middle"  />
        //             <Typography component="h3">
        //               {state.Description}
        //             </Typography>
        //             <Stack  direction="row"
        //             divider={<Divider orientation="vertical" />}
        //               spacing={2}>
        //                 <Typography component="h6">{difficulty[state.Difficulty - 1]}</Typography>
        //                 <Typography component="h6">{state.Duration} minutes</Typography> 
        //                 <Typography component="h6">{categories[state.CategoryId - 1]?.Name}</Typography>
        //             </Stack>
        //             <Stack direction="column" spacing={1}>
        //             <Typography component="h3" >Ingredients:</Typography>
        //                 {state.Ingrident.map((x, i) =>
        //                        <Stack direction="row"  spacing={2}>
        //                <div>{x.Count} {x.Type} {x.Name}</div>
        //              <Button variant="outlined" onClick={() => dispatch(addToCart(x, 1, user))}>
        //                 הוסף לעגלה
        //                </Button> </Stack>)}
        //                </Stack>
        //                <Typography component="h3">Instructions: </Typography>
        //                {state.Instructions.map((x, i) =>
        //                <div key={i}>
        //             {x}</div>)}

        //           </CardContent>
        //           <CardActions>
        //             {/* <Button size="small" startIcon={<DeleteIcon />} disabled={recipe.UserId !== user.Id} onClick={() => deleteRecipes(recipe.Id)}>Delete</Button>
        //             <Button size="small" startIcon={<EditIcon />} disabled={recipe.UserId !== user.Id} 
        //             onClick={()=>{navigate("/recipes/editRecipe", { state: recipe })}}>Edit</Button> */}
        //             <Button size="small" startIcon={<ExpandMoreIcon />} onClick={()=>{
        //                navigate("/recipes")
        //             }}>Back</Button>
        //           </CardActions>
        //         </Card>
          
        //       </Grid>);
{/*    
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
</Stack> */}



    return (
        <>
<Header/>
        <Card id="detailes" sx={{ maxWidth: 500 }} style={{ marginLeft: 50 }}>
            {/* <CardMedia
                component="img"
                alt="image"
                height="140"
                image={props.props.Img}
            /> */}
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
                    {props.props.Name}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    <h2>Description:</h2>
                    <h3> {state.Description}</h3>
                   <Stack direction="row" spacing={2}>
                    <div>{categories[state.CategoryId - 1]?.Name}</div>
                    <div> {state.Duration} minutes</div>               
                    <div>{difficulty[state.Difficulty - 1]}</div>
                    </Stack>
                    <h3>Ingrident:</h3>{state.Ingrident.map((x, i) =>
                        <div key={i}>
                            {/* <div>{x.Name} {x.Count} {x.Type}</div> */}
                            <Button  endIcon={< AddShoppingCartIcon />} onClick={() => dispatch(addToCart(x, 1, user))}>
                            {x.Name} {x.Count} {x.Type}
                            </Button>
                               
                          
                        </div>)}
                    <h3>Instructions:</h3>
                     {state.Instructions.map((x, i) =>
                        <div key={i}>
                            {x}</div>)}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card></>
     );
}

  


