
  import * as React from 'react';
  import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
 import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate,Link,useLocation} from"react-router-dom"
import{useDispatch,useSelector} from"react-redux"
import {useForm,useFieldArray} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';



import { addRecipe,editRecipe } from "../services/recipes";







// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddRecipe() {

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
 Ingredients: state?.Ingrident,
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

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />

       <Box
sx={{
  backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1528861108107-0KSULBP2ZTUERAC3EWOW/DSC_0101.jpg?format=1500w)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,

}}

>
  </Box>
        <Box
          style={{ padding: '5%',backgroundColor:"whitesmoke", opacity: 0.8 }}
          sx={{
              
            width:"200%",
              marginTop: 8,
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
       
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Your Recipe
          </Typography>
          
          <Box 
          
          
          component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3
           }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                //   autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Recipe Name"
                  {...register("Name")} 
                  error={!!errors.Name} 
                  helperText={errors.Name?.message}
               
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="description"
                 
                  label="Description" 
                 
                  {...register("Description")} 
                  error={!!errors.Description} 
                  helperText={errors.Description?.message}
                />
              </Grid>
              <Stack  alignItems='center' paddingTop={2} direction="row">
              <Grid item xs={12} >
              <FormControl item xs={12}>
                    <InputLabel item xs={12}>CategoryId</InputLabel>
                    <Select {...register("CategoryId")} error={!!errors.CategoryId} displayEmpty>
                        { Categories?.map((x) => (
                            <MenuItem key={x.Id} value={x.Id}>
                                {x.Name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} >
              <FormControl >
                    <InputLabel>Difficulty</InputLabel>
                    <Select {...register("Difficulty")} error={!!errors.Difficulty} displayEmpty helperText={errors.Difficulty?.message}>
                        {/* <MenuItem value="" disabled>Select Difficulty</MenuItem> */}
                        <MenuItem value={1}>קל</MenuItem>
                        <MenuItem value={2}>בינוני</MenuItem>
                        <MenuItem value={3}>קשה</MenuItem>
                        <MenuItem value={4}>קשה מאד</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} >
                <TextField
                 
                  nullable
                  fullWidth
                  id="duration"
                  label="Duration" 
                   {...register("Duration")}
                    error={!!errors.Duration}
                     helperText={errors.Duration?.message} 
                />
              </Grid></Stack>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="img"
                  label="Img URL" 
                  {...register("Img")} 
                  error={!!errors.Img}
                   helperText={errors.Img?.message}
                />
              </Grid>
              <Stack direction="row" spacing ={2} paddingTop={2}>
              <Box>
              <Grid item xs={12} >
                
                    {  Ingredients?.map((item, index) => (
                        <div key={index} style={{display:'flex',flexDirection:'column',alignItems:'center', opacity: 0.8}}>
                          <Stack sx={{alignItems:'center'}} direction="row"> <Grid item xs={12} sm={12}>
                            <TextField type="text" label="product name:"  {...register(`  Ingredients.${index}.Name`)} />
                            </Grid>
                            <Grid item xs={5} sm={5}>
                            <TextField label="count:" {...register(`Ingrident.${index}.Count`)} />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                            <TextField type="text" label="type:" {...register(`Ingrident.${index}.Type`)} />
                            </Grid></Stack> 
                        </div>
                    ))}
                </Grid>
               
               <Button  xs={12}variant="outlined" startIcon={<AddIcon />} onClick={() => appendIngridents({ Name: "", Count: 0, Type: "" })}>
                    ADD INGRIDENT
                </Button>
                </Box>
                <Box>
                <Grid item sx={12}>
                    {Instructions?.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <TextField type="text" placeholder="enter Instruction:" {...register(`Instructions.${index}`)} />
                        </Grid>
                    ))}
                </Grid>
                
                
                <Button xs={12} variant="outlined" startIcon={<AddIcon />} onClick={() => appendInstructions(" ")}>
                    ADD INSTRUCTION
                </Button>
                </Box>
                </Stack>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<SendIcon />}
              >
              Save Changes
            </Button>
            
          </Box>
          </Box>
    
       
        
      </Container>
      
    </ThemeProvider>
    
  );
}