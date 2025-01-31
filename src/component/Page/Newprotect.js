


import React, { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImagetoBase64 } from "../../utility/ImagetoBasae64";
import {BsCloudUpload} from "react-icons/bs"

const NewProtect = () => {
  const [data, setData] = useState({
    name: '',
    category: '',
    image: null,
    price: '',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   setData((prev) => ({
  //     ...prev,
  //     image: file,
  //   }));

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const triggerFileInput = () => {
  //   const fileInput = document.getElementById('fileInput');
  //   fileInput.click();
  // };

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const fetchRes = await fetchData.json();
    console.log(fetchRes);
  };

  return (
    <div className='p-6'>
      <form className='m-auto w-full max-w-md shadow-lg flex flex-col p-5 bg-white rounded-lg' onSubmit={handleSubmit}>
        <label htmlFor='name' className='mb-2 font-semibold'>
          Name
        </label>
        <input
          type='text'
          name='name'
          className='border border-gray-300 p-2 rounded mb-4'
          placeholder='Enter product name'
          onChange={handleOnChange}
          required
        />

        <label htmlFor='category' className='mb-2 font-semibold'>
          Category
        </label>
        <select
          name='category'
          className='border border-gray-300 p-2 rounded mb-4'
          onChange={handleOnChange}
          required
        >
          {/* <option value=''>Select an option</option>
          <option value='rockets'>fruits</option>
          <option value='hand-lighters'>Hand Lighters</option>
          <option value='flower-pots'>Flower Pots</option>
          <option value='ground-chakkars'>Ground Chakkars</option>
          <option value='bombs'>Bombs</option>
          <option value=' day-Crakers'>Day Crakers</option>
          <option value='night-Crakers'>Night Crakers</option>
          <option value='gift-boxes'>Gift boxes</option>
          <option value='one-sound-crakers'>One Sound Crakers</option>
          <option value='family-packs'>Family Packs</option> */}
          <option value=''>Select an option</option>
          <option value='fruits'>fruits</option>
          <option value='Vegetable'>Vegetable</option>
          <option value='Rice'>Rice</option>
          <option value='Cake'>Cake</option>
          <option value='Burger'>Burger</option>
          <option value=' Icream'>Icream</option>
          <option value='Pizza'>Pizza</option>
          <option value='Dosa'>Dosa</option>
          <option value='Panner'>Panner</option>
          <option value='Sandwich'>Sandwich</option>
        </select>

        {/* <label htmlFor='image' className='mb-2 font-semibold'>
          Image
        </label>
        <div
          className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer'
          onClick={triggerFileInput}
        >
          {imagePreview ? (
            <img src={imagePreview} alt='Preview' className='h-full w-full object-cover rounded' />
          ) : (
            <>
              <IoCloudUploadOutline className='text-4xl text-gray-600' />
              <p className='mt-2 text-gray-500'>Upload your files here</p>
            </>
          )}
          <input
            type='file'
            id='fileInput'
            onChange={handleImageChange}
            className='hidden'
            accept='image/*'
          />
        </div> */}

        
        <label htmlFor='image'>Image
        <div  className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" /> :<span className='text-5xl'><BsCloudUpload/></span> 
            }
            
            
           <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>

        <label htmlFor='price' className='my-1'>
          Price
        </label>
        <input
          type='number'
          name='price'
          className='bg-slate-200 p-1 my-1'
          placeholder='Enter price'
          onChange={handleOnChange}
          required
        />

        <label htmlFor='description' className='my-1'>
          Description
        </label>
        <textarea
          name='description'
          rows={2}
          className='bg-slate-200 p-1 my-1 resize-none'
          placeholder='Enter description'
          onChange={handleOnChange}
          required
        />

        <button type='submit' className='bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-200'>
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProtect;
