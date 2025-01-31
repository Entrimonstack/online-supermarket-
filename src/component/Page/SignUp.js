

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom'; 
// // import Userimg from '../../img/user.jpg';
// // import { toast } from 'react-hot-toast';

// // const SignUp = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [data, setData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   });
// //   const [redirect, setRedirect] = useState(false); // State for redirect
// //   const navigate = useNavigate(); // Using useNavigate hook

// //   const togglePasswordVisibility = () => {
// //     setShowPassword((prev) => !prev);
// //   };

// //   const handleOnChange = (e) => {
// //     const { name, value } = e.target;
// //     setData((prev) => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { firstName, email, password, confirmPassword } = data;

// //     if (firstName && email && password && confirmPassword) {
// //       if (password === confirmPassword) {
// //         try {
// //           const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
// //             method: "POST",
// //             headers: {
// //               "Content-Type": "application/json"
// //             },
// //             body: JSON.stringify(data)
// //           });

// //           const dataRes = await response.json();
// //           console.log(dataRes);
// //           toast(dataRes.message); // Use toast for notifications

// //           if (dataRes.alert) {
// //             setRedirect(true); // Set redirect state to true
// //           }
// //         } catch (error) {
// //           console.error("Error:", error);
// //           toast.error("An error occurred during signup.");
// //         }
// //       } else {
// //         toast.error("Passwords do not match.");
// //       }
// //     } else {
// //       toast.error("Please enter all required fields.");
// //     }
// //   };

// //   // Redirect after successful signup
// //   if (redirect) {
// //     navigate("/login");
// //   }

// //   return (
// //     <div className='p-3 md:p-2'>
// //       <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded-lg shadow-lg'>
// //         <h1 className='text-center text-2xl font-bold mb-4'>Sign Up</h1>

// //         <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md mb-4'>
// //           <img src={Userimg} alt="User" className='w-full' />
// //         </div>

// //         <form className="w-full" onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
// //             <input
// //               type="text"
// //               id="firstName"
// //               name="firstName"
// //               required
// //               placeholder="Enter your first name"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
// //               value={data.firstName}
// //               onChange={handleOnChange} />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
// //             <input
// //               type="text"
// //               id="lastName"
// //               name="lastName"
// //               required
// //               placeholder="Enter your last name"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
// //               value={data.lastName}
// //               onChange={handleOnChange}
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               required
// //               placeholder="Enter your email"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
// //               value={data.email}
// //               onChange={handleOnChange}
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-sm font-medium">Password</label>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               id="password"
// //               name="password"
// //               required
// //               placeholder="Enter your password"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
// //               value={data.password}
// //               onChange={handleOnChange}
// //             />
// //             <div className="flex items-center mt-2">
// //               <input
// //                 type="checkbox"
// //                 id="showPassword"
// //                 onChange={togglePasswordVisibility}
// //                 className="mr-2"
// //               />
// //               <label htmlFor="showPassword" className="text-sm">Show Password</label>
// //             </div>
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               id="confirmPassword"
// //               name="confirmPassword"
// //               required
// //               placeholder="Confirm your password"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
// //               value={data.confirmPassword}
// //               onChange={handleOnChange}
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Sign Up
// //           </button>
// //         </form>

// //         <div className="mt-4">
// //           <p className="text-sm text-center">
// //             Already have an account?{' '}
// //             <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignUp;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import Userimg from '../../img/user.jpg';
// import { toast } from 'react-hot-toast';

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Toggles password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(prev => !prev);
//   };

//   // Handles input changes
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handles form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, email, password, confirmPassword } = data;

//     // Basic validation
//     if (!firstName || !email || !password || !confirmPassword) {
//       toast.error("Please enter all required fields.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     setIsLoading(true); // Start loading

//     try {
//       // Ensure that the environment variable is being used correctly
//       const apiUrl = process.env.REACT_APP_SERVER_DOMAIN;
//       if (!apiUrl) {
//         throw new Error('API URL is not defined. Check your environment variables.');
//       }

//       console.log('Data to be sent:', data); // Debugging data to be sent
//       console.log(`API URL: ${apiUrl}/signup`); // Debugging URL

//       const response = await fetch(`${apiUrl}/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const dataRes = await response.json();
//       toast(dataRes.message);

//       if (response.ok && dataRes.alert) {
//         navigate("/login"); // Redirect on successful signup
//       } else {
//         toast.error("Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred during signup.");
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className='p-3 md:p-2'>
//       <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded-lg shadow-lg'>
//         <h1 className='text-center text-2xl font-bold mb-4'>Sign Up</h1>

//         <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md mb-4'>
//           <img src={Userimg} alt="User" className='w-full' />
//         </div>

//         <form className="w-full" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               required
//               placeholder="Enter your first name"
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
//               value={data.firstName}
//               onChange={handleOnChange} 
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               required
//               placeholder="Enter your last name"
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
//               value={data.lastName}
//               onChange={handleOnChange} 
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               placeholder="Enter your email"
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
//               value={data.email}
//               onChange={handleOnChange} 
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               required
//               placeholder="Enter your password"
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
//               value={data.password}
//               onChange={handleOnChange} 
//             />
//             <div className="flex items-center mt-2">
//               <input
//                 type="checkbox"
//                 id="showPassword"
//                 onChange={togglePasswordVisibility}
//                 className="mr-2" 
//               />
//               <label htmlFor="showPassword" className="text-sm">Show Password</label>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="confirmPassword"
//               name="confirmPassword"
//               required
//               placeholder="Confirm your password"
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
//               value={data.confirmPassword}
//               onChange={handleOnChange} 
//             />
//           </div>

//           <button
//             type="submit"
//             className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Signing Up...' : 'Sign Up'}
//           </button>
//         </form>

//         <div className="mt-4">
//           <p className="text-sm text-center">
//             Already have an account?{' '}
//             <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Userimg from '../../img/user.jpg';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [redirect, setRedirect] = useState(false); // State for redirect
  const navigate = useNavigate(); // Using useNavigate hook

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });

          const dataRes = await response.json();
          console.log(dataRes);
          toast(dataRes.message); // Use toast for notifications

          if (dataRes.alert) {
            setRedirect(true); // Set redirect state to true
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred during signup.");
        }
      } else {
        toast.error("Passwords do not match.");
      }
    } else {
      toast.error("Please enter all required fields.");
    }
  };

  // Redirect after successful signup
  if (redirect) {
    navigate("/login");
  }

  return (
    <div className='p-3 md:p-2'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded-lg shadow-lg'>
        <h1 className='text-center text-2xl font-bold mb-4'>Sign Up</h1>

        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md mb-4'>
          <img src={Userimg} alt="User" className='w-full' />
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Enter your first name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.firstName}
              onChange={handleOnChange} />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Enter your last name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.lastName}
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="showPassword"
                onChange={togglePasswordVisibility}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-sm">Show Password</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirm your password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4">
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
