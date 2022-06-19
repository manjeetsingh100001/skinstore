
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { useSelector } from "react-redux";
import {Button ,Link} from '@chakra-ui/react';
export const Cart=()=>{
    var addcart=JSON.parse(localStorage.getItem("Cart"))||[];
    var total=addcart.reduce(function(acc,cv){
        return acc+Number(cv.price)
      },0)
    const cart=useSelector((store)=>store.cart)
    return(
        
        <div> 
        <Navbar/>
       
        {
        <div style={{marginTop:"32px",marginLeft:"870px" }}> Price of Product</div>
     }
     {
        cart.map((item)=>(
            <div style={{marginTop:"38px", display:"flex", width:"500px",margin:"auto"}}> <img style={{width:"150px",height:"150px"}} 
            src={item.img}/><div><h3 style={{textAlign:"center",margin:" 75px 0px 0px 250px" ,fontWeight:"500"}}>  $ {item.d_price}</h3></div></div>
        ))
     }
     {
        <div style={{marginTop:"32px",marginLeft:"870px" }}> Total- $ {total}</div>
     }   
        <Link href="/checkout" _hover={{textDecoration: 'none',cursor:"pointer"}}>
        <Button px="10" ml="1000" mt="10"mb="10" bg="black" color={"white"}>Checkout</Button>
        </Link>
        <Footer/>
        </div>
        
    )
}