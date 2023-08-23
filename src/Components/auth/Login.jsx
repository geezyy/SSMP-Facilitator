import React from 'react'
import {useState} from 'react'
import {  useNavigate  } from 'react-router-dom'
import logo from '../../Assets/Sail logo.png'
import axios from 'axios'


const Signin = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  //This state holds the data entered by the user in the form fields and updates it
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });
 
  //This state holds the error messages and allows the display of it when there issues with the form inputs
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formInfo.email) {
      newErrors.email = 'Email is required';
    }
    if (!formInfo.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     setLoading(true);
    try {
        if (validateForm()) {
            const { email, password } = formInfo;
        console.log(email , password);
        const response = await axios.post(
            process.env.REACT_APP_SSMP_BACKEND_API + "login", { email, password }
        )
        console.log(response);
        setMessage(response.data.responseMessage?.toUpperCase());
        if (response.data.responseCode === "00") {
            setMessage('Login successful');
            navigate('/landing');
          } else {
            // User's credentials are not valid
            setMessage('Invalid credentials');
            
        }}
    } catch (error) {
        console.log(error);
    } finally{
        setLoading(false)
    }
    
  };


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className=' absolute top-0 left-0 p-4'>
          <img
            className="mx-auto h-16 w-auto"
            src={logo}
            alt="logo"
          />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-1 sm:text-sm sm:leading-6"
                />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
                <div className="text-sm">
                  <a href="" className="font-semibold text-blue-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleInputChange}
                  className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
            </div>

            <div>
                
                <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md  bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? 'Signing in...' : 'Sign in'}
                
              </button>
                
            </div>
          </form>
        </div>
      </div>

  )
}

export default Signin