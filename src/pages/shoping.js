import { useDispatch, useSelector } from "react-redux";
import * as React from "react"
import { addToCart, getShoping } from "../services/cart";
import { deleteItem } from "../services/cart";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material"
const Shoping=()=>
{
    const{user,cart}=useSelector(state=>({
       user:state.user?.user,
       cart:state.shoping?.shopingList

    }));
     const dispatch=useDispatch();
     useEffect(() => {
        if (!cart.length)
            dispatch(getShoping(user));
    }, [])
 return(
    <div>
        {/* {cart?.map((x,id)=>(   <div key={id}>
                <div>{x.Name}</div>
                <div>lih</div>
                <div>{x.Count}</div>
               
                <button  onClick={() =>dispatch(addToCart(x, 1,user))}>add
                </button>
  
                <button  onClick={() =>dispatch( addToCart(x, -1,user))}>sub
                </button>
                
                <button  onClick={() =>dispatch(deleteItem(x))}>
                    remove
                </button>

            </div>
            
        ))} */}
        
        
        
         {cart? cart.map((x, id) => (
            <div key={id}>
            <div>{x.Name}</div>
            <div>{x.Count}</div>
         
            <Button variant="outlined"  onClick={() =>dispatch(addToCart(x, 1,user))}>add
            </Button>
          
            <Button  variant="outlined" onClick={() =>dispatch( addToCart(x, -1,user))}>sub
            </Button>
            
            <Button  variant="outlined" onClick={() =>dispatch(deleteItem(x))}>
                remove
            </Button>

        </div>
    )):<h4>your cart is empty</h4>
    }
    </div>

 );
}
export default Shoping;