import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function HeatMapText() {
  return (
    <Box m="15px 0 15px 70px" bg="white">
      <Heading fontSize="14px" color="rgba(0, 0, 0, 1)">
        Heat Map
      </Heading>
      <Text fontSize="12px" color="rgba(157, 157, 157, 1)">
        Select hours to schedule Dayparting
      </Text>
    </Box>
  );
}

export default HeatMapText;
