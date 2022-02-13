import React from 'react'
import './page.css'
import logo from "./ball.png";
import eventslist from "./eventsdata";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Spacer,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton
} from "@chakra-ui/react";

const Page = () => {
  return (
    <>
      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
       
        {eventslist.slice(0).reverse().map((eventslist) =>
          eventslist.index % 2 == 0 ? (
            <div class="row row-1">
              <section className>
                <div id="container2 icon">
                  <div className="item">
                    <img src={logo} className="App-logo icon" alt="logo" />
                  </div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "-3s" }}
                  ></div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "-2s" }}
                  ></div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "-1s" }}
                  ></div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "0s" }}
                  ></div>
                </div>
                <Box
                  w={"full"}
                  className="bgc"
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Box>
                    <Box d="flex" flexDir="row" alignItems="center">
                      <Box
                        w="100%"
                        background={"black"}
                        color={"white"}
                        rounded={"md"}
                        cursor={"default"}
                        h="50px"
                        textAlign="center"
                        p={3}
                      >
                        {eventslist.title}
                      </Box>
                    </Box>

                    <Text
                      fontSize={"md"}
                      fontWeight="bold"
                      width="50%"
                      bg="#ffffff"
                      p={2}
                      px={3}
                      mt={3}
                      mx="auto"
                      color={"green.500"}
                      rounded={"full"}
                      textAlign={"center"}
                    >
                     { eventslist.date}
                    </Text>

                    <Box
                      p={4}
                      d="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDir="column"
                      mt={2}
                    >
                      <Text
                        fontSize="md"
                        fontWeight="bold"
                        d="flex"
                        justifyContent="center"
                        textAlign={"center"}
                      >
                       { eventslist.desc}
                      </Text>
                    </Box>
                    <Box d="flex" flexDir="row" alignItems="center" pb={3}>
                      <Button
                        w="50%"
                        // mt={6}
                        mx="auto"
                        bg="red"
                        color={"white"}
                        rounded={"md"}
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                      >
                        Register
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </section>
            </div>
          ) : (
            <div class="row row-2">
              <section className>
                <div id="container2 icon">
                  <div className="item">
                    <img src={logo} className="App-logo icon" alt="logo" />
                  </div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "-3s" }}
                  ></div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "-2s" }}
                  ></div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "-1s" }}
                  ></div>
                  <div
                    className="circle icon"
                    style={{ animationDelay: "0s" }}
                  ></div>
                </div>
                <Box
                  w={"full"}
                  className="bgc"
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Box>
                    <Box d="flex" flexDir="row" alignItems="center">
                      <Box
                        w="100%"
                        background={"black"}
                        color={"white"}
                        rounded={"md"}
                        cursor={"default"}
                        h="50px"
                        textAlign="center"
                        p={3}
                      >
                        {eventslist.title}
                      </Box>
                    </Box>

                    <Text
                      fontSize={"md"}
                      fontWeight="bold"
                      width="50%"
                      bg="#ffffff"
                      p={2}
                      px={3}
                      mt={3}
                      mx="auto"
                      color={"green.500"}
                      rounded={"full"}
                      textAlign={"center"}
                    >
                     { eventslist.date}
                    </Text>

                    <Box
                      p={4}
                      d="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDir="column"
                      mt={2}
                    >
                      <Text
                        fontSize="md"
                        fontWeight="bold"
                        d="flex"
                        justifyContent="center"
                        textAlign={"center"}
                      >
                        {eventslist.desc}
                      </Text>
                    </Box>
                    <Box d="flex" flexDir="row" alignItems="center" pb={3}>
                      <Button
                        w="50%"
                        // mt={6}
                        mx="auto"
                        bg="red"
                        color={"white"}
                        rounded={"md"}
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                      >
                        Register
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </section>
            </div>
          )
        )}
      </div>

     
    </>
  );
}

export default Page