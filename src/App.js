
import './App.css';
import { Route,Routes,useNavigate,useLocation } from 'react-router-dom';


import Recipe from './pages/Recipes';
import AddRecipe2 from './pages/addRecipe';
import Shoping from './pages/shoping';
import Signup from './login/signup';
import SignInSide from "./login/login"

import AddRecipe from './pages/addRecipe';
import HomePage from "./pages/homePage";
import RecipeTest from "./pages/Recipes" ;
import ShowRecipe from "./pages/showRecipe";
import Header from './pages/header';
import HomePage2 from './pages/homePage2';
function App() {
  const { pathname } = useLocation();
  return (<div >
  
  

  

   <Routes>
  
    <Route path="/"element={<HomePage2/>}></Route>
    <Route path="/signin" element={<SignInSide/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/homePage" element={<HomePage/>}></Route>
    <Route path="/recipes" element={<RecipeTest />}></Route>
    <Route path="/myRecipes" element={<RecipeTest />}></Route>
    <Route path="/cart" element={<Shoping/>}></Route>
    <Route path="/recipes/add" element={<AddRecipe2/>}></Route>
    <Route path="/recipes/editRecipe" element={<AddRecipe/>}></Route>
    <Route path="/recipes/showRecipe" element={<ShowRecipe/>}></Route>
    
   </Routes>
  

  
  
  </div>
   
  );
}

export default App;
