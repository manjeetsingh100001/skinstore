import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Link } from '@chakra-ui/react';
import { background } from "@chakra-ui/react"

export const Checkout=()=>{
    return(
        <div>
            <Navbar/>
             <Check/>
            <Footer/>

        </div>
    )
}


export function Check(){
    return(
        <div>
        <div id="check" style={{width: "1190px", margin: "auto", paddingLeft:"100px" }}>
        <h1 style={{marginTop:"32px",marginBottom:"32px" ,fontSize:"25px",fontWeight:"500"}}>CHECKOUT ADDRESS</h1>
      
        
        <form id="input" >
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="firstName" type="text" placeholder="First name"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }} id="lastName" type="text"placeholder="Last name"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="pin" type="number"placeholder="Post code"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="Address1"  type="text"placeholder="Address1"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="Address2" type="text"placeholder="Address2"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="city" type="text"placeholder="city"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="state" type="text"placeholder="State"/>
            <input style={{display:"block", padding:" 4px 150px " ,margin: "10px 0px" ,backgroundColor:"#f2f2f2" }}  id="country" type="text"placeholder="Country" />
            
             </form>
             <Link href="/placed" _hover={{textDecoration: 'none',cursor:"pointer"}}>
         <button id="sub" style={{padding: "10px 200px",marginBottom:"60px", backgroundColor:"black",color:"white",marginTop: "20px"}}>Place Order</button> 
        </Link>
        </div>
        </div>
    )
}