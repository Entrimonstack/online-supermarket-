// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import AllProduct from "../AllProduct";
// import { addCartItem } from "../../redux/productSlide";

// const Menu = () => {
//   const { filterby } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.product.productList);

//   const productDisplay = productData.filter((el) => el._id === filterby)[0];

//   const handleAddCartProduct = (e) => {
//     dispatch(addCartItem(productDisplay));
//   };

//   const handleBuy = () => {
//     dispatch(addCartItem(productDisplay));
//     navigate("/cart");
//   };

//   return (
//     <div className="p-2 md:p-4">
//       <div className="w-full max-w-4xl m-auto md:flex bg-white">
//         <div className="max-w-sm overflow-hidden w-full p-5">
//           <img
//             src={productDisplay?.image || 'fallback-image-url.jpg'}
//             className="hover:scale-105 transition-all h-full"
//             alt="Product Image"
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
//             {productDisplay.name}
//           </h3>
//           <p className="text-slate-500 font-medium text-2xl">
//             {productDisplay.category}
//           </p>
//           <p className="font-bold md:text-2xl">
//             <span className="text-red-500">₹</span>
//             <span>{productDisplay.price}</span>
//           </p>
//           <div className="flex gap-3">
//             <button
//               onClick={handleBuy}
//               className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//             >
//               Buy
//             </button>
//             <button
//               onClick={handleAddCartProduct}
//               className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//             >
//               Add Cart
//             </button>
//           </div>
//           <div>
//             <p className="text-slate-600 font-medium">Description:</p>
//             <p>{productDisplay.description}</p>
//           </div>
//         </div>
//       </div>

//       <AllProduct heading={"Related Product"} />
//     </div>
//   );
// };

// export default Menu;


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import AllProduct from "../AllProduct";
// import { addCartItem } from "../../redux/productSlide";

// const Menu = () => {
//   const { filterby } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.product.productList);

//   const productDisplay = productData?.find((el) => el._id === filterby);

//   if (!productDisplay) {
//     console.error(`Product with ID ${filterby} not found`);
//     return (
//       <div className="text-center p-4">
//         <h2 className="text-red-500 text-3xl font-bold">Product Not Found</h2>
//         <p className="text-gray-600">The product you are looking for does not exist.</p>
//         <p className="text-gray-500">Please check the product ID or go back to the product list.</p>
//         <button
//           onClick={() => navigate('/products')}
//           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Go to Product List
//         </button>
//       </div>
//     );
//   }

//   const handleAddCartProduct = () => {
//     dispatch(addCartItem(productDisplay));
//   };

//   const handleBuy = () => {
//     dispatch(addCartItem(productDisplay));
//     navigate("/cart");
//   };

//   return (
//     <div className="p-2 md:p-4">
//       <div className="w-full max-w-4xl m-auto md:flex bg-white">
//         <div className="max-w-sm overflow-hidden w-full p-5">
//           <img
//             src={productDisplay.image || 'fallback-image-url.jpg'}
//             className="hover:scale-105 transition-all h-full"
//             alt="Product Image"
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
//             {productDisplay.name}
//           </h3>
//           <p className="text-slate-500 font-medium text-2xl">
//             {productDisplay.category}
//           </p>
//           <p className="font-bold md:text-2xl">
//             <span className="text-red-500">₹</span>
//             <span>{productDisplay.price}</span>
//           </p>
//           <div className="flex gap-3">
//             <button
//               onClick={handleBuy}
//               className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//             >
//               Buy
//             </button>
//             <button
//               onClick={handleAddCartProduct}
//               className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//             >
//               Add Cart
//             </button>
//           </div>
//           <div>
//             <p className="text-slate-600 font-medium">Description:</p>
//             <p>{productDisplay.description}</p>
//           </div>
//         </div>
//       </div>

//       <AllProduct heading={"Related Product"} />
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../AllProduct";
import { addCartItem } from "../../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if product data is available and set loading state accordingly
    if (productData && productData.length > 0) {
      setIsLoading(false);
    }
  }, [productData]);

  // Debugging statements to log the state
  console.log("Filterby ID:", filterby);
  console.log("Product Data:", productData);

  const productDisplay = productData?.find((el) => el._id === filterby);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (!productDisplay) {
    console.error(`Product with ID ${filterby} not found`);
    return (
      <div className="text-center p-4">
        <h2 className="text-red-500 text-3xl font-bold">Product Not Found</h2>
        <p className="text-gray-600">The product you are looking for does not exist.</p>
        <p className="text-gray-500">Please check the product ID or go back to the product list.</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go to Product List
        </button>
      </div>
    );
  }

  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image || 'fallback-image-url.jpg'}
            className="hover:scale-105 transition-all h-full"
            alt="Product Image"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleBuy}
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
            >
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
            >
              Add Cart
            </button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;

