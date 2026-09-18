import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Routing from './Component/Routing/Routing.jsx'
import LoginPage from './Component/Authetication/LoginPage.jsx';

// import Home from './Component/Home/Home'
// import ProductsPage from './Component/Products/ProductsPage.jsx'
// import SingleProductPage from './Component/SingleProduct/SingleProductPage.jsx'
// import CartPage from './Component/Cart/CartPage.jsx'
// import MyOrderPage from './Component/MyOrder/MyOrderPage.jsx'
// import LoginPage from './Component/Authetication/LoginPage.jsx'
// import SignupPage from './Component/Authetication/SignupPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className='min-h-screen gap-[10px] grid grid-rows-[80px_auto]'>
        <Navbar/>
        <main>
          <Routing/>
        </main>
      </div>
    </>
  )
}

export default App
