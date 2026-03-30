import { useSelector } from "react-redux"
// IMPORTI ZA TABLE (mui.core)

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoMdTrash } from "react-icons/io";

function CartComponent() {

    const cartProduct = useSelector((state) => state.cart.cart)

  return (
    <div>
        <h2 className='text-[32px]'>Your Cart:</h2>
        <TableContainer component={Paper} className="mt-10 max-w-4xl mx-auto">
    <Table aria-label="simple table">
        {/** Head Table**/}
        <TableHead>
        <TableRow className="px-[6px] bg-primary1">
            <TableCell><p className="text-white font-semibold">Product</p></TableCell>
            <TableCell align="right"><p className="text-white font-semibold">Quantity</p></TableCell>
            <TableCell align="right"><p className="text-white font-semibold">Price (Unit)</p></TableCell>
            <TableCell align="right"><p className="text-white font-semibold">Total</p></TableCell>
            <TableCell align="right"><p className="text-white font-semibold">Delete</p></TableCell>
        </TableRow>
        </TableHead>
        {/** Body(content) Table**/}
        {cartProduct.length !== 0 ? ( // ako je 0 onda nema producta u korpi
            <TableBody>
        {cartProduct.map((product) => (
            <TableRow align="left" key={product.id}>
                <TableCell component="th" scope="row" className="flex flex-row items-center gap-4">
                    <div className="flex flex-col gap-[10px]">
                        <img src={product.thumbnail} alt="" className="w-[70px] h-[70px] object-cover rounded" />
                        <p className="text-[16px] font-regular">{product.title}</p>
                    </div>
                </TableCell>
                <TableCell align="right"><p className="font-semibold">{product.quantity}</p></TableCell>
                <TableCell align="right">${product.price}</TableCell>
                {/** posto smo definisali quanity u cartSLice, tacno zna da povecava cenu na * quantity **/}
                <TableCell align="right">${(product.price * product.quantity).toFixed(2)}</TableCell>
                <TableCell align="right">
                    <div className="flex justify-end">
                    <IoMdTrash className="text-[22px] cursor-pointer text-red-500" />
                </div>
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
        ) : <h2 className="p-[20px] text-[20px] font-semibold">Korpa je przna...</h2>}
  </Table>
</TableContainer>
    </div>
  )
}

export default CartComponent