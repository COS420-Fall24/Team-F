// import React from "react";
// import { ChakraProvider, Text } from "@chakra-ui/react";
// //import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";
// import { Link } from "@chakra-ui/react";
// import { Flex, Spacer } from "@chakra-ui/react";
// import "./style/App.css";

// function About(): React.JSX.Element {
//     return (
//         <ChakraProvider>
//             <Grid
//                 templateAreas={`"header"
//                   "main"`}
//                 gridTemplateRows={"100px 1fr"}
//                 gridTemplateColumns={"100vw"}
//                 h="100vh"
//                 gap="0"
//                 color="blackAlpha.700"
//             >
//                 <GridItem
//                     pl="2"
//                     bgGradient="linear(to-br, gray.800, #CC0080, yellow.400)"
//                     area={"header"}
//                 >
//                     <Flex justify="center" align="center">
//                         <Text
//                             bgGradient="linear(to-r, #ffffea, #ff1180 80%)"
//                             bgClip="text"
//                             fontSize="6xl"
//                             fontWeight="extrabold"
//                             textAlign="left"
//                             marginLeft="5vw"
//                             marginRight="3vw"
//                         >
//                             VibeCheque
//                         </Text>
//                         <Link
//                             color="#ffffea"
//                             fontSize="24px"
//                             fontWeight="extrabold"
//                             textAlign="center"
//                             marginLeft="3vw"
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             color="#ffffea"
//                             fontSize="24px"
//                             fontWeight="extrabold"
//                             textAlign="center"
//                             marginLeft="3vw"
//                         >
//                             About
//                         </Link>
//                         <Spacer />
//                         <Spacer />
//                         <Spacer />
//                         <Link
//                             color="#ffffea"
//                             fontSize="24px"
//                             fontWeight="extrabold"
//                             textAlign="center"
//                             marginRight="5vw"
//                             marginLeft="3vw"
//                         >
//                             Download
//                         </Link>
//                     </Flex>
//                 </GridItem>
//                 <GridItem pl="2" bg="pink.100" area={"main"}></GridItem>
//             </Grid>
//         </ChakraProvider>
//     );
// }

// export default About;
