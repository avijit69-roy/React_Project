import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Routing from './Component/Routing/Routing.jsx'
import LoginPage from './Component/Authetication/LoginPage.jsx';
import { jwtDecode } from 'jwt-decode'
import { addToCartAPI,getCartAPI ,removeFromCartAPI,increaseProductAPI, decreaseProductAPI} from './services/cartServices.js'
import setAuthToken from './utils/setAuthToken.js'
import { getJwt,getUser } from './services/userServices.js'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DataContext from './contexts/UserContext.js'
import CartContext from './contexts/CartContext.js'

setAuthToken(getJwt());

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  
 // Fetch user data from JWT token on component mount
  useEffect(() => {

    // Check if user is logged in and fetch user data from JWT token
    try {
      // const Jwt= localStorage.getItem("token");
      const JwtUser=getUser();
  
      if(Date.now()>= (JwtUser.exp)*1000 ){
          localStorage.removeItem("token");
          location.reload();
      }
      else{
          setUser(JwtUser); 
      }      
    } 

    catch (error) {}
  }, [])
  

// Function to add product to cart
const addToCart = async (product, quantity) => {

  const updatedCart=[...cart];
  const existingProductIndex=updatedCart.findIndex(item=> item.product._id == product._id);

  if (existingProductIndex== -1){ 
    updatedCart.push({product:product,quantity:quantity})
  }
  else{
    updatedCart[existingProductIndex].quantity += quantity;
  }
  setCart(updatedCart);

//Add to cart in backend
  try {
    const res = await addToCartAPI(product._id, quantity);
    toast.success("Product added to cart successfully!");  
  } catch (error) {
    toast.error("Failed to add product to cart.")
    setCart(cart);
  }

};

// Function to remove product from cart
const removeFromCart = async (id) => {

  // Remove from cart in frontend
    const oldCart=[...cart];
    const updatedCart=oldCart.filter((item)=> item.product._id !== id);
    setCart(updatedCart);

  // Remove from cart in backend
    try {
      const res= await removeFromCartAPI(id);
      toast.success("Product removed from cart successfully!");
    } catch (error) {
      toast.error("Failed to remove product from cart.");
      setCart(oldCart);
    }
}

/// Function to update product quantity in cart
const updateCart = (type,id)=>{
  const oldCart=[...cart];
  const updatedcart= [...cart]
  const productIndex= updatedcart.findIndex(item=> item.product._id == id);
  
  if(type=="decrease" && updatedcart[productIndex].quantity>1){
    updatedcart[productIndex].quantity -=1;
    setCart(updatedcart);

    decreaseProductAPI(id).catch((error)=>{
      toast.error("Failed to update product quantity.");
   
      setCart(oldCart);
    });
  }

  if(type=="increase" && updatedcart[productIndex].quantity<updatedcart[productIndex].product.stock){
    updatedcart[productIndex].quantity +=1;
    setCart(updatedcart);

    increaseProductAPI(id).catch((error)=>{
      toast.error("Failed to update product quantity.");
      setCart(oldCart);
    });
  }

}

// Function to fetch cart items
const getCart= async ()=>{
  try{
    const res = await getCartAPI();
    setCart(res.data);
  } catch (error) {
    toast.error("Failed to fetch cart items.");
  }
}

// Fetch cart items when user is logged in
useEffect (() => {
    if(user){
      getCart();
    }
  },[user])


return ( 
    <> 
      <DataContext.Provider value={user}>
        <CartContext.Provider value={{cart, addToCart,removeFromCart,getCart,updateCart,setCart}}>
        <div className='min-h-screen gap-[10px] grid grid-rows-[80px_auto]'>
          <Navbar user={user} />
          <main>
            <ToastContainer position="bottom-right" autoClose={2000}/>
            <Routing  cart={cart} />
          </main>
        </div>
        </CartContext.Provider>
      </DataContext.Provider>
    </>
  )
}

export default App
