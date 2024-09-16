import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { resetOrder } from "../features/order/orderSlice";
import {
  deleteItemFromCartAsync,
  selectItems,
  updateCartAsync,
} from '../features/cart/cartSlice';

function OrderSuccessPage() {
   const params = useParams() 
   const dispatch = useDispatch();
   
   useEffect(()=>{
    // reset cart
    dispatch(resetCartAsync())
    // reset currentOrder
    dispatch(resetOrder())
   },[dispatch])

   const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  const items = useSelector(selectItems);

  const totalAmount = items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );
   
  return (
    <>
    {!params.id &&  <Navigate to='/' replace={true}></Navigate>}
<div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
  <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
    <h1 className="mb-4 text-2xl font-bold">Thank you! 🎉</h1>
    <p className="mb-6 text-xl font-semibold">Your order has been received</p>
    <div className="flex justify-center mb-6 space-x-4">
    
     {items.map((item) => (
        <div key={item.id} className="relative">
          <img
            src={item.product.thumbnail}
            alt={item.product.title}
            className="object-cover w-24 h-24 border rounded-md"
          />
          <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-sm text-white bg-black rounded-full">
            1
          </span>
        </div>
     ))}
    </div> 
    {items.map((item) => (
    <div className="space-y-2 text-left">
      <p className="text-sm">
        <span className="font-semibold">Order code: </span>#{params?.id}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Date: </span>{formattedDate}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Total: </span>${item.product.price}
      </p>
    </div>
    ))}
    <Link to="/"><button className="px-6 py-2 mt-8 text-white bg-black rounded-full shadow-md hover:bg-gray-800">Go back home</button></Link>
  </div>
</div>
    </>
  );}

export default OrderSuccessPage;
 