import { Navbar } from "./navbar"
import {
    Box,Flex,Text, IconButton,Button,Stack,Link,Grid,
    useColorModeValue,  Avatar, Spacer,useBreakpointValue, Center,
    Image, Heading, Container,
  } from '@chakra-ui/react';
 
  import { ImMobile} from "react-icons/im";
  import { TbTruckDelivery } from "react-icons/tb";
  import { GrEmptyCircle } from "react-icons/gr";
  import {RiBattery2ChargeLine} from "react-icons/ri"
  import { BsHandbagFill } from "react-icons/bs";
  import React from 'react';

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { Footer } from "./footer";
import {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getData} from "../redux/action.js"


export  const Home=()=>{
  const dispatch = useDispatch();
   
  const result= useSelector((state)=>state.data);
  
  
  const config = {
      method: "GET",
       url:  `https://meesho-all.herokuapp.com/beauty?_limit=6`
        }

  useEffect(()=>{
     
      dispatch(getData(config))
  },[])
    return(<>
    <div>
    <Navbar/>
    
    <div>
        <Flex bg={"#f2f2f2"} h="8">
            <Box display={"flex"} ml="60">
           <Box as="icon" mt="1">
               <TbTruckDelivery/>

               </Box>
            <Box as="h4">FREE US Shipping Over $49</Box>   
               </Box> 
               <Box display={"flex"}  pl="10">
           <Box as="icon" mt="1">
               <GrEmptyCircle/>

               </Box>
            <Box as="h4">Refer a Friend,Get $15</Box>   
               </Box> 

               <Box display={"flex"} pl="10">
           <Box as="icon" mt="1">
               <RiBattery2ChargeLine/>

               </Box>
            <Box as="h4">New Customer Save 20%-Use Code NEWBIE</Box>   
               </Box> 

               <Box display={"flex"} pl="10">
           <Box as="icon" mt="1">
               <ImMobile/>

               </Box>
            <Box as="h4">Download our App</Box>   
               </Box> 
               
        </Flex>
    </div>
    <div style={{width:"1400px",height:"35px", margin:"auto",marginTop:"10px"}}>
        <Center h="8" bg="black" color="white">Late Night Shopping! Save 25% Off with code LATE25 !Offfer end 9AM EST | SHOP NOW</Center>
    </div>
    <div style={{width:"1400px", margin:"auto",marginTop:"10px"}}>
     <CaptionCarousel/>
    </div>
    <div style={{width:"300px",margin:"auto", fontWeight:"500", fontSize:"32px",marginTop:"32px"}}>
        <h1>Shop by Category</h1>
    </div>
    <Box w="1200px" m="auto" display={"flex"} mt="10"> 
    <Flex direction="column">
    <Link href="/products" _hover={{textDecoration: 'none',cursor:"pointer"}}>
    <Avatar size='2xl' name='Dan Abrahmov' src='https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png' />
    {/* <Box as="text">SKINCARE</Box> */}
    </Link>
  </Flex>
  <Spacer/>
  <Flex direction="column">
    <Link href="/products" _hover={{textDecoration: 'none',cursor:"pointer"}}>
    <Avatar size='2xl' name='Dan Abrahmov' src='https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png' />
    {/* <Box as="text">HAIR CARE</Box> */}
    </Link>
  </Flex>
  <Spacer/>
  <Flex direction="column">
  <Link href="/products" _hover={{textDecoration: 'none',cursor:"pointer"}}>
    <Avatar size='2xl' name='Dan Abrahmov' src='https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png' />
    {/* <Box as="text">MAKEUP</Box> */}
    </Link>
  </Flex>
  <Spacer/>
  <Flex direction="column">
  <Link href="/products" _hover={{textDecoration: 'none',cursor:"pointer"}}>
    <Avatar size='2xl' name='Dan Abrahmov' src='https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png' />
    {/* <Box as="text">TOOLS</Box> */}
    </Link>
  </Flex>
  <Spacer/>
  <Flex direction="column">
  <Link href="/products" _hover={{textDecoration: 'none',cursor:"pointer"}}>
    <Avatar size='2xl' name='Dan Abrahmov' src='https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png' />
    {/* <Box as="text">BATH & BODY</Box> */}
    </Link>
  </Flex>
  <Spacer/>
  <Flex direction="column">
  <Link href="/products" _hover={{textDecoration: 'none',cursor:"pointer"}}>
    <Avatar size='2xl' name='Dan Abrahmov' src='https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png' />
    {/* <Box as="text">SELF-CARE</Box> */}
    </Link>
  </Flex>
 
  </Box>
  <div style={{width:"300px",margin:"auto", fontWeight:"500", fontSize:"32px",marginTop:"32px" }}>
        <h1>Trending Offers</h1>
    </div>
    <Grid   templateColumns='repeat(3, 1fr)' gap={4}>

    {result?.map((item)=>(
                <ProductSimple key={item.id} id={item.id}
                 title={item.title} price={item.d_price}
                  cross={item.price} url={item.img}
                   rating={item.rating}/>
            ))}
</Grid>
{/* 
<div style={{width:"600px",margin:"auto", fontWeight:"500", fontSize:"32px",marginTop:"32px" }}>
        <h1>What People Are Buying Right Now</h1>
    </div>
    <Grid
  h='600px'
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
>
  <GridItem rowSpan={1} colSpan={1} bg='tomato' >
  <ProductSimple/>
      </GridItem>
  <GridItem colSpan={1} bg='papayawhip' >
  <ProductSimple/>
      </GridItem>
  <GridItem colSpan={1} bg='papayawhip' >
  <ProductSimple/>
      </GridItem>
  <GridItem colSpan={1} bg='tomato' >
  <ProductSimple/>
      </GridItem>
</Grid> */}
<div style={{width:"1400px" ,margin:"auto",marginTop:"42px",marginDown:"32px"}}>
<Image width="100%" src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg' alt='Dan Abramov' />

</div>
<Footer/>
    
    </div>
   
    </>
    )
}






// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(()=>{
  <Slider/>});

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'ACNE AWARENESS',
      text:
        "This month keep your Skin bright and glowing. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/22/original-0531-STDCRE-36879-AP-SS-JUNE-SUMMER-SHOT-28-1180x450-092322.jpg',
    },
    {
      title: 'Protect The Skin you Love',
      text:
        " Protect the Skin from Sun. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/42/original-0531-STDCRE-36879-AP-SS-JUNE-SUMMER-SHOT-03-1180x450-063342.jpg',
    },
    {
      title: 'Late night Shopping sale',
      text:
        " Exclusive Deal shop now resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                left="-67%"
                 top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}



  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export  function ProductSimple( {id,title,price,cross,url} ) {
    return (
      <Center py={12}>
        <Box role={'group'}
    p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'}
          rounded={'lg'}  pos={'relative'} zIndex={1}>
          
            <Image
              rounded={'lg'} height={300} width={300} size={300} objectFit={'cover'} borderRadius={"full"} src={url}
            />
          {/* </Box> */}
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} noOfLines={1} fontSize={'sm'} textTransform={'uppercase'}>
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
          </Stack>
          <Link href={`/product/${id}`} _hover={{textDecoration: 'none',cursor:"pointer"}}>
            <Button leftIcon={<BsHandbagFill/>} px="10" ml="55"> Shop Now</Button>
            </Link>
        </Box>
      </Center>
    );
  }

  