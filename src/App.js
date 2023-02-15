import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Issue from "./components/Issue";

function App() {
  return (
    <div className="App">
      <Box height="100px" margin={'10px'} border={"1px solid lightgrey"}>
        <Center padding={"10px"} mt="10px">
          <Heading as="h2" size="2xl" padding="5px">
            Header
          </Heading>
        </Center>
      </Box>
      <Flex>
        <Box width="20%" padding="5px" margin='10px' border={"1px solid lightgrey"}></Box>
        <Box border={"1px solid lightgrey"} width="80%" padding={"20px"} margin="10px">
          {" "}
          <Issue />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
