import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ProductContainer from "./components/ProductContainer"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"






function App() {
   return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<> <Home/> <Footer/></>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products" element={<ProductContainer/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>



    </Routes>
  


    </Router>
  )
}

export default App
