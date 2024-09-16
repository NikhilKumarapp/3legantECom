import * as React from "react";
import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItemFromCartAsync,
  selectCartLoaded,
  selectCartStatus,
  selectItems,
  updateCartAsync,
} from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Grid } from 'react-loader-spinner';
import Modal from '../features/common/Modal';

export default function CheckoutPrePage() {

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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  // Conditional rendering for cart visibility
  if (!isCartVisible) return null;


  return (
    <>
    {!items.length && cartLoaded && <Navigate to="/" replace={true}></Navigate>}
    <div className="flex flex-col items-center px-40 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-center max-md:max-w-full">
        <div className="text-6xl font-medium leading-none tracking-tighter text-black max-md:text-4xl">
          Cart
        </div>
        <div className="flex flex-wrap items-start gap-8 mt-10 text-base font-semibold max-md:max-w-full">
          <div className="flex flex-col pb-7 w-64 leading-loose border-b-2 border-solid border-b-neutral-900 min-w-[240px]">
            <div className="flex items-center w-full gap-4">
              <div className="overflow-hidden self-stretch px-4 my-auto text-center text-gray-50 whitespace-nowrap bg-zinc-800 h-[42px] rounded-[40px] w-[42px]">
                1
              </div>
              <div className="flex-1 shrink self-stretch my-auto basis-[34px] text-zinc-800">
                Shopping cart
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-7 w-64 min-w-[240px]">
            <div className="flex items-center w-full gap-4">
              <div className="overflow-hidden self-stretch px-4 my-auto w-10 h-10 text-center text-gray-50 whitespace-nowrap bg-gray-400 rounded-[40px]">
                2
              </div>
              <div className="flex-1 shrink self-stretch my-auto leading-loose text-gray-400 basis-[30px]">
                Checkout details
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-7 w-64 leading-loose min-w-[240px]">
            <div className="flex items-center w-full gap-4">
              <div className="overflow-hidden self-stretch px-4 my-auto text-center text-gray-50 whitespace-nowrap bg-gray-400 h-[42px] rounded-[40px] w-[42px]">
                3
              </div>
              <div className="flex-1 shrink self-stretch my-auto text-gray-400 basis-[30px]">
                Order complete
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap items-start gap-10 py-20 max-md:max-w-full">
          <div className="flex flex-col font-semibold min-w-[240px] w-[643px] max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-start pb-6 w-full text-base leading-loose whitespace-nowrap border-b border-solid border-b-zinc-500 max-w-[643px] text-neutral-900 max-md:max-w-full">
              <div>Product</div>
              <div className="flex gap-10 justify-between items-center min-w-[240px] w-[322px]">
                <div className="self-stretch my-auto">Quantity</div>
                <div className="self-stretch my-auto">Price</div>
                <div className="self-stretch my-auto">Subtotal</div>
              </div>
            </div>
            {items.map((item) => (
            <div className="flex flex-wrap justify-between items-center py-6 w-full border-b border-solid border-b-gray-200 max-w-[643px] max-md:max-w-full">
               
              <div className="flex flex-col self-stretch my-auto text-sm leading-loose min-w-[240px] text-zinc-500 w-[316px]">
              
                <div className="flex gap-4 items-center w-full max-w-[316px]">
                  <img
                    loading="lazy"
                    srcSet={item.product.thumbnail}
                    className="object-contain shrink-0 self-stretch my-auto w-20 aspect-[0.83]"
                  />
                  <div className="flex items-start self-stretch flex-1 gap-4 my-auto shrink basis-0">
                    <div className="flex flex-col justify-center w-[210px]">
                      <div className="text-neutral-900">{item.product.title}</div>
                      <div className="mt-2 text-xs leading-loose">
                        Color: Black
                      </div>
                      <div className="flex gap-0.5 items-center self-start mt-2 whitespace-nowrap border-0 border-solid border-zinc-600">
                        <div className="flex items-center self-stretch gap-1 my-auto">
                           <Modal
                                title={`Delete ${item.product.title}`}
                                message="Are you sure you want to delete this Cart item ?"
                                dangerOption="Delete"
                                cancelOption="Cancel"
                                dangerAction={(e) => handleRemove(e, item.id)}
                                cancelAction={()=>setOpenModal(null)}
                                showModal={openModal === item.id}>

                            </Modal>
                                <button
                                    onClick={e=>{setOpenModal(item.id)}}
                                    className="mt-2 text-sm text-red-500"
                                >
                                    ✖ Remove
                                </button>
                        </div>
                      </div>
                    </div>
                  </div>
            
                </div>
             
              </div>
              <div className="flex gap-10 justify-between items-center self-stretch my-auto text-lg leading-loose text-right whitespace-nowrap min-w-[240px] text-neutral-900 w-[328px]">
                <div className="flex flex-col justify-center self-stretch px-2 py-1.5 my-auto w-20 text-xs text-center rounded border border-solid border-zinc-500 min-h-[32px]">
                  <div className="flex relative flex-col px-2 w-16 aspect-[3.2] max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dad5f0a-b752-4039-be77-93eb02d4d1dd?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
                      className="absolute inset-0 object-cover size-full"
                    />
                    2
                  </div>
                </div>
                <div className="self-stretch my-auto">${item.product.price}</div>
                <div className="self-stretch my-auto">${item.product.price}</div>
              </div>
            </div>
            ))}
          </div>
          <div className="flex flex-col p-6 bg-white rounded-md border border-solid border-zinc-500 min-w-[240px] w-[413px] max-md:px-5">
            <div className="text-xl font-medium leading-snug text-neutral-900">
              Cart summary
            </div>
            <div className="flex flex-col w-full mt-4">
              <div className="flex flex-col w-full pb-8">
                <div className="flex flex-col w-full pb-4">
                  <div className="flex gap-10 items-center px-4 py-3.5 w-full bg-gray-100 rounded border border-solid border-neutral-900">
                    <div className="flex flex-1 shrink gap-5 justify-between self-stretch my-auto w-full basis-0 min-w-[240px]">
                      <div className="flex items-center gap-3">
                       <div>
                            <label className="flex items-center space-x-1">
                                <input className="w-4 h-4 text-indigo-600 rounded-full form-checkbox border-zinc-300"
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={handleCheckboxChange} 
                                />
                                <div>
                                Free Shipping
                                </div>
                            </label>
                       </div>
                      </div>
                      <div className="text-base leading-loose text-right text-neutral-900">
                        $0.00
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center px-4 py-3.5 mt-3 w-full text-base leading-loose bg-white rounded border border-solid border-zinc-500 text-neutral-900">
                    <div className="flex flex-1 shrink gap-5 justify-between self-stretch my-auto w-full basis-0 min-w-[240px]">
                    <div>
                            <label className="flex items-center space-x-1">
                                <input className="w-4 h-4 text-indigo-600 rounded-full form-checkbox border-zinc-300"
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={handleCheckboxChange} 
                                />
                                <div>
                                Express Shipping
                                </div>
                            </label>
                       </div>
                      <div className="text-right">+$15.00</div>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center px-4 py-3.5 mt-3 w-full text-base leading-loose bg-white rounded border border-solid border-zinc-500 text-neutral-900">
                    <div className="flex flex-1 shrink gap-5 justify-between self-stretch my-auto w-full basis-0 min-w-[240px]">
                    <div>
                            <label className="flex items-center space-x-1">
                                <input className="w-4 h-4 text-indigo-600 rounded-full form-checkbox border-zinc-300"
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={handleCheckboxChange} 
                                />
                                <div>
                                Pick Up
                                </div>
                            </label>
                       </div>
                      <div className="text-right">%21.00</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-3.5 w-full text-base leading-loose whitespace-nowrap border-b border-solid border-b-gray-200 text-neutral-900">
                  <div className="flex items-start w-full gap-10">
                    <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
                      <div className="self-stretch gap-2">Subtotal</div>
                      <div className="font-semibold text-right">$1234.00</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-3.5 w-full text-xl font-semibold leading-relaxed whitespace-nowrap text-neutral-900">
                  <div className="flex items-start w-full gap-10">
                    <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
                      <div>Total</div>
                      <div className="text-right">$1345.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/checkout"><button className="gap-2 self-stretch px-7 py-2.5 w-full text-lg font-medium tracking-tight leading-8 text-center text-white whitespace-nowrap rounded-lg bg-neutral-900 max-md:px-5">
                Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-full w-[424px]">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-xl font-medium leading-snug text-neutral-900 max-md:max-w-full">
              Have a coupon?
            </div>
            <div className="mt-2 text-base leading-loose text-zinc-500 max-md:max-w-full">
              Add your code for an instant cart discount
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 mt-4 w-full text-base font-medium tracking-tight leading-7 border border-solid border-zinc-500 max-w-[424px] min-h-[52px] max-md:max-w-full">
            <div className="flex gap-2 items-center w-full border-b border-solid border-b-zinc-500 border-b-opacity-50 min-h-[52px]">
              <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] text-zinc-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7846f45e29845c150890e8d78490170439d4caecdd40c5a173f3b300e4cfcd66?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
                  className="self-stretch object-contain w-6 my-auto shrink-0 aspect-square"
                />
                <div className="self-stretch flex-1 my-auto shrink basis-0">
                  Coupon Code
                </div>
              </div>
              <div className="flex gap-0.5 items-center self-stretch my-auto whitespace-nowrap border-0 border-solid border-neutral-900 text-neutral-900">
                <div className="self-stretch gap-1 my-auto">Apply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

