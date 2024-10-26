
import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Stories from './Components/Pages/Stories'
import Giftuing from './Components/Pages/Giftuing'
import Bestsellers from './Components/Pages/Bestsellers'
import New from './Components/Pages/New'
import Skincare from './Components/Pages/Skincare'
import Lipcare from './Components/Pages/Lipcare'
import Body from './Components/Pages/Body'
import Fragrance from './Components/Pages/Fragrance'
import Profile from './Components/Pages/Profile'
import Cart from './Components/Pages/Cart'
import NotFound from './Components/NotFound/NotFound'
import Offers from './Components/Pages/Offers'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Stories' element={<Stories/>}/>
        <Route path='/Giftuing' element={<Giftuing/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/Bestsellers' element={<Bestsellers/>}/>
        <Route path='/Skincare' element={<Skincare/>}/>
        <Route path='/Lipcare' element={<Lipcare/>}/>
        <Route path='/Body' element={<Body/>}/>
        <Route path='/Fragrance' element={<Fragrance/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/Offers' element={<Offers/>}/>

      </Route>
    )
  )
  return (
    <>
    <Navbar/>
    <RouterProvider router={myRoute} />
    <Footer/>
    </>
  )
}

export default App
