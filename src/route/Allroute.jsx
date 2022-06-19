import { Home } from "../components/Home"
import { Login } from "../components/Login"
import { Routes, Route} from "react-router-dom";
import { ProductDetail} from "../components/SinglePage";
import { Products } from "../components/Products";
import { Cart } from "../components/Cart";
import { Placed } from "../components/Placed";
import { Checkout } from "../components/checkout";

function AllRoute(){
    return(
        <> 
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/placed" element={<Placed/>} />
          
          </Routes>
          </>
    )
}export default AllRoute