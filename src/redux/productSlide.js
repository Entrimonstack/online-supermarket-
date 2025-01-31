// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";


// const initialState = {
//   productList: [],
//   cartItem: [],
// };

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     setDataProduct: (state, action) => {
//       state.productList = [...action.payload];
//     },
//     addCartItem: (state, action) => {
//       const check = state.cartItem.some((el) => el._id === action.payload._id);
//       if (check) {
//         toast("Already Item in Cart");
//       } else {
//         toast("Item Add successfully");
//         const total = action.payload.price;
//         state.cartItem = [
//           ...state.cartItem,
//           { ...action.payload, qty: 1, total: total },
//         ];
//       }
//     },
//     deleteCartItem: (state, action) => {
//       toast("one Item Delete");
//       const index = state.cartItem.findIndex((el) => el._id === action.payload);
//       state.cartItem.splice(index, 1);
//       console.log(index);
//     },
//     increaseQty: (state, action) => {
//       const index = state.cartItem.findIndex((el) => el._id === action.payload);
//       let qty = state.cartItem[index].qty;
//       const qtyInc = ++qty;
//       state.cartItem[index].qty = qtyInc;

//       const price = state.cartItem[index].price;
//       const total = price * qtyInc;

//       state.cartItem[index].total = total;
//     },
//     decreaseQty: (state, action) => {
//       const index = state.cartItem.findIndex((el) => el._id === action.payload);
//       let qty = state.cartItem[index].qty;
//       if (qty > 1) {
//         const qtyDec = ++qty;
//         state.cartItem[index].qty = qtyDec;

//         const price = state.cartItem[index].price;
//         const total = price * qtyDec;

//         state.cartItem[index].total = total;
//       }
//     },
//   },
// });

// export const {
//   setDataProduct,
//   addCartItem,
//   deleteCartItem,
//   increaseQty,
//   decreaseQty,
// } = productSlice.actions;

// export default productSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";

// const initialState = {
//   productList: [],
//   cartItem: [],
// };

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     setDataProduct: (state, action) => {
//       state.productList = [...action.payload];
//     },
//     addCartItem: (state, action) => {
//       const check = state.cartItem.some((el) => el._id === action.payload._id);
//       if (check) {
//         toast("Already Item in Cart");
//       } else {
//         toast("Item Added successfully");
//         const total = action.payload.price;
//         state.cartItem = [
//           ...state.cartItem,
//           { ...action.payload, qty: 1, total: total },
//         ];
//       }
//     },
//     deleteCartItem: (state, action) => {
//       toast("One Item Deleted");
//       const index = state.cartItem.findIndex((el) => el._id === action.payload);
//       state.cartItem.splice(index, 1);
//     },
//     increaseQty: (state, action) => {
//       const index = state.cartItem.findIndex((el) => el._id === action.payload);
//       let qty = state.cartItem[index].qty;
//       const qtyInc = ++qty;
//       state.cartItem[index].qty = qtyInc;

//       const price = state.cartItem[index].price;
//       const total = price * qtyInc;

//       state.cartItem[index].total = total;
//     },
//     decreaseQty: (state, action) => {
//       const index = state.cartItem.findIndex((el) => el._id === action.payload);
//       let qty = state.cartItem[index].qty;
//       if (qty > 1) {
//         const qtyDec = --qty; // Corrected: decrement instead of increment
//         state.cartItem[index].qty = qtyDec;

//         const price = state.cartItem[index].price;
//         const total = price * qtyDec;

//         state.cartItem[index].total = total;
//       }
//     },
//   },
// });

// export const {
//   setDataProduct,
//   addCartItem,
//   deleteCartItem,
//   increaseQty,
//   decreaseQty,
// } = productSlice.actions;

// export default productSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios"; // Ensure this line is included

const initialState = {
  productList: [],
  cartItem: [],
};

// Asynchronous thunk action to fetch products
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
    return response.data; // Assuming your API returns an array of products
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = action.payload;
    },
    addCartItem: (state, action) => {
      const itemExists = state.cartItem.some((item) => item._id === action.payload._id);
      if (itemExists) {
        toast("Item already in cart");
      } else {
        toast("Item added successfully");
        const newItem = {
          ...action.payload,
          qty: 1,
          total: action.payload.price,
        };
        state.cartItem.push(newItem);
      }
    },
    deleteCartItem: (state, action) => {
      const index = state.cartItem.findIndex((item) => item._id === action.payload);
      if (index !== -1) {
        state.cartItem.splice(index, 1);
        toast("One item deleted");
      } else {
        toast("Item not found in cart");
      }
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((item) => item._id === action.payload);
      if (index !== -1) {
        state.cartItem[index].qty += 1;
        state.cartItem[index].total = state.cartItem[index].price * state.cartItem[index].qty;
      }
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((item) => item._id === action.payload);
      if (index !== -1) {
        if (state.cartItem[index].qty > 1) {
          state.cartItem[index].qty -= 1;
          state.cartItem[index].total = state.cartItem[index].price * state.cartItem[index].qty;
        } else {
          toast("Quantity cannot be less than 1");
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        toast.error("Failed to fetch products");
      });
  }
});

// Exporting actions and reducer
export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;
