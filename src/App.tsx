import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <Box
                        w="100%"
                        h="100px"
                        bgGradient="linear(to-r, #1928FA, #CC0080 ,yellow.400)"
                    >
                        <Text
                            bgGradient="linear(to-r, #ffffaa, #FF1180)"
                            bgClip="text"
                            fontSize="6xl"
                            fontWeight="extrabold"
                            textAlign="left"
                            marginLeft="5vw"
                        >
                            VibeCheque
                        </Text>
                    </Box>
                </header>
                <body className="App-body"></body>
            </div>
        </ChakraProvider>
    );
}

export default App;
