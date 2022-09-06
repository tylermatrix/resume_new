import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import SideInfo from "./SideInfo";

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex justifyContent="center">
      <Main></Main>
      <SideInfo></SideInfo>
    </Flex>
  );
}

export default App;
