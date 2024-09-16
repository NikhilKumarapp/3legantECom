import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../cart/cartSlice';
import { selectLoggedInUser } from '../auth/authSlice';
import { selectUserInfo } from '../user/userSlice';

const navigation = [
  { name: 'Products', link: '/', user: true },
  { name: 'Home', link: '/home', admin: true },
  { name: 'Products', link: '/admin', admin: true },
  { name: 'Orders', link: '/admin/orders', admin: true },

];
const userNavigation = [
  { name: 'My Profile', link: '/profile' },
  { name: 'My Orders', link: '/my-orders' },
  { name: 'Sign out', link: '/logout' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar({ children }) {
  const items = useSelector(selectItems);
  const userInfo = useSelector(selectUserInfo);

  return (
    <>
      {userInfo &&<div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
      <div className="w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-center w-full gap-10 py-2 pl-20 pr-4 text-sm bg-gray-100 max-md:pl-5 max-md:max-w-full">
        <div className="flex items-start justify-center gap-3">
          <div className="flex gap-3 justify-center items-center font-semibold leading-loose text-center min-w-[240px] text-neutral-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfcb5e4788737dcb6dc75251bba3ca921ac5d4f139f9f21b869fccfd6aa970?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
              className="self-stretch object-contain w-6 my-auto shrink-0 aspect-square"
            />
            <div className="self-stretch my-auto">
              30% off storewide — Limited time!{" "}
            </div>
          </div>
          <div className="flex gap-0.5 justify-center items-center font-medium leading-6 text-blue-500 border-b border-solid border-b-blue-500">
            <div className="flex items-center self-stretch gap-1 my-auto">
            <a href="/"><div className="self-stretch my-auto">Shop Now</div></a>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5348185c5f874f3afd7edcb3c0ba68dd198f63490a98957e73c58040b77e59?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db746d8b5575526a41c45b10725275eef92574e4d17be77ccb1333262efaf28?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
          className="object-contain w-5 my-auto shrink-0 aspect-square"
        />
      </div>
      {/* Main Navbar */}
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="self-stretch my-auto text-2xl font-medium leading-none text-center text-black w-[105px]">
          3legant<span className="text-zinc-500">.</span>
        </div>
  
        {/* Links */}
        <ul className="hidden space-x-8 text-gray-600 md:flex">
          <li className="hover:text-gray-900">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/admin">Shop</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/admin">Products</a>
          </li>
          {/* <li className="hover:text-gray-900">
            <a href="/admin/orders">Orders</a>
          </li> */}
          <li className="hover:text-gray-900">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74d610171b49cc3b18b456fe06d02bff2a8f09126ee10249b3afcbc71e046e51?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
            className="self-stretch object-contain w-6 my-auto shrink-0 aspect-square"
          />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
          {/* <CgShoppingBag /> */}
          <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <Link to="/cart">
                        <button
                          type="button"
                          className="p-1 text-gray-400 rounded-full bg-white-800 hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <img loading="lazy" src="/bag.jpg"className="self-stretch object-contain w-6 my-auto shrink-0 aspect-square"/>
                        </button>
                      </Link>
                      {items.length > 0 && (
                        <span className="inline-flex items-center px-2 py-1 -ml-3 text-xs font-medium text-red-700 rounded-md mb-7 bg-red-50 ring-1 ring-inset ring-red-600/10">
                          {items.length}
                        </span>
                      )}
                    </div>
                  </div>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
          <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex items-center max-w-xs text-sm rounded-full bg-white-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ac2af4fe98d3962e7216f1d3a4f909c949da16f51206d4e6f2839c71acdc86?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"className="self-stretch object-contain w-6 my-auto shrink-0 aspect-square"/>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
          </button>
        </div>
      </nav>
    </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={userInfo.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {/* this should come from userInfo */}
                        {userInfo.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {userInfo.email}
                      </div>
                    </div>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="w-6 h-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                    {items.length > 0 && (
                      <span className="inline-flex items-center px-2 py-1 -ml-3 text-xs font-medium text-red-700 rounded-md bg-red-50 mb-7 ring-1 ring-inset ring-red-600/10">
                        {items.length}
                      </span>
                    )}
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>}
    </>
  );
}

export default NavBar;
