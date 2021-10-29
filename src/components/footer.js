import React from "react";
import Sairam from "../images/sairamlogo.png"
import BasicUsage from "../components/modal"
import {ChakraProvider,Button} from "@chakra-ui/react";
import {Box} from "@chakra-ui/react";
function Footer(){
    return(
        <ChakraProvider>
            
        <div>
            <BasicUsage/>
                <Box bgGradient="linear(to-l, #7928CA, #FF0080)">
                    <div class="flex-col flex-1">
                <div>
                    <div class="flex-col float-right p-10 font-normal ">
                        <div class="flex-row py-2">
                            Terms and Conditions
                        </div>
                        <div class="flex-row py-2">
                            About
                        </div>
                        <div class="flex-row  py-2">
                            Governance
                        </div>
                    </div>
                    <div class="flex-col float-right p-10 font-normal">
                        <div class="flex-row py-2">
                            Privacy & Policy
                        </div>
                        <div class="flex-row py-2">
                            Cookies
                        </div>
                        <div class="flex-row py-2">
                            About Sairam Institutions
                        </div>
                        <br />
                        <div class="py-1"><a href="www.com">Insta</a></div>
                        <div class="py-1"><a href="www.com">FB</a></div>
                        <div class="py-1"><a href="www.com">Twitter</a></div>
                        <div class="py-1"><a href="www.com">Pinterest</a></div>

                    </div>

                    <div class="flex-row">
                        <div class=" font-normal text-4xl px-20 py-10 font-family: 'Josefin Sans', cursive; ">
                            <font class="font-semibold ">Sairam</font><br />Code<br />Club
                        </div>
                        <div class=" flex-col m-0">
                            <img class="px-20 py-4" src={Sairam} alt="hk" height="300" width="300" />
                        </div>

                    </div>



                </div>


                <div>


                </div>

            </div>
            </Box>
         
        </div>
            </ChakraProvider>
    )
}
export {Footer}