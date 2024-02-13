import { useDispatch, useSelector } from "react-redux";
import * as React from "react"
import { addToCart, getShoping } from "../services/cart";
import { deleteItem } from "../services/cart";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material"
import Header from './header'
import Alert from "@mui/material/Alert";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Shoping() {
  const { user, cart } = useSelector(state => ({
    user: state.user?.user,
    cart: state.shoping?.shopingList

  }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cart.length)
      dispatch(getShoping(user));
  }, [])
  return (<>
    <Header />
    {cart.length ?
      <TableContainer component={Paper} align="center">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right" />
              <TableCell align="right">Item</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right" />

            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow
                key={item.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">

                  <Button variant="outlined" onClick={() => dispatch(deleteItem(item))}>
                    remove
                  </Button>

                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  <Button variant="outlined" onClick={() => dispatch(addToCart(item, -1, user))}>sub
                  </Button>
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  {item.Name}
                </TableCell>
                <TableCell align="right">{item.Count}</TableCell>
                <TableCell align="right"><Button variant="outlined" onClick={() => dispatch(addToCart(item, 1, user))}>add
                </Button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> : <Alert severity="info" >your cart is empty</Alert>}
  </>
  );
}