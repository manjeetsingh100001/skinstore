import { Navbar } from "./navbar"

import {
    Box,Container,Stack,Text,Link,
    Image,Flex,VStack, Button,Heading, SimpleGrid,StackDivider,useColorModeValue,List,ListItem,
  } from '@chakra-ui/react';
  
  import { MdLocalShipping } from 'react-icons/md';
import { Footer } from "./footer";
import {useParams} from "react-router-dom"
import React ,{useEffect}from "react";
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
import {getData} from "../redux/action.js"

export const ProductDetail=()=>{
  

  const params = useParams();
  
  
  const dispatch = useDispatch();
  const load= useSelector((state)=>state.isLoading)
  const result= useSelector((state)=>state.data);
  console.log(load,"loads");
   
  
  const config = {
      method: "GET",
       url:  `https://meesho-all.herokuapp.com/beauty/?id=${params.id}`
        }

  useEffect(()=>{
     
      dispatch(getData(config))
  },[params.id])
 
  return(

  
    <div>
  {load && <div>Loading</div>}
<Navbar />
<Simple id={result[0]?.id} title={result[0]?.title} price={result[0]?.d_price} cross={result[0]?.price} url={result[0]?.img} data={result[0]} />

<Footer/>
    </div>

  )
}


  
  export default function Simple({id,title,price,cross,url,data}) {
    var addcart=JSON.parse(localStorage.getItem("Cart"))||[];
    const HandleClick=()=>{
      addcart.push(data)
localStorage.setItem("Cart",JSON.stringify(addcart))
    }
    return (
     
     <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={url}
              
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {title}
                </Text>
                
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Sun Protect</ListItem>
                    <ListItem>glow</ListItem>
                    <ListItem>Bright</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Natural herbs</ListItem>
                    <ListItem>hand made</ListItem>
                    <ListItem>Instant Result</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
           
            </Stack>
            <Link href="/cart" _hover={{textDecoration: 'none',cursor:"pointer"}}>
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              onClick={HandleClick}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                
              }}>
              Add to cart
            </Button>
            </Link>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }