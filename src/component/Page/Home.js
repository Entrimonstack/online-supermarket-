// import React from 'react'
// import delivery from '../../img/11212523.jpg'
// import Homecard from '../Homecard'

// const Home = () => {
//   return (
//     < div className='p-2 md:p-4'>
//       <div className='md:flex gap-4 py-2'>

//         <div className='md:w-1/2 py-4'>
//           <div className='flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full'>
//             <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
//             <img src={delivery} className='h-7'/>
//           </div>
//           <h2 className='text-4xl font-bold md:text-7xl py-3'>The Fasted Delivery in <span className='text-red-700 text-bold'>your Home</span></h2>
//           <p className="py-3 text-base"> we pride ourselves on offering the fastest and most reliable delivery options to ensure your orders arrive right on time. Whether you're ordering for yourself or sending a gift, we make sure it gets there quickly and safely.</p>
//           <button className='font-bold bg-red-500 text-slate-200 px-4 py-1 rounded-md'>Order Now</button>
//         </div>
//         <div className='w-1/2'>
//             <Homecard/>
       
       
//         </div>
//        </div> 
       
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../CardFeature";
import HomeCard from "../Homecard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../FilterProduct"
import AllProduct from "../AllProduct";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListDayCrakers = productData.filter(
    (el) => el.category === "night-Crakers",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };


 


  



  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fasted Delivery in{" "}
            <span className="text-red-600 text-">Your Home</span>
          </h2>
          <p className="py-3 text-base ">
          we pride ourselves on offering the fastest and most reliable delivery options to ensure your orders arrive right on time. Whether you're ordering for yourself or sending a gift, we make sure it gets there quickly and safely.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      {/* <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
           New Arrival
          </h2>
        

          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {   homeProductCartListDayCrakers[0]
            ?  homeProductCartListDayCrakers.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
       */}
      < AllProduct heading={"Your Product"}/>
    </div>
  );
};

export default Home;