import React from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
//import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import Theme from "./style/navbarTheme.ts";
import "./style/App.css";

function Navbar() {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <ChakraProvider theme={Theme}>
            <Box bgGradient="linear(to-br, gray.800, #CC0080, yellow.400)">
                <Flex justify="center" align="center">
                    <Text
                        bgGradient="linear(to-r, #ffffea, #ff1180 80%)"
                        bgClip="text"
                        fontSize="6xl"
                        fontWeight="extrabold"
                        textAlign="left"
                        marginLeft="5vw"
                        marginRight="vw"
                    >
                        VibeCheque
                    </Text>
                    <Link href="/home">Home</Link>
                    <Link href="/about">About</Link>
                    <Spacer />
                    <Link marginRight="3vw">Download</Link>
                </Flex>
            </Box>
        </ChakraProvider>
    );
}

export default Navbar;
