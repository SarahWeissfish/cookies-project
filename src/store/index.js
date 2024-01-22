import ReducerBuy from "./reducerBuy";
import ReducerRecipes from "./reducerRecipes";
import ReducerCategory from "./reducerCategory";
import ReducerUser from "./reducerUser";
import{createStore,combineReducers, applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

const reducers=combineReducers({
    user:ReducerUser,
    recipes:ReducerRecipes,
    shoping:ReducerBuy,
    category:ReducerCategory
});
const store=createStore(reducers,applyMiddleware(thunk));
export default store;