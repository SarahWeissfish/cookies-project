import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Header from '../header'
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react'
import { useSelector} from "react-redux"
import { useNavigate ,Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/dist';
import { deleteRecipe, getRecipes } from '../../services/recipes';
import { getCategories } from '../../services/category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from 'sweetalert2'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import Alert from "@mui/material/Alert";






import { Button,TextField, Select, MenuItem, FormControl, InputLabel, CardMedia, CardActions, Card, Typography } from '@mui/material';





function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/homePage">
       Cookies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Recipes() {


    
    const[selectedCategory, setSelectedCategory]= useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
   
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const { pathname } = useLocation();
    
    const {user, recipes, categories } = useSelector(state => ({
        user: state.user?.user,
        recipes: state.recipes?.recipes.filter(x => pathname == '/recipes' || x?.UserId === state.user.user?.Id),
        categories: state.category?.categories
    }));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!recipes.length)
            dispatch(getRecipes());
        if (!categories.length)
            dispatch(getCategories())
    }, [])
const handelCategory=(event)=>{
// const changedCategory=event.target.value;//Id
setSelectedCategory(event.target.value);
}

const handeleDuration=(event)=>
{
    setSelectedDuration(event.target.value);
}

const handleDifficulty=(event)=>
{
    setSelectedDifficulty(event.target.value)
} 
function getDuartion(recipe_duartion)
{
    switch(selectedDuration)
    {
        case 60:
            return (recipe_duartion>=60);
        case 45:
            return (recipe_duartion>=45&&recipe_duartion<60)   
        case 30:
            return (recipe_duartion>=30&&recipe_duartion<45)   
        case 15:
            return (recipe_duartion>=15&&recipe_duartion<30)
        default:return(false)             
    }
}

function deleteRecipes(Id) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            dispatch(deleteRecipe(Id))
        }
    });
}

  return (
    <div id="recipes">{user==null?
    <div id="error"><Alert severity="error">Oopsssss.... it seems that you are not connected...</Alert>
    <Link to="/signin">sign in here!!</Link>
    </div>:
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >{pathname == '/recipes'?(
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Recipes Gallery
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Here you can find nutritious ,delicios,and easy making recipes,
              there are recipes form all kinds of categories
              diary, fleshy, sweet , sour , and also chocolate...
            </Typography>
            
            {/* <Button align="center" variant="outlined" startIcon={<AddIcon />} onClick={() => (navigate("/recipes/add"), { state: null })}>
                
            ADD RECIPE
        </Button> */}
        
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>):( <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Recipes
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Here you can save and edit your traditional recipes,
              in addition you can add prods to your cart,
              what make the cooking and baking easier then ever..
            </Typography>
            
           
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>)
          }
           <div align="center" style={{ display: 'inline-flex' }}>
           <Button variant="outlined" startIcon={<AddIcon />} onClick={() => (navigate("/recipes/add"), { state: null })}>
                
                ADD RECIPE
            </Button>
            
      
            <InputLabel>Category</InputLabel>
            <Select onChange={handelCategory} value={selectedCategory || ''}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {categories.map((x) => (
                    <MenuItem key={x.Id} value={x.Id}>
                        {x.Name}
                    </MenuItem>
                ))}
            </Select>

            <InputLabel>Duration</InputLabel>
            <Select onChange={ handeleDuration} value={selectedDuration || ''}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={15}>15 minutes</MenuItem>
                <MenuItem value={30}>30 minutes</MenuItem>
                <MenuItem value={45}>45 minutes</MenuItem>
                <MenuItem value={60}>an hour and more</MenuItem>
            </Select>

            <InputLabel>Difficulty</InputLabel>
            <Select onChange={handleDifficulty} value={selectedDifficulty || ''}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={1}>קל</MenuItem>
                <MenuItem value={2}>בינוני</MenuItem>
                <MenuItem value={3}>קשה</MenuItem>
                <MenuItem value={4}>קשה מאד</MenuItem>
            </Select>
            {/* <button onClick={sort}>sort by alphbetic order</button> */}
        </div>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {recipes.map((recipe) => (!selectedCategory || recipe.CategoryId == selectedCategory)&& (!selectedDuration || getDuartion(recipe.Duration)) && (!selectedDifficulty || selectedDifficulty == recipe.Difficulty)?
              <Grid item key={recipe.Id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={recipe.Img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recipe.Name}
                    </Typography>
                    <Divider variant="middle"  />
                    <Typography>
                      {recipe.Description}
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<DeleteIcon />} disabled={recipe.UserId !== user.Id} onClick={() => deleteRecipes(recipe.Id)}>Delete</Button>
                    <Button size="small" startIcon={<EditIcon />} disabled={recipe.UserId !== user.Id} 
                    onClick={()=>{navigate("/recipes/editRecipe", { state: recipe })}}>Edit</Button>
                    <Button size="small" startIcon={<ExpandMoreIcon />} onClick={()=>{
                        setShowDetails(true);
                        setSelectedRecipe(recipe);
                    }}>View</Button>
                  </CardActions>
                </Card>
                {showDetails&&selectedRecipe&&selectedRecipe.Id==recipe.Id?(navigate("/recipes/showRecipe",{state:selectedRecipe})):<></>}
              </Grid>:null
            )}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
         Enjoyed?
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          You can also be part of this big project by sharing your recipe with us!
        </Typography>
       
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
 } </div> );
}
