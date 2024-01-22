import { useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addRecipe,editRecipe } from "../services/recipes";
import { Button, TextField } from "@mui/material"

const schema=yup.object(
    {Name:yup.string().required(),
     CategoryId:yup.number().required(),
     Img:yup.string(),
     UserId:yup.number().required(),
     Duration:yup.number().required(),
     Difficulty:yup.number().required(),
     Description:yup.string().required(),
     Instructions:yup.array(yup.string().nullable()),
     Ingredients:yup.array().of(yup.object(
        {   Name:yup.string().nullable(),
            Count:yup.string().nullable(),
            Type:yup.string().nullable(),

        }))
    }).required();

const AddRecipe=()=>
{

      const dispatch=useDispatch();
      const navigate=useNavigate();
       const { state }=useLocation();
       const selectedRecipe=state;
       const {UserId,Categories}=useSelector(state=>({
          UserId:state.user.user?.Id,
          Categories:state.category.Categories
          
       }));
    const {
        register,
        handleSubmit,
        control,
        formState:{errors}
    }=useForm({resolver:yupResolver(schema),
         defaultValues:{Name:state?.Name,
   UserId:UserId,
   CategoryId:state?.CategoryId,
   Img:state?.Img,
   Duration:state?.Duration,
   Difficulty:state?.Difficulty,
   Description:state?.Description,
   Ingridents: state?.Ingrident,
   Instructions: state?.Instructions
    }})
    const { fields: Instructions, append: appendInstructions } = useFieldArray({
        control, name: "Instructions"
    });
    const { fields: Ingredients, append: appendIngridents } = useFieldArray({
        control, name: "Ingredients"
    });
    const onSubmit = (data) => {
        {
            if (selectedRecipe == null)
                dispatch(addRecipe(data,UserId))
            else
                dispatch(editRecipe(data, selectedRecipe))
            navigate('/recipes')
        }
    }
return(<div>
    {UserId? <form>



<TextField style={{width:"30%" }} label="Recipe Name" placeholder="שם המתכון" {...register("Name")} error={!!errors.Name} helperText={errors.Name?.message} />
<br/>
<TextField style={{width:"30%" }} label="Description" placeholder="תיאור" {...register("Description")} error={!!errors.Description} helperText={errors.Description?.message}/>
<br/>
<TextField style={{width:"30%" }} label="Category" placeholder="קטגוריה" {...register("CategoryId")}  error={!!errors.CategoryId} helperText={errors.CategoryId?.message}/>
<br/>
<TextField style={{width:"30%" }} label="Duration" placeholder="זמן הכנה" {...register("Duration")}  error={!!errors.Duration} helperText={errors.Duration?.message}/>
<br/>
<TextField style={{width:"30%" }}label="Difficulty" placeholder="דרגת קושי" {...register("Difficulty")}  error={!!errors.Difficulty} helperText={errors.Difficulty?.message}/>
<br/>
<div >
 {Ingredients?.map((item, index) => (
   <div key={index} >
     <TextField style={{width:"16%" }} type="text" label="product name:" placeholder="מצרך"  {...register(`Ingredients.${index}.Name`)} />
     <TextField style={{width:"7%" }} label="count:" placeholder="כמות" {...register(`Ingridents.${index}.Count`)} />
     <TextField style={{width:"7%" }} type="text" label="type:" placeholder="סוג" {...register(`Ingridents.${index}.Type`)} />
   </div>
     ))}
   </div>
   <Button  variant="outlined" onClick={()=>appendIngridents({Name:"" ,Type:""}) }>הוספת מצרך</Button>
    <div>
        {Instructions?.map((instruction,index)=>(
          <div key={index}>
            <TextField style={{width:"30%" }} type="text" label="instruction" placeholder="" {...register(`Instructions.${index}`)}/>
            </div>
        ))}
        </div>     
     <Button variant="outlined" onClick={()=>appendInstructions(" ")}>הוספת הוראה</Button>          
    <br/>
     {/* <button type="submit" onSubmit={()=>handleSubmit(onSubmit(...register))} > שלח</button>              */}
     </form>:
     <h1> אופס... אינך מחובר</h1>}

     </div>);




}
export default AddRecipe;