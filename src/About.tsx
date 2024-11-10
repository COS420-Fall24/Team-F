import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Text, SimpleGrid, Box } from "@chakra-ui/react";
import { Wrap, Spacer } from "@chakra-ui/react";
import { Image, Heading } from "@chakra-ui/react";
import "./style/App.css";

function About(): React.JSX.Element {
    return (
        <ChakraProvider>
            <Box paddingTop="12" paddingRight="20%" paddingLeft="20%">
                <Flex
                    w="100%"
                    marginTop="8"
                    marginBottom="8"
                    justifyContent="center"
                >
                    <Heading color="#b22d64" size="3xl">
                        The Team
                    </Heading>
                </Flex>
                <Flex w="100%" marginBottom="8">
                    <Heading> Project Manager </Heading>
                </Flex>
                <Box width="max">
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        src={require("./images/izge.jpg")}
                        borderRadius="full"
                        boxSize="150px"
                    />
                    <Text marginTop="5" fontSize="2xl" textAlign="center">
                        Noah Moring
                    </Text>
                </Box>
                <Flex w="100%" marginBottom="8" marginTop="10">
                    <Heading> Programmers </Heading>
                </Flex>
                <Wrap spacing="10" justify="stretch">
                    <Box marginRight="10">
                        <Image
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            src={require("./images/Liam.jpg")}
                            borderRadius="full"
                            boxSize="150px"
                        />
                        <Text marginTop="5" fontSize="2xl" align="center">
                            Liam Hillery
                        </Text>
                    </Box>
                    <Box marginRight="10">
                        <Image
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            src={require("./images/izge.jpg")}
                            borderRadius="full"
                            boxSize="150px"
                        />
                        <Text marginTop="5" fontSize="2xl" align="center">
                            Izge Bayyurt
                        </Text>
                    </Box>
                    <Box marginRight="10">
                        <Image
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            src={require("./images/Bryan.JPG")}
                            borderRadius="full"
                            boxSize="150px"
                        />
                        <Text marginTop="5" fontSize="2xl" align="center">
                            Bryan Sturdivant
                        </Text>
                    </Box>
                </Wrap>
                <Flex w="100%" marginBottom="8" marginTop="8">
                    <Heading> Designer </Heading>
                </Flex>
                <Wrap spacing="40">
                    <Box>
                        <Image
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            src={require("./images/izge.jpg")}
                            borderRadius="full"
                            boxSize="150px"
                        />
                        <Text marginTop="5" fontSize="2xl" align="center">
                            Aiden McGlauflin
                        </Text>
                    </Box>
                </Wrap>
            </Box>
            <Flex paddingTop="12" paddingRight="25%" paddingLeft="25%"></Flex>
        </ChakraProvider>
    );
}

export default About;
