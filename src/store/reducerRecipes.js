import * as Action from "./action"
const initialState={
     recipes:[]
};
const ReducerRecipes=(state=initialState,action)=>
{
   switch(action.type)
   {
    case(Action.SET_RECIPE):{
        return { ...state, recipes: action.data }
    }
    case(Action.ADD_RECIPE):{
           
            const recipes = [...state.recipes];
            recipes.push(action.data);
            return { ...state, recipes}
    }
    case(Action.EDIT_RECIPE):
    {
        const recipes = [...state.recipes];
        const findIndex = recipes.findIndex(x => x.Id === action.data.Id);
        recipes[findIndex] = action.data;
        return { ...state, recipes }
    }
    case(Action.DELETE_RECIPE):{
        const recipes=state.recipes.filter(x=>x.Id!==action.data)
        return { ...state ,recipes}
    }
    default: return { ...state }
   }
};
export default ReducerRecipes;