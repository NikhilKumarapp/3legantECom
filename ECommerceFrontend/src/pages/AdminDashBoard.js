import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../features/cart/cartSlice';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { selectUserInfo } from '../features/user/userSlice';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Area,
  } from "recharts";

  import { FaUser, FaBox, FaChartLine, FaClock } from 'react-icons/fa'; // Importing icons
  const metrics = [
    {
      title: 'Total User',
      value: '40,689',
      icon: <FaUser className="text-3xl text-purple-500" />,
      change: '8.5% Up from yesterday',
      changeType: 'up', // Up indicates positive trend
      changeColor: 'text-green-500',
    },
    {
      title: 'Total Order',
      value: '10,293',
      icon: <FaBox className="text-3xl text-yellow-500" />,
      change: '1.3% Up from past week',
      changeType: 'up',
      changeColor: 'text-green-500',
    },
    {
      title: 'Total Sales',
      value: '$89,000',
      icon: <FaChartLine className="text-3xl text-green-500" />,
      change: '4.3% Down from yesterday',
      changeType: 'down',
      changeColor: 'text-red-500',
    },
    {
      title: 'Total Pending',
      value: '2040',
      icon: <FaClock className="text-3xl text-orange-500" />,
      change: '1.8% Up from yesterday',
      changeType: 'up',
      changeColor: 'text-green-500',
    },
  ];

const navigation = [
  { name: 'Products', link: '/', user: true },
  { name: 'Home', link: '/home', admin: true },
  { name: 'Products', link: '/admin', admin: true },
  { name: 'Orders', link: '/admin/orders', admin: true },

];
const userNavigation = [
  { name: 'My Profile', link: '/admin-profile' },
  { name: 'Orders List', link: '/admin/orders' },
  { name: 'Sign out', link: '/logout' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


  
  const data = [
    { name: "5k", value: 20 },
    { name: "10k", value: 40 },
    { name: "15k", value: 50 },
    { name: "20k", value: 64.36 },
    { name: "25k", value: 30 },
    { name: "30k", value: 45 },
    { name: "35k", value: 40 },
    { name: "40k", value: 38 },
    { name: "45k", value: 52 },
    { name: "50k", value: 42 },
    { name: "55k", value: 35 },
    { name: "60k", value: 37 },
  ];
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-gray-200 rounded shadow-md">
          <p className="text-sm">{`Value: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

function NavBar({ children }) {
  const items = useSelector(selectItems);
  const userInfo = useSelector(selectUserInfo);

  return (
    <>
      {userInfo &&<div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
   <div className="flex">
   <div className="flex flex-col justify-between w-64 h-screen bg-white shadow-lg">
      <div className="px-4 py-6">
        {/* Top Navigation Buttons */}
        {items.map((item) => (
        <div className="space-y-4">
          <a href="/admin"><button className="w-full px-4 py-2 text-white bg-black rounded">
            Dashboard
          </button>
          </a>
        </div>
        ))}

        {/* Menu Links */}
        <nav className="mt-8">
          <ul className="space-y-6">
            <li>
              <a href="/admin-product" className="text-gray-700 hover:text-black">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Favorites
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Inbox
              </a>
            </li>
            <li>
              <a href="/admin/orders" className="text-gray-700 hover:text-black">
                Order Lists
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Product Stock
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Links */}
      <div className="px-4 py-6">
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-black">
              Settings
            </a>
          </li>
          <li>
            <a href="/logout" className="text-gray-700 hover:text-black">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold"></h2>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Search"
            />
            <div className="flex items-center space-x-2">
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
            </div>
          </div>
        </div>

        <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow"
          >
            <div className="p-3 bg-gray-100 rounded-full">{metric.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{metric.title}</h2>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className={`text-sm ${metric.changeColor}`}>
                {metric.changeType === 'up' ? '⬆️' : '⬇️'} {metric.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

        <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Sales Details</h2>
        <div className="relative">
          <select
            className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none"
            defaultValue="October"
          >
            <option>October</option>
            <option>September</option>
            <option>August</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#000"
            fill="rgba(66, 153, 225, 0.2)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#000"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

        {/* Deals Details */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-lg font-semibold">Deals Details</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2">Product Name</th>
                <th className="pb-2">Location</th>
                <th className="pb-2">Date - Time</th>
                <th className="pb-2">Piece</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Apple Watch</td>
                <td className="py-2">6096 Marjolaine Landing</td>
                <td className="py-2">12.09.2019 - 12:53 PM</td>
                <td className="py-2">423</td>
                <td className="py-2">$34,295</td>
                <td className="py-2">
                  <span className="text-green-500">Delivered</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
            </>
          )}
        </Disclosure>
      </div>}
    </>
  );
}

export default NavBar;
