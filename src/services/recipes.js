import axios from "axios"
import Swal from "sweetalert2";
import { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE, SET_RECIPE } from "../store/action";

export const getRecipes = () => {

    return dispatch =>
        axios.get('http://localhost:8080/api/recipe')
            .then((res) => {
                dispatch({ type: SET_RECIPE, data: res.data })
            }
            )
            .catch(error => console.error(error))
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

export const addRecipe = (data) => {

    return dispatch => axios.post('http://localhost:8080/api/recipe', data)
        .then((x) => {
            dispatch({ type: ADD_RECIPE, data: x.data })
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your Recipe has been added",
                showConfirmButton: false,
                timer: 1500
            })
        }).catch(() => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The recipe adding was failed",
            footer: '<a href="#">retrying?</a>'
        }));
}
export const editRecipe = (data, recipe) => {

    return dispatch =>
        axios.post('http://localhost:8080/api/recipe/edit', { ...data })
            .then((res) => {

                dispatch({ type: EDIT_RECIPE, data: res.data });
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your Recipe has been updated",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            )
            .catch(error => Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The recipe editing was failed",
                footer: '<a href="#">retrying?</a>'
            }));
}
