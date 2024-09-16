import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItemFromCartAsync,
  selectCartLoaded,
  selectCartStatus,
  selectItems,
  updateCartAsync,
} from './cartSlice';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Grid } from 'react-loader-spinner';
import Modal from '../common/Modal';

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const status = useSelector(selectCartStatus);
  const cartLoaded = useSelector(selectCartLoaded)
  const [openModal, setOpenModal] = useState(null);

  const totalAmount = items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({id:item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  const [isCartVisible, setIsCartVisible] = useState(true);

  const closeCart = () => {
    setIsCartVisible(false);
  };

  // Conditional rendering for cart visibility
  if (!isCartVisible) return null;


  return (
    <>
      {!items.length && cartLoaded && <Navigate to="/" replace={true}></Navigate>}

      <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
      {/* Cart Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Cart</h2>
        <Link to="/"><button className="text-2xl font-bold">✖</button></Link>
      </div>

      {/* Cart Items */}
      <div className="mt-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b">
            {/* Item Image */}
            <div className="flex items-center space-x-4">
              <img
                src={item.product.thumbnail}
                alt={item.name}
                className="w-16 h-16 rounded"
              />
              {/* Item Details */}
              <div>
                <h3 className="font-bold">{item.product.title}</h3>
                <p className="text-sm text-gray-500">Color: {item.product.title}</p>
                <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                          <select
                            onChange={(e) => handleQuantity(e, item)}
                            value={item.quantity}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>

              </div>
            </div>
            {/* Item Price and Remove Button */}
            <div className="text-right">
            <Modal
             title={`Delete ${item.product.title}`}
             message="Are you sure you want to delete this Cart item ?"
             dangerOption="Delete"
             cancelOption="Cancel"
             dangerAction={(e) => handleRemove(e, item.id)}
             cancelAction={()=>setOpenModal(null)}
             showModal={openModal === item.id}
            ></Modal>
              <p className="font-bold">${item.product.price}</p>
              <button
                onClick={e=>{setOpenModal(item.id)}}
                className="mt-2 text-sm text-red-500"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="pt-4 mt-6 border-t">
        <div className="flex justify-between text-lg">
          <p>Subtotal</p>
          <p>${totalAmount}</p>
        </div>
        <div className="flex justify-between mt-2 text-xl font-bold">
          <p>Total</p>
          <p>${totalAmount}</p>
        </div>
        <Link to="/checkout"><button className="w-full py-3 mt-6 text-white bg-black rounded-lg">Checkout</button></Link>
        <Link to="/precheckout"><button className="w-full py-3 mt-3 bg-gray-100 rounded-lg">View Cart</button></Link>
      </div>
    </div>
    </>
  );
}
