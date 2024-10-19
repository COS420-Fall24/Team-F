import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <Box
                        marginBottom="10px"
                        marginC
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
                <body className="App-navigation">
                    <Tabs
                        borderTop="2px"
                        size="md"
                        isFitted
                        variant="enclosed"
                        bg="#27278d"
                    >
                        <TabList>
                            <Tab
                                bg="#A0a0f0"
                                borderColor="#A0a0f0"
                                _selected={{ color: "white", bg: "#90a0f0" }}
                            >
                                Download
                            </Tab>
                            <Tab
                                bg="#A0a0f0"
                                borderColor="#A0a0f0"
                                _selected={{ color: "white", bg: "#90a0f0" }}
                            >
                                About us
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </body>
                <body className="App-body"></body>
            </div>
        </ChakraProvider>
    );
}

export default App;
