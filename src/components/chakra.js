import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Button,Box,SimpleGrid } from "@chakra-ui/react"


function Chakra(){
    return(
        <ChakraProvider>
            <div>
               
                <Button>I just consumed some ⚡️Chakra!</Button>
                <SimpleGrid columns={[2, null, 3]} spacing="40px">
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                </SimpleGrid>
                

        </div>
        </ChakraProvider>

        
    )
}
export {Chakra}