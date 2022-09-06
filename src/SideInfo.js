import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Divider,
  Center,
  Heading,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { RiGithubFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
function SideInfo() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minW="30%"
      minH="100vh"
      bg="#212B33"
    >
      <Flex color="white" marginTop="40px">
        <Image
          src="https://avatars.githubusercontent.com/u/19851674?s=400&u=93b91c0be5cabd2e059512c9c0d9c7d3ce6c7def&v=4"
          maxWidth="100px"
          alt="Picture of Tyler"
        />
        <Center height="50px" margin="20px" alignSelf="center">
          <Divider orientation="vertical" />
        </Center>
        <Flex flexDir="column" justifyContent="center">
          <Text>Web Developer</Text>
          <Text>Student</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text color="white" fontSize="1.3em" paddingBottom="25px">
          Technologies
        </Text>

        <SimpleGrid columns={2} spacing={12}>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#1F89BB"
            ></CheckCircleIcon>
            Html
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#443D75"
            ></CheckCircleIcon>
            Css
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#A17632 "
            ></CheckCircleIcon>
            Javascript
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#47BEA9"
            ></CheckCircleIcon>
            Java
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#B055A2"
            ></CheckCircleIcon>
            NextJS
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#B23375"
            ></CheckCircleIcon>
            ReactJS
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#759F2F"
            ></CheckCircleIcon>
            Chakra UI
          </Text>
          <Text color="white">
            <CheckCircleIcon
              marginRight="1rem"
              color="#CBB72D"
            ></CheckCircleIcon>
            Tailwind CSS
          </Text>
        </SimpleGrid>
      </Flex>

      <Flex
        flexDirection="column"
        color="white"
        marginBottom="100px"
        alignItems="center"
      >
        <Text
          fontSize="1.3em"
          paddingBottom="15px"
          as={motion.div}
          whileHover={{ color: "yellow" }}
        >
          <a href="https://github.com/tylermatrix">
            <Icon>
              <RiGithubFill />
            </Icon>
            My Github
          </a>
        </Text>
        <Text fontSize="1.3em" as={motion.div} whileHover={{ color: "yellow" }}>
          <a href="mailto: tylermaatrix@gmail.com">
            <Icon>
              <MdEmail></MdEmail>
            </Icon>
            Contact Me
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}

export default SideInfo;
