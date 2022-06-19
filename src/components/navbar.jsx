
import {
  Box,Flex,Avatar,HStack,Link,IconButton,Image,
  Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,useDisclosure,useColorModeValue,Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,SearchIcon  } from '@chakra-ui/icons';



import { VscAccount} from "react-icons/vsc";
import { BsBasket3 } from "react-icons/bs"


    

   export const Navbar=()=>{
       return(
           <div>
           <div style={{display:"flex",height:"32px",
           flexDirection:"row-reverse",backgroundColor:"#f2f2f2"}}>
<div style={{marginRight:"120px",marginTop:"4px"}}>
    <p>Help</p>
</div>
<div style= {{marginRight:"40px",marginTop:"4px" ,marginLeft:"20px"}} >
    <span>us-USD</span>
    </div>
    <Image marginTop={"3px"}
  borderRadius='full'boxSize='25px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxSWkWQN8hwjemPrYisiCOwgiUIbz3y1H9g&usqp=CAU' alt='us-flag'
/>
 </div>
{/* skinlogo */}

 <div style={{height:"105px",display:"flex"}}>
 <Link href="/" _hover={{textDecoration: 'none',cursor:"pointer"}}>
   <div style={{marginLeft:"100px",paddingTop:"25px"}}>
   <img  style={{width:"220px" ,height:"60px"}} src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png" alt="logo">
        </img>
   </div>
   </Link>
   <div style={{ marginTop:"40px",marginLeft:"190px" ,marginBottom:"20px",border:"2px solid #f2f2f2"}}>
       <input  type="text" placeholder="Search for a product  " style={{  paddingTop:"10px", paddingRight:"150px",}}/>
       <SearchIcon mb={3} w={5} h={5} />
   </div>
   <div style={{marginTop:"40px",marginLeft:"300px"}}>
   <Menu>
  <MenuButton as={Button} bg={"white"}leftIcon={<VscAccount />}>
    Account
  </MenuButton>
  <MenuList>
    <MenuItem as={Button}>Login</MenuItem>
    <MenuItem as={Button}>Register</MenuItem>
    <MenuItem>Wishlist</MenuItem>
    <MenuItem>Your Orders</MenuItem>
    <MenuItem>Your Refferal</MenuItem>
  </MenuList>
</Menu>
   </div>
   <div style={{marginTop:"40px",marginLeft:"60px"}}>
   <Menu>
  <MenuButton as={Button} bg={"white"} leftIcon={<BsBasket3  />}>
    Cart
  </MenuButton>
  <MenuList>
    <MenuItem as={Button}>View Cart</MenuItem>
   
  </MenuList>
</Menu>
   </div>

 </div>
 <div style={{border:"1px solid black" ,backgroundColor:"black"}}></div>
 <div style={{paddingLeft:"80px" ,backgroundColor:"white"}}>
     <Simple/>
 </div>
 
 </div>
       )
   }



const Links = ['Brands', 'Summer Shop', 'Sale',"Build a Routine","Skin Care","Hair","Makeup ","Tools","Bath & Body","Self-Care","Fragrance","New & Trending","Advice"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/products'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'white.900')} px={4}>
        <Flex h={8} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
         
        </Flex>

        {isOpen ? (
          <Box pb={2} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={2}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  );
}