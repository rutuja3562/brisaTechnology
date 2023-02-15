import { Box, Text } from "@chakra-ui/react";
import React from "react";

const List = ({ data }) => {
 
  return (
    <Box  padding="5px">
      {data.map((e, i) => {
        return <Text key={e} margin={"5px"} padding="5px"  _hover={{color:"blue", textDecoration:"underline"}} >{e}</Text>;
      })}
    </Box>
    
  );
};

export default List;
