import { Navbar } from "./navbar"
import { Footer } from "./footer";
import {
    Box,Center, useColorModeValue,Heading,Text,Stack,Image,Button,Link,Grid
  } from '@chakra-ui/react';
  import React ,{useEffect}from "react";
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
import {getData} from "../redux/action.js"

  import { BsHandbagFill } from "react-icons/bs";
export const  Products=()=>{
    const dispatch = useDispatch();
   
    const result= useSelector((state)=>state.data);
    
    
    const config = {
        method: "GET",
         url:  `https://meesho-all.herokuapp.com/beauty?_limit=12`
          }

    useEffect(()=>{
       
        dispatch(getData(config))
    },[])
return(
    <div>
        
        <Navbar/>
        <Grid  mt="10" templateColumns='repeat(4, 1fr)' gap={6}>
 
     {result?.map((item)=>(
                <ProductsCard key={item.id} id={item.id}
                 title={item.title} price={item.d_price}
                  cross={item.price} url={item.img}
                   rating={item.rating}/>
            ))}
            
                
        </Grid>
        
        <Footer/>
    </div>
)
}

  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductsCard({id,title,price,cross,url}) {
     
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', 'gray.800')}boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
            //   backgroundImage: `url(${url})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={250}
              width={282}
              objectFit={'cover'}
              src={url}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text noOfLines={1} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text>
            <Heading fontSize={'2xl'} noOfLines={1} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {cross}
              </Text>
            </Stack>
            <Link href={`/product/${id}`} _hover={{textDecoration: 'none',cursor:"pointer"}}>
            <Button leftIcon={<BsHandbagFill/>} px="10" > Shop Now</Button>
            </Link>

          </Stack>
        </Box>
      </Center>
    );
  }