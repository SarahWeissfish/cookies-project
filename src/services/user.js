 import axios from "axios";
import * as Actions from "../store/action"
import Swal from "sweetalert2";


export const SetUser=(data,navigate)=> {
    return dispatch => {
        axios.post('http://localhost:8080/api/user/login', { Username: data.userName, Password: data.password })
        .then((d) => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `welcome ${ data.userName}!!!`,
                showConfirmButton: false,
                timer: 2500
            });
            dispatch({ type: Actions.SET_USER, user: d.data })
            // localStorage.setItem("user" ,JSON.stringify(data))
            navigate("/homePage")
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data
            });
           navigate("/signup",{state:data})
        })
    }
}
export const SignUp = (data, navigate) => {
    // alert("dldjdj")
    return dispatch => {
        axios.post("http://localhost:8080/api/user/sighin", {Username: data.userName, Password: data.password,Name:data.Name,Email:data.Email,Phone:data.Phone,Tz:data.Tz})
            .then((d) => {
                // alert("dldjdj")
                dispatch({ type: Actions.SET_USER, user: d.data })
                Swal.fire({
                    position: "top",
                    title:  d.data.Name +`welcome`,
                    showConfirmButton: false,
                    timer: 1500
                }) 
                navigate("/");
            }).catch(() => {
                navigate('/signin');
                Swal.fire({
                    position: "top",
                    title: "You have already an account",
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    }
}