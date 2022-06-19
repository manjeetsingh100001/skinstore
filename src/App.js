
import {
  ChakraProvider, theme,} from '@chakra-ui/react';

import AllRoute from './route/Allroute';

function App() {
  return (
   <ChakraProvider theme={theme}>
     <AllRoute/>
   </ChakraProvider>
  );
}

export default App;
