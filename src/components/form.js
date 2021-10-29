import { ChakraProvider, FormControl, FormLabel, RadioGroup, HStack, Radio, FormHelperText, Input } from "@chakra-ui/react";
import { Card, Grommet } from "grommet";
import React from "react";

function Form(){
    return(
        <ChakraProvider>
            <Grommet>
            <div><div class="h-52 w-auto">
                    <Card class="px-10" height="medium" width="350">
                <div class="flex-wrap p-6 border-indigo-200 ">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                    <FormControl as="fieldset">
                        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
                        <RadioGroup defaultValue="Itachi">
                            <HStack spacing="24px">
                                <Radio value="Sasuke">Sasuke</Radio>
                                <Radio value="Nagato">Nagato</Radio>
                                <Radio value="Itachi">Itachi</Radio>
                                <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
                            </HStack>
                        </RadioGroup>
                        <FormHelperText>Select only if you're a fan.</FormHelperText>
                    </FormControl>
                </div>
                </Card></div></div>

             </Grommet>
        </ChakraProvider>
    )
}
export {Form}