import { useState, useEffect } from 'react'
import { Button, TextField } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/dist';
import { deleteRecipe, getRecipes } from '../services/recipes';
import { addCategories, getCategories } from '../services/category';
import Swal from 'sweetalert2'
import ShowRecipe from './showRecipe';

const Recipe =()=>{

    const[selectedCategory, setSelectedCategory]= useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [ifAddCategory, setIfAddCategory] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const { pathname } = useLocation();
    
    const {user, recipes, categories } = useSelector(state => ({
        user: state.user.user,
        recipes: state.recipes.recipes.filter(x => pathname == '/recipes' || x.UserId === state.user.user.Id),
        categories: state.category.categories
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

const handeleDuaration=(event)=>
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
function deleteRecipes(recipe){
    Swal.fire({
        title:"האם אתה בטוח שברצונך למחוק מתכון זה?",
        text: "לא תוכל לשחזר אותו לאחר המחיקה",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "כן, אני בטוח"
    })
    .then((result)=>{
        if(result.isConfirmed)
        {
            Swal.fire({
                title: "נמחק!",
                text: "המתכון נמחק בהצלחה.",
                icon: "success"
            });
            dispatch(deleteRecipe(result))
        }
    });
}
return (
    <div>
        <Button variant="outlined" onClick={() => (navigate('/recipes/add'), { state: null })}>הוספת מתכון</Button>
        <br/>
        <Button variant="outlined" onClick={()=>{setIfAddCategory(true)}}>הוספת קטגוריה</Button>
        <br/>
        
        {ifAddCategory ?
            <TextField  label="Category Name" placeholder='הוסף קטגוריה'
                onBlur={(e) => {
                    dispatch(addCategories(e.target.value));
                    setIfAddCategory(false)
                 // צריך לטפל שהשדה יעלם אחרי שזה נשלח
                }} />
            : null}
       
       {recipes.map(x => (!selectedCategory || x.CategoryId == selectedCategory) && (!selectedDuration || getDuartion(x.Duration)) && (!selectedDifficulty || selectedDifficulty == x.Difficulty) ?
            
       <div key={x.Id}>
       
      <div >
           <h1>{x.Name}
           </h1>
           <img src={x.Img}></img>
           <br/>
           <Button variant="outlined" onClick={()=>{setShowDetails(true); setSelectedRecipe(x)}}>פרטי המתכון</Button>
           <Button variant="outlined" onClick={()=>{deleteRecipes(x.Id)}}>מחק מתכון</Button>
           <Button variant="outlined" onClick={()=>navigate("/recipes/editRecipe",{state:x}) }>ערוך מתכון</Button>
         </div>
         { showDetails && selectedRecipe && selectedRecipe.Id === x.Id ? (
                <ShowRecipe props={selectedRecipe} />
            ) : null}
         </div>
         : null )
}
</div> 
       
      
       
       
       
   
)



}
export default Recipe;