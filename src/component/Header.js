

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../src/img/.png'; // Ensure the correct logo path
// import { TbUserCircle } from "react-icons/tb";
// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from 'react-redux';

// const Header = () => {

//     const [showMenu, setShowMenu] = useState(false);
//     const userData = useSelector((state)=>state.user)
//     console.log(userData);
    
//     const handleShowMenu = ()=>{
//         setShowMenu(preve => !preve)
//     }
//   return (
//     <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
//       <div className='flex items-center h-full justify-between'>
//         <Link to={''}>
//           <div className='h-16'>
//             <img src={Logo} className='h-full' />
//           </div>
//         </Link>

//         <div className='flex items-center gap-4 md:gap-7'>
//           {/* <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
//             <Link to={""}>Home</Link>
//             <Link to={"menu"}>Menu</Link>
//             <Link to={"about"}>About</Link>
//             <Link to={"contact"}>Contact</Link>
//           </nav> */}
//           <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
//              <Link to="/">Home</Link>
//              <Link to="/menu">Menu</Link>
//              <Link to="/about">About</Link>
//              <Link to="/contact">Contact</Link>
//          </nav>

          

//           <div className='text-2xl text-slate-600'>
//             <FaShoppingCart />
//             <div className='absolute top-4 right-11 md:top-4 md:right-16 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
//           </div>
//           <div className='text-2xl text-slate-600'  onClick={handleShowMenu}>
//              <div className='text-3xl cursor-pointer'><TbUserCircle /></div>
//              {showMenu && (
//                 <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
//                <Link  to={"newprotect"} className='whitespace-nowrap  cursor-pointer'>New product</Link> 
//                 <Link to={"login"} className='whitespace-nowrap  cursor-pointer' >Login</Link>
//              </div>

//              )}

             
             
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../src/img/.png";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { BsCartFill } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import {logoutRedux} from "../redux/userSlice"
// import { toast } from "react-hot-toast";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const userData = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleShowMenu = () => {
//     setShowMenu((preve) => !preve);
//   };
//   const handleLogout = () => {
//     dispatch(logoutRedux());
//     toast("Logout successfully");
//   };

//   const cartItemNumber = useSelector((state)=>state.product.cartItem)
//   return (
//     <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
//       {/* desktop */}

//       <div className="flex items-center h-full justify-between">
//         <Link to={""}>
//           <div className="h-10">
//             <img src={logo} className="h-full" />
//           </div>
//         </Link>

//         <div className="flex items-center gap-4 md:gap-7">
//           <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
//             <Link to={""}>Home</Link>
//             <Link to={"menu/63f0fdbb3bcc2f97fa53d25d"}>Menu</Link>
//             <Link to={"about"}>About</Link>
//             <Link to={"contact"}>Contact</Link>
//           </nav>
//           <div className="text-2xl text-slate-600 relative">
//             <Link to={"cart"}>
//               <BsCartFill />
//               <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
//                 {cartItemNumber.length}
//               </div>
//             </Link>
//           </div>
//           <div className=" text-slate-600" onClick={handleShowMenu}>
//             <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
//               {userData.image ? (
//                 <img src={userData.image} className="h-full w-full" />
//               ) : (
//                 <HiOutlineUserCircle />
//               )}
//             </div>
//             {showMenu && (
//               <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
//                 {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
//                   <Link
//                     to={"newprotect"}
//                     className="whitespace-nowrap cursor-pointer px-2"
//                   >
//                     New product
//                   </Link>
//                 )}

//                 { { userData .image ? (
//                   <p
//                     className="cursor-pointer text-white px-2 bg-red-500"
//                     onClick={handleLogout}
//                   >
//                     Logout ({userData.firstName}){" "}
//                   </p>
//                 ) : (
//                   <Link
//                     to={"login"}
//                      className="whitespace-nowrap cursor-pointer px-2"
//                    >
//                      Login
//                    </Link>
//                )} }
//                 <nav className="text-base md:text-lg flex flex-col md:hidden">
//                   <Link to={""} className="px-2 py-1">
//                     Home
//                   </Link>
//                   <Link
//                     to={"menu/63f0fdbb3bcc2f97fa53d25d"}
//                     className="px-2 py-1"
//                   >
//                     Menu
//                   </Link>
//                   <Link to={"about"} className="px-2 py-1">
//                     About
//                   </Link>
//                   <Link to={"contact"} className="px-2 py-1">
//                     Contact
//                   </Link>
//                 </nav>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* mobile */}
//     </header>
//   );
// };

