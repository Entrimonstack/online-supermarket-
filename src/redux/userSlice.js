// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     email : "",
//     firstName: "",
//     lastName : "",
//     _id : "",


// };

// export const userSlice = createSlice({
//     name : "user",
//     initialState,
//     reducers : {
//         loginRedux : (state,action)=>{
//             console.log(action.payload.data)
//             //  state.user = action.payload.data
//             state._id = action.payload.data_id
//             state.firstName = action.payload.data.firstName
//             state.lastName = action.payload.data.lastName
//             state.email = action.payload.data.email

            
//         },
//         logoutRedux: (state, action) => {
//             state._id = "";
//             state.firstName = "";
//             state.lastName = "";
//             state.email = "";
            
//           },
//     }
// })

// export const {loginRedux } = userSlice.actions

// export default userSlice.reducer

// ../redux/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    _id: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.data);
            state._id = action.payload.data._id;
            state.firstName = action.payload.data.firstName;
            state.lastName = action.payload.data.lastName;
            state.email = action.payload.data.email;
        },
        logoutRedux: (state) => {
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
        },
    },
});

// Corrected export to include logoutRedux
export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
