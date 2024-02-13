import { useFieldArray, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Card, CardActions, CardMedia, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { addRecipe, editRecipe } from '../../services/recipes'
import Header from '../header'
import Grid from '@mui/material/Grid';


import { addCategories, getCategories } from '../../services/category';
import SendIcon from '@mui/icons-material/Send';

export default () => {


    const schema = yup
        .object({
            Name: yup.string().required(),
            CategoryId: yup.number().required(),
            Img: yup.string().required(),
            UserId: yup.number().required(),
            Duration: yup.number().required(),
            Difficulty: yup.number().required(),
            Description: yup.string().required(),
            Instructions: yup.array(yup.string()),
            Ingrident: yup.array().of(yup.object({
                Name: yup.string().nullable(),
                Count: yup.string().nullable(),
                Type: yup.string().nullable(),
            }))
        })
        .required()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { state } = useLocation()
    const selectRecipe = state;
    const { UserId, Categories } = useSelector(state => ({
        UserId: state.user?.user?.Id,

        Categories: state.category.categories
    }))
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { Name: state?.Name, UserId: UserId, CategoryId: state?.CategoryId, Img: state?.Img, Duration: state?.Duration, Difficulty: state?.Difficulty, Description: state?.Description, Ingrident: state?.Ingrident, Instructions: state?.Instructions }
    })
    const { fields: Instructions, append: appendInstructions } = useFieldArray({
        control, name: "Instructions"
    });
    const { fields: Ingrident, append: appendIngridents } = useFieldArray({
        control, name: "Ingrident"
    });

    const onSubmit = (data) => {
        const recipe = { UserId: UserId, ...data, Id: state?.Id };
        state != null && dispatch(editRecipe((recipe))) || state == null && dispatch(addRecipe(recipe));
        navigate('/recipes');
    }
    console.log(Categories);
    const [ifAddCategory, setIfAddCategory] = useState(false);
    useEffect(() => {

        if (!Categories.length)
            dispatch(getCategories())
    }, [])
    return (
        <div className='add' alignItems="center">
            <Header />

            <Box id="addCard" sx={{ transform: 'scale(0.8)', width: '50%', backgroundColor: "whitesmoke", opacity: 0.9, paddingTop: 5, paddingBottom: 5, marginLeft: "25%", marginRight: "25%" }} style={{ marginTop: 50 }}>
                <Typography>Your Recipe</Typography>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.8, marginTop: 9 }} className='form' onSubmit={handleSubmit(onSubmit)}>
                    <TextField style={{ width: '80%' }} label="Recipe Name" {...register("Name")} error={!!errors.Name} helperText={errors.Name?.message} />
                    <br />
                    <TextField style={{ width: '80%' }} label="Description" {...register("Description")} error={!!errors.Description} helperText={errors.Description?.message} />
                    <br />
                    <FormControl style={{ width: '80%', backgroundColor: "whitesmoke", opacity: 0.7 }}>
                        <InputLabel >CategoryId</InputLabel>
                        < select {...register("CategoryId")} error={!!errors.CategoryId} >
                            {Categories.map((x) => (
                                <option value={x.Id}>
                                    {x.Name}
                                </option>))}
                        </select>
                    </FormControl>
                    <br />
                    <Button variant="outlined" startIcon={<AddIcon />} onClick={() => setIfAddCategory(true)}>ADD CATEGORY </Button>
                    <br />
                    {ifAddCategory ?
                        <TextField style={{ width: '80%' }} label="Category Name"
                            onBlur={(e) => {
                                dispatch(addCategories(e.target.value));
                                setIfAddCategory(false)
                            }} />
                        : null}
                    <br />
                    <TextField style={{ width: '80%', backgroundColor: "whitesmoke", opacity: 0.7 }} label="Img URL" {...register("Img")} error={!!errors.Img} helperText={errors.Img?.message} />
                    <br />
                    <TextField style={{ width: '80%', backgroundColor: "whitesmoke", opacity: 0.7 }} label="Duration" type="input" {...register("Duration")} error={!!errors.Duration} helperText={errors.Duration?.message} />
                    <br />
                    <FormControl style={{ width: '80%', backgroundColor: "whitesmoke", opacity: 0.7 }}>
                        <InputLabel>Difficulty</InputLabel>
                        <select {...register("Difficulty")} error={!!errors.Difficulty} helperText={errors.Difficulty?.message}>

                            <option value={1}>קל</option>
                            <option value={2}>בינוני</option>
                            <option value={3}>קשה</option>
                            <option value={4}>קשה מאד</option>
                        </select>
                    </FormControl>
                    <br />
                    <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        {Ingrident?.map((item, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', width: '80%', paddingBottom: 5, opacity: 0.8, alignSelf: "center" }}>
                                <TextField type="text" label="product name:"  {...register(`Ingrident.${index}.Name`)} />
                                <TextField label="count:" {...register(`Ingrident.${index}.Count`)} />
                                <TextField type="text" label="type:" {...register(`Ingrident.${index}.Type`)} />
                            </div>

                        ))}
                    </Grid>
                    <Button style={{ width: '50%' }} variant="outlined" startIcon={<AddIcon />} onClick={() => appendIngridents({ Name: "", Count: 0, Type: "" })}>
                        ADD INGRIDENT
                    </Button>
                    <br />
                    <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        {Instructions?.map((item, index) => (
                            <div key={index} >
                                <TextField type="text" label="Instruction:" placeholder="enter Instruction:" {...register(`Instructions.${index}`)} />
                            </div>
                        ))}
                    </Grid>
                    <Button style={{ width: '50%' }} variant="outlined" startIcon={<AddIcon />} onClick={() => appendInstructions(" ")}>
                        ADD INSTRUCTION
                    </Button>
                    <br />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>

            </Box>
        </div>
    );
}
