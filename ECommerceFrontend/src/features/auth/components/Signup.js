import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { selectLoggedInUser, createUserAsync } from '../authSlice';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Signup() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex items-center justify-center flex-1 bg-gray-100">
        <img
          src="Paste.png" // Replace with actual image URL
          alt="Elegant Chair"
          className="object-cover w-3/4 h-auto"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center flex-1">
        <div className="w-full max-w-md p-8 space-y-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-center text-gray-900">3legant.</h2>

          {/* Sign Up Header */}
          <h3 className="text-xl font-semibold text-center text-gray-900">Sign up</h3>
          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500 hover:text-green-700">
              Sign in
            </Link>
          </p>

          {/* Form */}
          <form 
          noValidate
          onSubmit={handleSubmit((data) => {
            dispatch(
              createUserAsync({
                email: data.email,
                password: data.password,
                addresses: [],
                role:'user'
              })
            );
            console.log(data);
          })} className="space-y-4">
            {/* Name Input */}
            <div>
              <input 
                id="name"
                {...register('name', {
                    required: 'Name is required',
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Name can only contain letters and spaces',
                    },
                  })}
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Username Input */}
            <div>
              <input
                id="username"
                {...register('username', {
                    required: 'Username is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message: 'Username can only contain letters, numbers, and underscores',
                    },
                  })}
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
              id="email"
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: 'email not valid',
                },
              })}
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
            )}
            </div>

            {/* Password Input */}
            <div>
              <input
              id="password"
              {...register('password', {
                required: 'password is required',
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message: `- at least 8 characters\n
                  - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                  - Can contain special characters`,
                },
              })}
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agree"
                className="w-5 h-5 text-green-500 form-checkbox"
              />
              <label className="ml-2 text-gray-600">
                I agree with{' '}
                <a href="/privacy-policy" className="text-green-500 hover:text-green-700">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-of-use" className="text-green-500 hover:text-green-700">
                  Terms of Use
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
