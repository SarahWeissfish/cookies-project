import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import * as React from "react"
import { useSelector } from 'react-redux';
const Test=()=>{
    const{categories}=useSelector(state=>{categories:state.category.categories})
const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: categories.map((category) => category.Name),
  };
  const [value, setValue] = React.useState(null);

}
export default Test;


//הוספת קטגוריה
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

// const filter = createFilterOptions();

// export default function FreeSoloCreateOptionDialog() {
//   const [value, setValue] = React.useState(null);
//   const [open, toggleOpen] = React.useState(false);

//   const handleClose = () => {
//     setDialogValue({
//       title: '',
//       year: '',
//     });
//     toggleOpen(false);
//   };

//   const [dialogValue, setDialogValue] = React.useState({
//     title: '',
//     year: '',
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setValue({
//       title: dialogValue.title,
//       year: parseInt(dialogValue.year, 10),
//     });
//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           if (typeof newValue === 'string') {
//             // timeout to avoid instant validation of the dialog's form.
//             setTimeout(() => {
//               toggleOpen(true);
//               setDialogValue({
//                 title: newValue,
//                 year: '',
//               });
//             });
//           } else if (newValue && newValue.inputValue) {
//             toggleOpen(true);
//             setDialogValue({
//               title: newValue.inputValue,
//               year: '',
//             });
//           } else {
//             setValue(newValue);
//           }
//         }}
//         filterOptions={(options, params) => {
//           const filtered = filter(options, params);

//           if (params.inputValue !== '') {
//             filtered.push({
//               inputValue: params.inputValue,
//               title: `Add "${params.inputValue}"`,
//             });
//           }

//           return filtered;
//         }}
//         id="free-solo-dialog-demo"
//         options={top100Films}
//         getOptionLabel={(option) => {
//           // e.g. value selected with enter, right from the input
//           if (typeof option === 'string') {
//             return option;
//           }
//           if (option.inputValue) {
//             return option.inputValue;
//           }
//           return option.title;
//         }}
//         selectOnFocus
//         clearOnBlur
//         handleHomeEndKeys
//         renderOption={(props, option) => <li {...props}>{option.title}</li>}
//         sx={{ width: 300 }}
//         freeSolo
//         renderInput={(params) => <TextField {...params} label="Free solo dialog" />}
//       />
//       <Dialog open={open} onClose={handleClose}>
//         <form onSubmit={handleSubmit}>
//           <DialogTitle>Add a new film</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Did you miss any film in our list? Please, add it!
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               value={dialogValue.title}
//               onChange={(event) =>
//                 setDialogValue({
//                   ...dialogValue,
//                   title: event.target.value,
//                 })
//               }
//               label="title"
//               type="text"
//               variant="standard"
//             />
//             <TextField
//               margin="dense"
//               id="name"
//               value={dialogValue.year}
//               onChange={(event) =>
//                 setDialogValue({
//                   ...dialogValue,
//                   year: event.target.value,
//                 })
//               }
//               label="year"
//               type="number"
//               variant="standard"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button type="submit">Add</Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </React.Fragment>
//   );
// }
// check box
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// export default function CheckboxesTags() {
//   return (
//     <Autocomplete
//       multiple
//       id="checkboxes-tags-demo"
//       options={top100Films}
//       disableCloseOnSelect
//       getOptionLabel={(option) => option.title}
//       renderOption={(props, option, { selected }) => (
//         <li {...props}>
//           <Checkbox
//             icon={icon}
//             checkedIcon={checkedIcon}
//             style={{ marginRight: 8 }}
//             checked={selected}
//           />
//           {option.title}
//         </li>
//       )}
//       style={{ width: 500 }}
//       renderInput={(params) => (
//         <TextField {...params} label="Checkboxes" placeholder="Favorites" />
//       )}
//     />
//   );
// }

// add to cart icon

{/* <IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton> */}

// delete icon
{/* <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton> */}