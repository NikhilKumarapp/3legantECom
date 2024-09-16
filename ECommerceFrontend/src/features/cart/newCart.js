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

  return (
    <>
      {!items.length && cartLoaded && <Navigate to="/" replace={true}></Navigate>}

      <div>
        <div className="px-4 mx-auto mt-12 bg-white max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
            <h1 className="my-5 text-4xl font-bold tracking-tight text-gray-900">
              Cart
            </h1>
            <div className="flow-root">
              {status === 'loading' ? (
                <Grid
                  height="80"
                  width="80"
                  color="rgb(79, 70, 229) "
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : null}
              <ul className="-my-6 divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col flex-1 ml-4">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.product.id}>{item.product.title}</a>
                          </h3>
                          <p className="ml-4">${item.product.discountPrice}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.product.brand}
                        </p>
                      </div>
                      <div className="flex items-end justify-between flex-1 text-sm">
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

                        <div className="flex">
                          <Modal
                            title={`Delete ${item.product.title}`}
                            message="Are you sure you want to delete this Cart item ?"
                            dangerOption="Delete"
                            cancelOption="Cancel"
                            dangerAction={(e) => handleRemove(e, item.id)}
                            cancelAction={()=>setOpenModal(null)}
                            showModal={openModal === item.id}
                          ></Modal>
                          <button
                            onClick={e=>{setOpenModal(item.id)}}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {totalAmount}</p>
            </div>
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>{totalItems} items</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
              <p>
                or
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
