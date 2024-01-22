import axios from "axios";

import { ADD_CATEGORY, SET_CATEGORY } from "../store/action";


 export const getCategories=()=>{

   
    return dispatch=>
    axios.get('http://localhost:8080/api/category')
    .then((res)=>
    {
        dispatch({type:SET_CATEGORY,data:res.data});
    })
    .catch((error)=>{console.error(error)})

 } 
 export const addCategories=(category)=>{
    
    return dispatch=>
    axios.post(`http://localhost:8080/api/category`, { Name: category })
    .then((res)=>{
        dispatch({type:ADD_CATEGORY,data:res.data})
    }
    ) 
    .catch((error)=>{console.error(error)})
 }