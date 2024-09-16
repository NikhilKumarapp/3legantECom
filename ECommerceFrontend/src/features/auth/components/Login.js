import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoggedInUser } from '../authSlice';
import { Link, Navigate } from 'react-router-dom';
import { loginUserAsync } from '../authSlice';
import { useForm } from 'react-hook-form';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);
  console.log(user);
  
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
          src="/Paste.png" // Replace with actual image URL
          alt="Elegant Chair"
          className="object-cover w-3/4 h-auto"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center flex-1">
        <div className="w-full max-w-md p-8 space-y-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-gray-900">3legant.</h2>

          {/* Sign In Header */}
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-gray-600">
            Don't have an account yet?{' '}
            <a href="/signup" className="text-green-500 hover:text-green-700">
              Sign Up
            </a>
          </p>

          {/* Form */}
          <form noValidate
            onSubmit={handleSubmit((data) => {
              dispatch(
                loginUserAsync({ email: data.email, password: data.password })
              );
            })} className="space-y-4">
            {/* Username/Email Input */}
            <div>
              <input id="email"
               {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: 'email not valid',
                },
              })}
                type="text"
                placeholder="Your username or email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
            )}
            </div>

            {/* Password Input */}
            <div>
              <input id="password"
               {...register('password', {
                required: 'password is required',
              })}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
               {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 text-green-500 form-checkbox"/>
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-gray-500 hover:text-gray-700">
                Forgot password?
              </a>
              {error && <p className="text-red-500">{error || error.message}</p>}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
