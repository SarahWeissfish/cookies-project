import * as Action from "./action"

const initialState={
    categories:[],
}

const ReducerCategory=(state=initialState,action)=>{

    switch(action.type){
        case(Action.SET_CATEGORY):{
            return {...state,categories:action.data};
        }
        case(Action.ADD_CATEGORY):{
               const categories=[...state.categories];
               categories.push(action.data);
               return{...state,categories};

        }
        default: return{...state};
    }

}
export default ReducerCategory;