// export default Header;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../src/img/.png";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { BsCartFill } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutRedux } from "../redux/userSlice";
// import { toast } from "react-hot-toast";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const userData = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleShowMenu = () => {
//     setShowMenu((prev) => !prev);
//   };

//   const handleLogout = () => {
//     dispatch(logoutRedux());
//     toast("Logout successfully");
//   };

//   const cartItemNumber = useSelector((state) => state.product.cartItem);

//   return (
//     <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
//       <div className="flex items-center h-full justify-between">
//         <Link to={""}>
//           <div className="h-10">
//             <img src={logo} className="h-full" />
//           </div>
//         </Link>

//         <div className="flex items-center gap-4 md:gap-7">
//           <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
//             <Link to={""}>Home</Link>
//             <Link to={"menu/63f0fdbb3bcc2f97fa53d25d"}>Menu</Link>
//             <Link to={"about"}>About</Link>
//             <Link to={"contact"}>Contact</Link>
//           </nav>
//           <div className="text-2xl text-slate-600 relative">
//             <Link to={"cart"}>
//               <BsCartFill />
//               <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
//                 {cartItemNumber.length}
//               </div>
//             </Link>
//           </div>
//           <div className="text-slate-600" onClick={handleShowMenu}>
//             <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
//               {userData.image ? (
//                 <img src={userData.image} className="h-full w-full" />
//               ) : (
//                 <HiOutlineUserCircle />
//               )}
//             </div>
//             {showMenu && (
//               <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
//                 {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
//                   <Link
//                     to={"newprotect"}
//                     className="whitespace-nowrap cursor-pointer px-2"
//                   >
//                     New product
//                   </Link>
//                 )}

//                 {userData.image ? (
//                   <p
//                     className="cursor-pointer text-white px-2 bg-red-500"
//                     onClick={handleLogout}
//                   >
//                     Logout ({userData.firstName}){" "}
//                   </p>
//                 ) : (
//                   <Link
//                     to={"login"}
//                     className="whitespace-nowrap cursor-pointer px-2"
//                   >
//                     Login
//                   </Link>
//                 )}
//                 <nav className="text-base md:text-lg flex flex-col md:hidden">
//                   <Link to={""} className="px-2 py-1">
//                     Home
//                   </Link>
//                   <Link
//                     to={"menu/63f0fdbb3bcc2f97fa53d25d"}
//                     className="px-2 py-1"
//                   >
//                     Menu
//                   </Link>
//                   <Link to={"about"} className="px-2 py-1">
//                     About
//                   </Link>
//                   <Link to={"contact"} className="px-2 py-1">
//                     Contact
//                   </Link>
//                 </nav>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/img/11212523.jpg'; // Ensure the correct logo path
import { TbUserCircle } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData);

  const handleShowMenu = () => {
    setShowMenu(preve => !preve);
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      <div className='flex items-center h-full justify-between'>
        <Link to={''}>
          <div className='h-16'>
            <img src={Logo} className='h-full' />
          </div>
        </Link>

        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
 
            <Link to={"cart"}>
                 
               <div className='text-2xl text-slate-600'>
                <FaShoppingCart />
               <div className='absolute top-4 right-11 md:top-4 md:right-16 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>  {cartItemNumber.length}</div>
             
              </div>
             </ Link>
          <div className='text-2xl text-slate-600' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer'><TbUserCircle /></div>
            {showMenu && (
              <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                <Link to={"newprotect"} className='whitespace-nowrap cursor-pointer'>New product</Link>
                <Link to={"login"} className='whitespace-nowrap cursor-pointer'>Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
