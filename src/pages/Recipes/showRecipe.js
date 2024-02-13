
import *  as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { addToCart } from "../../services/cart";
import { Button, TextField, Typography, Card, CardMedia } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Stack } from "@mui/system";
import Header from "../header"
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export default (props) => {
    const { user, categories } = useSelector(state => ({
        user: state.user.user,
        categories: state.category.categories
    }))
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const difficulty = ["קל", "בינוני", "קשה", "קשה מאד"]


    return (
        <div align="center">
            <Header />


            <Card sx={{ maxWidth: 500 }} style={{ marginLeft: 50, marginTop: 50 }} >
                <CardMedia
                    component="img"
                    alt="image"
                    height="300"
                    image={state.Img}
                />
            </Card>
            <Card align="center" id="detailes" sx={{ maxWidth: 500 }} style={{ margintTop: 100, marginLeft: 50, marginTop: 9 }}>


                <CardContent>

                    <Button startIcon={<CloseIcon fontSize="large" />} onClick={() => navigate("/recipes")}></Button>
                    <Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} variant="body2" color="text.secondary">
                        <h1>{state.Name}</h1>
                        <h2>Description:</h2>
                        <h3> {state.Description}</h3>
                        <Stack align="center" alignItems="center" direction="row" spacing={2}>
                            <div>{categories[state.CategoryId - 1]?.Name}</div>
                            <div> {state.Duration} minutes</div>
                            <div>{difficulty[state.Difficulty - 1]}</div>
                        </Stack>
                        <h3>Ingrident:</h3>{state.Ingrident.map((x, i) =>
                            <div key={i}>

                                <Button endIcon={< AddShoppingCartIcon />} onClick={() => dispatch(addToCart(x, 1, user))}>
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

                </CardActions>
            </Card></div>
    );
}




