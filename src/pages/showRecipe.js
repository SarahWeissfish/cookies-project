import { useSelector,useDispatch } from "react-redux"
import * as React from "react"
import { addToCart } from "../services/cart";
import { Button, TextField } from "@mui/material"





const ShowRecipe=(props)=>
{
  const dispatch=useDispatch();
  const{user,categories} =useSelector(state=>({
    user:state.user.user,
    categories:state.category.categories,
  }))
  const difficulty=["קל","בינוני","קשה","קשה מאד"];
  console.log(1)
  return(
  
  <div>
    <h2>Description: {props.props.Description}</h2>
    <h3>Category:</h3>
    <div>{categories[props.props.CategoryId - 1]?.Name}</div>
    <h3>Duration:</h3>
    <div> {props.props.Duration} minutes</div>
    <h3> Difficulty:</h3>
    <div>{difficulty[props.props.Difficulty - 1]}</div>
    <h3>Ingrident:</h3>{props.props.Ingrident.map((x, i) =>
        <div key={i}>
            <div>{x.Name} {x.Count} {x.Type}</div>
            <Button variant="outlined" onClick={() => dispatch(addToCart(x, 1, user))}>
                הוסף לעגלה
            </Button>
        </div>)}
    <h3>Instructions:</h3>
     {props.props.Instructions.map((x, i) =>
        <div key={i}>
            {x}</div>)}
            </div>
            
 );
  
}
export default ShowRecipe