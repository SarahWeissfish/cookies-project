
import './App.css';
import { Route,Routes,useNavigate,useLocation } from 'react-router-dom';
import Header from './pages/header'
import HomePage from './pages/homePage';
import Recipe from './pages/Recipes';
import AddRecipe from './pages/addRecipe';
import Shoping from './pages/shoping';
import Signin from './login/signin';
import Signup from './login/signup';
import SignInSide from "./pages/loginTest"
import SignUpTest from "./pages/signupTest"
import AddRecipe2 from './pages/addRecipeTest';
import HomePageTest from "./pages/homePageTest";
import RecipeTest from "./pages/recipesTest" ;
import ShowRecipeTest from "./pages/recipeTest"
function App() {
  const { pathname } = useLocation();
  return (<div >
  <Header/>
  <hr/>

  

   <Routes>
    <Route path="/signin" element={<SignInSide/>}></Route>
    <Route path="/signup" element={<SignUpTest/>}></Route>
    <Route path="/homePage" element={<HomePageTest/>}></Route>
    <Route path="/recipes" element={<RecipeTest />}></Route>
    <Route path="/myRecipes" element={<RecipeTest />}></Route>
    <Route path="/cart" element={<Shoping/>}></Route>
    <Route path="/recipes/add" element={<AddRecipe/>}></Route>
    <Route path="/recipes/editRecipe" element={<AddRecipe/>}></Route>
    <Route path="/recipes/showRecipe" element={<ShowRecipeTest/>}></Route>
    
   </Routes>
  

  
  
  </div>
   
  );
}

export default App;
