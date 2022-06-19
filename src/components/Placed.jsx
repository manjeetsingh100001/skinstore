import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
export const Placed=()=>{
    return(
        <div>
      <Navbar/>
      <Success/>
      <Footer/>


        </div>
    )
}



export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6} mb="10" mt="10">
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Placed
      </Heading>
      <Text color={'gray.500'}>
        Thank You for Placing the Order, Keep Shopping
       
      </Text>
    </Box >
  );
}