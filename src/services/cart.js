import axios from "axios";

import { DELETE_BUY, EDIT_BUY, SET_BUY } from "../store/action";


export const getShoping=(user)=>
{
    return dispatch=>
    axios.get(`http://localhost:8080/api/bay/${user.Id}`)
    .then((res)=>{
        dispatch({type:SET_BUY,data:res.filter(x=>x.Count!=0)})
    })
    .catch(error=>console.error(error))
}
// export const deleteItem=(item)=>
// {
//     return dispatch=>
//     axios.post(`http://localhost:8080/api/bay/delete/${item.Id}`)
//     .then(()=>{
//         dispatch({type:DELETE_BUY,data:{Name:item.Name,user:item.UserId,Id:item.Id}})
//     })
//     .catch(error=>console.error(error))
     
// }
export const deleteItem = (x) => {
    return dispatch => {
        axios.post(`http://localhost:8080/api/bay/delete/${x.Id}`)
            .then(() => {
                dispatch({ type: "DELETE_BUY", data: { Name: x.Name, user: x.UserId, Id: x.Id } })
            })
            .catch((error) => { console.error(error) })
    }
}

export const addToCart = (x, count,user) => {
    return dispatch => {
            axios.post(`http://localhost:8080/api/bay`, { Name: x.Name, UserId: user.Id, Count: count })
                .then((res) => {
                    dispatch({ type: "EDIT_BUY", data: { Name: x.Name, UserId: user.Id, Count: res.data.Count } })
                }).catch((error) => console.error(error))
        }
    }