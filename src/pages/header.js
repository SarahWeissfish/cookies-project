import {Link,useNavigate} from "react-router-dom"
import{useDispatch,useSelector}from "react-redux"
import { useState } from "react"
import Avatar from '@mui/material/Avatar';
import * as Actions from "../store/action"
import Swal from "sweetalert2";
function stringToColor(string) {
  let hash = 0;
  let i;

 
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}`,
  };
}

const Header=()=>
{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(state=>state.user.user);

    const onLogOut = () => {
        Swal.fire({
          icon: "info",
          title: "See You Later...",
          text: `good bye ${user.Name}!!!`,
          showConfirmButton: false,
          timer: 2500
        }
        
        );
        dispatch({ type: Actions.SET_USER, user: null });
      }
      console.log(user);
      return(
        <div>{!user?(<div> 
               <Link to="/signin">התחברות</Link>
               <Link to="/signup">הרשמה</Link>


        </div>):(<div>
              <Link to="/homePage">דף הבית</Link>
              <Link to="/recipes">מתכונים</Link>
              <Link to="/myRecipes">המתכונים שלי</Link>
              <Link to="/cart">עגלה</Link>
              <Link onClick={onLogOut} to="/">התנתקות</Link>
              <Avatar {...stringAvatar(user.Name)} />
             {/* < p style={{ top: '-15px', right: '15px', position: 'absolute' }}>the current user: {user.Name}</p> */}

        </div>)
            
            
            
            }
        </div>

      );

}
export default Header;