
import './App.css';
import { Route,Routes,useNavigate,useLocation } from 'react-router-dom';
import Shoping from './pages/shoping';
import SignInSide from "./pages/User/login"
import AddRecipe from './pages/Recipes/addRecipe';
import HomePage from "./pages/homePage";
import RecipeTest from "./pages/Recipes/Recipes" ;
import ShowRecipe from "./pages/Recipes/showRecipe";
import HomePage2 from './pages/homePage2';
import SignUp from "./pages/User/signup";
function App() {
  const { pathname } = useLocation();
  return (<div >
  
  

  

   <Routes>
  
    <Route path="/"element={<HomePage2/>}></Route>
    <Route path="/signin" element={<SignInSide/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/homePage" element={<HomePage/>}></Route>
    <Route path="/recipes" element={<RecipeTest />}></Route>
    <Route path="/myRecipes" element={<RecipeTest />}></Route>
    <Route path="/cart" element={<Shoping/>}></Route>
    <Route path="/recipes/add" element={<AddRecipe/>}></Route>
    <Route path="/recipes/editRecipe" element={<AddRecipe/>}></Route>
    <Route path="/recipes/showRecipe" element={<ShowRecipe/>}></Route>
    
   </Routes>
  

  
  
  </div>
   
  );
}

export default App;
