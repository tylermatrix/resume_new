import React from "react";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { List, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdVideogameAsset } from "react-icons/md";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
function Main() {
  return (
    <Flex
      bg="#25333F"
      flexDirection="column"
      color="white"
      padding="40px"
      minH="100vh"
    >
      <Heading paddingBottom="10px">Tyler Matrix</Heading>
      <Text fontSize="1.7em" marginBottom="20px">
        Front End Developer
      </Text>
      <Flex paddingBottom="30px" flexDirection="column">
        <Text fontSize="1.3em" paddingBottom="15px" textDecoration="underline">
          Skills / Experience
        </Text>
        <List>
          <UnorderedList>
            <ListItem paddingBottom="10px">
              One year enrolled in Durham College programming
            </ListItem>
            <ListItem paddingBottom="10px">
              One year working with React and other JS libraries
            </ListItem>
            <ListItem paddingBottom="10px">
              Experienced using Windows, Mac, and Linux
            </ListItem>
            <ListItem paddingBottom="10px">
              Comfortable using Git and Github
            </ListItem>
          </UnorderedList>
        </List>
      </Flex>
      <Flex paddingBottom="30px">
        <List>
          <Text
            fontSize="1.3em"
            paddingBottom="15px"
            as={motion.div}
            whileHover={{ color: "yellow" }}
            textDecoration="underline"
          >
            Recent Project -{" "}
            <a href="https://next-mineral-merchant.vercel.app/">
              Mineral Merchant
            </a>
            <Icon>
              <MdVideogameAsset />
            </Icon>
          </Text>
          <UnorderedList>
            <ListItem paddingBottom="10px">
              Economy simulator that allows users to buy and sell minerals
            </ListItem>
            <ListItem paddingBottom="10px">
              Built with React, Jotai, and Chakra UI
            </ListItem>
            <ListItem paddingBottom="10px">
              Used Framer Motion for animations and transitions
            </ListItem>
            <ListItem paddingBottom="10px">
              Updated version from an original project built with the Android
              SDK
            </ListItem>
          </UnorderedList>
        </List>
      </Flex>

      <Flex paddingBottom="30px">
        <List>
          <Text
            fontSize="1.3em"
            paddingBottom="15px"
            textDecoration="underline"
          >
            Education
          </Text>
          <UnorderedList>
            <ListItem paddingBottom="10px">
              Computer Programming at Durham College
            </ListItem>
          </UnorderedList>
        </List>
      </Flex>
    </Flex>
  );
}

export default Main;
