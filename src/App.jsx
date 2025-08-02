import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './component/userLayout'
import Home from './component/home'
import Login from './component/login'
import Register from './component/register'
import Dashboard from './admin/dashboard'
import AdminLayout from './admin/adminLayout'
import AddProduct from './admin/addProduct'
import ManageProducts from './admin/product'
import Order from './admin/order'
import Cart from './component/cart'
import User from './admin/user'
import Category from './admin/category'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
    <Routes>
<Route path='/' element={<UserLayout/>}>
<Route index element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/cart' element={<Cart/>}/>

</Route>

<Route path='/admin' element={<AdminLayout/>}>

<Route index element={<Dashboard/>}/>

<Route path='addproduct' element={<AddProduct/>}/>
<Route path='products' element={<ManageProducts/>}/>
<Route path='orders' element={<Order/>}/>
<Route path='users' element={<User/>}/>
<Route path='categories' element={<Category/>}/>

</Route>

    </Routes>
    </div>
  )
}

export default App
