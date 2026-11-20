import React, { useEffect, useState ,useContext} from 'react'
import Home from '../Home/Home';
import ProductsPage from '../Products/ProductsPage.jsx';
import SingleProductPage from '../SingleProduct/SingleProductPage.jsx';
import CartPage from '../Cart/CartPage.jsx';
import MyOrderPage from '../MyOrder/MyOrderPage.jsx';
import LoginPage from '../Authetication/LoginPage.jsx';
import SignupPage from '../Authetication/SignupPage.jsx';
import Logout from '../Authetication/Logout.jsx';
import {Routes,Route} from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import ProtectedRoute from './ProtectedRoute.jsx';

function Routing() {
  const {cart,addToCart} = useContext(CartContext);

  return (
    <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/products' element= {<ProductsPage/>}/>

        {/* dynamic Routing for single product component */}
        <Route path='/products/:id' element= {<SingleProductPage />}/>

        <Route path='/signup' element= {<SignupPage/>}/>
         <Route path='/login' element= {<LoginPage/>}/>

        <Route element= {<ProtectedRoute/>}>
          <Route path='/cart' element= {<CartPage />}/>
          <Route path='/myorders' element= {<MyOrderPage/>}/>
          <Route path='/logout' element= {<Logout/>}/>
        </Route>
                     
    </Routes>
  )
}

export default Routing