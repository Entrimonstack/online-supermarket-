import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Home from './component/Page/Home';
import Menu from './component/Page/Menu'; 
import About from './component/Page/About';
import Contact from './component/Page/Contact';
import Login from './component/Page/Login';

import SignUp from './component/Page/SignUp';
import { store } from './redux/index';
import {Provider} from "react-redux"
import Cart from './component/Page/Cart';
import Success from './component/Page/Success';
import Cancel from './component/Page/Cancel';
import NewProtect from './component/Page/Newprotect';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
       {/* <Route path='menu' element={<Menu/>} />  */}
      <Route path='menu/:filterby' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='newprotect' element={<NewProtect/>}/>
     <Route path='cart' element={<Cart/>}/> 
     <Route path='success' element={<Success/>}/> 
     <Route path='cancel' element={<Cancel/>}/> 


    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
