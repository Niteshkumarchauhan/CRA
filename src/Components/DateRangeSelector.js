import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineCalendar, AiOutlineDown } from 'react-icons/ai';

const DateRangeSelector = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedRange, setSelectedRange] = useState('Jan 14 - Jan 20, 2024');
  const [comparisonText, setComparisonText] = useState('Jan 07 - Jan 13, 2024');

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const applyDateRange = () => {
    if (startDate && endDate) {
      const formattedRange = `${formatDate(startDate)} - ${formatDate(endDate)}`;
      setSelectedRange(formattedRange);

      const previousWeekRange = calculatePreviousWeek(startDate, endDate);
      setComparisonText(previousWeekRange);

      setShowDatePicker(false);
    } else {
      alert('Please select both start and end dates.');
    }
  };

  const formatDate = (dateStr) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', options);
  };

  const calculatePreviousWeek = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const previousStart = new Date(start);
    previousStart.setDate(previousStart.getDate() - 7);

    const previousEnd = new Date(end);
    previousEnd.setDate(previousEnd.getDate() - 7);

    return `${formatDate(previousStart.toISOString().split('T')[0])} - ${formatDate(previousEnd.toISOString().split('T')[0])}`;
  };

  return (
    <Box position="relative" width="360px" height="50px">
      <Flex
        justify="space-between"
        align="center"
        padding="10px"
        height="65px"
        position="relative"
        border="1px solid #dcdcdc"
        borderRadius="5px"
        cursor="pointer"
        onClick={toggleDatePicker}
      >
        <Flex align="center">
          <Icon as={AiOutlineCalendar} mr={2} />
          <Text fontWeight="bold">Last 7 Days:</Text>
        </Flex>
        <Text>{selectedRange}</Text>
        <Icon as={AiOutlineDown} ml={2} />
      </Flex>
      <Text fontSize="12px" color="gray.500" textAlign="right" mt={2} position="absolute" left="23%" top="35px">
        Compared: {comparisonText}
      </Text>

      {showDatePicker && (
        <VStack
          border="1px solid #dcdcdc"
          borderRadius="5px"
          backgroundColor="#fff"
          padding="10px"
          position="absolute"
          top="60px"
          width="100%"
          zIndex={1}
        >
          <Box width="100%">
            <Text fontSize="12px" mb={2}>
              Start Date:
            </Text>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Box>
          <Box width="100%">
            <Text fontSize="12px" mb={2}>
              End Date:
            </Text>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
          <Button colorScheme="blue" width="100%" onClick={applyDateRange}>
            Apply
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default DateRangeSelector;
