import axios from "axios"

import { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE, SET_RECIPE } from "../store/action";

export const getRecipes=()=>{
    
    return dispatch=>
    axios.get('http://localhost:8080/api/recipe')
    .then((res)=>{
        dispatch({type:SET_RECIPE,data:res.data})
    }
    )
    .catch(error=>console.error(error))
}
export const deleteRecipe = (x) => {
    return dispatch => {
        axios.post(`http://localhost:8080/api/recipe/delete/:${x.Id}`)
            .then(() => {
                dispatch({ type: "DELETE_RECIPE", data: x })
            })
            .catch((error) => { console.error(error) })
    }
}
export const addRecipe=(recipe,user)=>
{
    return dispatch=>
    axios.post('http://localhost:8080/api/recipe',recipe)
    .then((x)=>{
        dispatch({type:ADD_RECIPE,data:x})
    })
    .catch(error=>console.error(error));
}
export const editRecipe=(data,recipe)=>{
return dispatch=>
 axios.post('http://localhost:8080/api/recipe/edit', { ...data, UserId: recipe?.UserId, Id: recipe?.Id })
 .then((res)=>{
    dispatch({type:EDIT_RECIPE,data:res.data})
 }
 )
 .catch(error=>console.error(error));
}
