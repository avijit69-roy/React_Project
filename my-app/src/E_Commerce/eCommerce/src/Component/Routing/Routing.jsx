import React from 'react'
import Home from '../Home/Home';
import ProductsPage from '../Products/ProductsPage.jsx';
import SingleProductPage from '../SingleProduct/SingleProductPage.jsx';
import CartPage from '../Cart/CartPage.jsx';
import MyOrderPage from '../MyOrder/MyOrderPage.jsx';
import LoginPage from '../Authetication/LoginPage.jsx';
import SignupPage from '../Authetication/SignupPage.jsx';

import {Routes,Route} from 'react-router-dom';

function Routing() {
  return (
    <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/products' element= {<ProductsPage/>}/>
        <Route path='/products/1' element= {<SingleProductPage/>}/>
        <Route path='/signup' element= {<SignupPage/>}/>
         <Route path='/login' element= {<LoginPage/>}/>
        <Route path='/cart' element= {<CartPage/>}/>
        <Route path='/myorders' element= {<MyOrderPage/>}/>
             
    </Routes>
  )
}

export default Routing