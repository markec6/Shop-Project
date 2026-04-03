import { useSelector, useDispatch } from "react-redux"
// IMPORTI ZA TABLE (mui.core)

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoMdTrash } from "react-icons/io";
import { deleteProductCart, AddQuantity, MinusQuantity } from "../Redux/cartSlice";

function CartComponent() {


    const dispatch = useDispatch()
    const cartProduct = useSelector((state) => state.cart.cart)


    // ovo pravimo za total price, reduce metoda (dajemo 0 kao inicijalnu vrednost)
    const totalPrice = cartProduct.reduce((calc, product) => {
        return calc + (product.price * product.quantity)
    }, 0)  

  return (
    <div>
        <h2 className='text-[32px]'>Your Cart:</h2>
        <div className="flex flex-col lg:flex-row gap-[32px] ">
            <TableContainer component={Paper} className="mt-10 max-w-4xl mx-auto">
        <Table aria-label="simple table">
            {/** Head Table**/}
            <TableHead >
            <TableRow className="px-[6px] bg-primary1 ">
                <TableCell><p className="text-white font-semibold">Product</p></TableCell>
                <TableCell align="right"><p className="text-white font-semibold">Quantity</p></TableCell>
                <TableCell align="right"><p className="hidden md:table-cell text-white font-semibold">Price (Unit)</p></TableCell>
                <TableCell align="right"><p className="text-white font-semibold">Total</p></TableCell>
                <TableCell align="right"><p className="text-white font-semibold">Delete</p></TableCell>
            </TableRow>
            </TableHead>
            {/** Body(content) Table**/}
            {cartProduct.length !== 0 ? ( // ako je 0 onda nema producta u korpi
                <TableBody>
            {cartProduct.map((product) => (
                <TableRow align="left" key={product.id}>
                    <TableCell >
                        <div className="flex flex-col gap-[10px]">
                            <img src={product.thumbnail} alt="" className="w-[80px] h-[80px] object-cover rounded" />
                            <p className="text-[16px] hidden md:table-cell font-regular">{product.title}</p>
                        </div>
                    </TableCell>
                    <TableCell align="right">
                        <div className="flex items-center align-middle justify-end">
                            <p onClick={() => dispatch(AddQuantity(product.id))} className="px-[6px] py-[1px] bg-OurBorder">+</p>
                            <p className="px-[15px] border border-OurBorder">{product.quantity}</p>
                            <p onClick={() => dispatch(MinusQuantity(product.id))} className="px-[6px] py-[1px] bg-OurBorder">-</p>
                        </div>
                    </TableCell>
                    <TableCell align="right"><p className="hidden md:table-cell">{product.price}</p></TableCell>
                    {/** posto smo definisali quanity u cartSLice, tacno zna da povecava cenu na * quantity **/}
                    <TableCell align="right">${(product.price * product.quantity).toFixed(2)}</TableCell>
                    <TableCell align="right">
                        <div className="flex justify-end">
                        <IoMdTrash onClick={() => dispatch(deleteProductCart(product.id))} className="text-[22px] cursor-pointer text-red-500" />
                    </div>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
            ) : <h2 className="p-[20px] text-[20px] font-semibold">Korpa je przna...</h2>}
        </Table>
        </TableContainer>
        <div className="w-[95%] lg:w-[50%] mx-auto border-1 border-OurBorder rounded-[10px]">
                    <div className="py-[16px] px-[12px] bg-primary1">
                       <p className="text-white font-semibold text-[26px]">Cart Total</p>
                   </div>
                <div className="px-[24px]">
                    <div>
                        <div className="py-[20px] flex justify-between">
                            <p className="text-[20px] text-primary1 font-semibold">Subtotal:</p>
                            {/** toFixed(2) - znaci da smo broj ogranicli na 2 decimale i pretvorili u text**/}
                            <p className="text-[20px] pr-[20px] font-semibold opacity-70">${totalPrice.toFixed(2)}</p>
                        </div>
                        <hr className="w-[100%] text-OurBorder my-[32px] px-[12px]"></hr>
                        <div className="w-[100%]  flex  rounded-[6px] border border-OurBorder">
                           <input placeholder="We are working on coupon code..."
                           className="w-[70%] md:w-[80%] border-none outline-none px-[24px] py-[16px]"/>
                           <button className="w-[30%] md:w-[20%] text-center border-1 border-primary2 rounded-[6px] bg-primary1 text-white">Apply</button>
                        </div>
                    </div>
                    <div>
                        <hr className="w-[100%] text-OurBorder px-[12px] my-[32px]"></hr>
                        <div>
                            <div>
                                <input placeholder="Country" list="countries"
                            className="w-[100%] outline-none px-[24px] py-[16px] border border-OurBorder rounded-[6px]"/>
                            <datalist id="countries">
                                <option value="Serbia"/>
                                <option value="USA"/>
                                <option value="Russia"/>
                                <option value="India"/>
                                <option value="China"/>
                                <option value="Japan"/>
                                <option value="France"/>
                            </datalist>
                            </div>
                            <div className="flex justify-between py-[24px]">
                                <p className=" text-primary1 font-semibold">Subtotal:</p>
                                <p className="pr-[20px] font-semibold opacity-70">${totalPrice.toFixed(2)}</p>
                            </div>
                            <button className="w-[100%] text-center text-white bg-primary2 font-semibold py-[12px] rounded-[6px]">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
   </div>
  )
}

export default CartComponent