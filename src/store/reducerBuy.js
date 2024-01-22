import * as Action from "./action"
const initialState={
    shopingList:[]
}
const ReducerBuy=(state=initialState,action)=>{
switch(action.type)
{ 
    case(Action.SET_BUY):{
        return  {...state,shopingList:action.data};
    }
    case(Action.EDIT_BUY):{
        const shopingList = [...state.shopingList];
            let index = shopingList.findIndex(x => x.Name == action.data.Name)
            if (index == -1) {
                shopingList.push(action.data);
            }
            else {
                if (action.data.Count==0) { 
                    shopingList.splice(index, 1)
                }
                else {
                    shopingList[index] = action.data
                }
            }
            return { ...state, shopingList }

        }
    case(Action.DELETE_BUY):{
        const shopingList = state.shopingList.filter(x => x.Name !== action.data?.Name)
        return { ...state, shopingList }
    }

    default:return {...state};
}

};
export default ReducerBuy;