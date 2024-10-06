import React, { useState } from "react";
import DropdownArroe from "./images/dropdown.png";
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Checkbox,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

function PerformanceText() {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [tempSelectedMetrics, setTempSelectedMetrics] = useState([]);
  const handleCheckboxChange = (value) => {
    setTempSelectedMetrics((prev) =>
      prev.includes(value)
        ? prev.filter((metric) => metric !== value)
        : [...prev, value]
    );
  };

  const handleApply = () => {
    setSelectedMetrics(tempSelectedMetrics);
  };

  const handleCancel = () => {
    setTempSelectedMetrics(selectedMetrics);
  };
  return (
    <Flex alignItems="center" gap="2" bg="white" m="0 12px">
      <Box>
        <Heading as="h1" size="md" mb={1}>
          Performance Chart
        </Heading>
        <Text fontSize="sm" mb={4}>
          Key Metrics for Dayparting Schedule Performance Evaluation
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Popover>
          <PopoverTrigger>
            <Button
              fontSize="12px"
              border="1px"
              borderColor="rgba(167, 167, 167, 1)"
              borderRadius="5px"
            >
              Select Metrics{" "}
              <Image ml="5px" w="7px" h="7px" src={DropdownArroe} />
            </Button>
          </PopoverTrigger>
          <PopoverContent width="200px">
            <PopoverArrow />
            <PopoverCloseButton />
            <Stack p={4}>
              {["Spend", "Revenue", "Impressions", "Clicks", "CRM", "CTR"].map(
                (option) => (
                  <Checkbox
                    key={option}
                    isChecked={tempSelectedMetrics.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  >
                    {option}
                  </Checkbox>
                )
              )}
              <Flex justifyContent="space-between" mt={4}>
                <Button
                  size="sm"
                  onClick={handleCancel}
                  variant="outline"
                  colorScheme="gray"
                >
                  Cancel
                </Button>
                <Button size="sm" onClick={handleApply} colorScheme="blue">
                  Apply
                </Button>
              </Flex>
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </Flex>
  );
}

export default PerformanceText;
