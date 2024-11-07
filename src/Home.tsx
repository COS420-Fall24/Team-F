import React from "react";
import { ChakraProvider, Flex, Text, Heading, Box } from "@chakra-ui/react";

const Home = () => {
    return (
        <ChakraProvider>
            <Box paddingTop="12" paddingRight="20%" paddingLeft="20%">
                <Flex w="100%" marginBottom="8" marginTop="10">
                    <Heading> What is VibeCheque? </Heading>
                </Flex>
                <Text color="#202020" fontSize="xl">
                    VibeCheque is a Discord bot designed to address the
                    challenges of emotional miscommunication in text-based
                    conversations by leveraging artificial intelligence to
                    analyze and convey the emotional tone of messages. The
                    AI-powered Discord bot utilizes natural language processing
                    and generative AI to bridge the gap between intended and
                    perceived emotions in text-based interactions.
                </Text>
            </Box>
        </ChakraProvider>
    );
};

export default Home;
