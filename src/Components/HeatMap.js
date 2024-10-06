import React from "react";
import { ChakraProvider, Grid, GridItem, theme } from "@chakra-ui/react";

const HeatMap = () => {
  const times = [
    " ",
    "Imp",
    "Clicks",
    "CPM",
    "Imp",
    "Clicks",
    "CPM",
    "Imp",
    "Clicks",
    "CPM",
    "Imp",
    "Clicks",
    "CPM",
    "Imp",
    "Clicks",
    "CPM",
    "Imp",
    "Clicks",
    "CPM",
    "Imp",
    "Clicks",
    "CPM",
  ];

  const hours = [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
  ];

  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const generateRandomValues = () => {
    return Array.from({ length: 21 }, () => Math.floor(Math.random() * 10000));
  };

  const columnValues = hours.map(() => generateRandomValues());
  const getBackgroundColor = (index) => {
    switch (index % 3) {
      case 0:
        return "rgba(226, 217, 250, 1)";
      case 1:
        return "rgba(113, 213, 240, 1)";
      case 2:
        return "rgba(255, 191, 235, 1)";
      default:
        return "transparent";
    }
  };
  const grandTotals = [0, 0, 0];
  columnValues.forEach((values) => {
    values.forEach((value, index) => {
      grandTotals[index % 3] += value;
    });
  });

  return (
    <ChakraProvider theme={theme} bg="white">
      <Grid templateColumns="repeat(6, 1fr)">
        {Days.map((day, index) => (
          <GridItem
            key={index}
            color="rgba(157, 157, 157, 1)"
            fontSize="12px"
            bg="rgba(255, 255, 255, 1)"
            border="none"
            textAlign="center"
            mb="10px"
          >
            {day}
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(22, 1fr)" bg="#2196F3">
        {times.map((time, index) => (
          <GridItem
            key={index}
            bg="rgba(255, 255, 255, 1)"
            color="rgba(157, 157, 157, 1)"
            border="none"
            textAlign="center"
            fontSize="12px"
          >
            {time}
          </GridItem>
        ))}
      </Grid>
      {hours.map((hour, rowIndex) => {
        const values = columnValues[rowIndex];
        return (
          <Grid key={hour} templateColumns="repeat(22, 1fr)" gap={1}>
            <GridItem
              bg="rgba(255, 255, 255, 0.8)"
              border="none"
              textAlign="center"
            >
              {hour}
            </GridItem>
            {values.map((value, index) => (
              <GridItem
                key={index}
                bg={getBackgroundColor(index)}
                border="none"
                textAlign="center"
              >
                {index % 3 === 2 ? `₹ ${value}` : value}
              </GridItem>
            ))}
          </Grid>
        );
      })}
      <Grid templateColumns="repeat(22, 1fr)" gap={1}>
        <GridItem
          bg="rgba(255, 255, 255, 0.8)"
          border="none"
          textAlign="center"
        >
          Grand Total
        </GridItem>
        {grandTotals.map((total, index) => (
          <GridItem
            key={index + 21}
            bg={getBackgroundColor(index)} 
            border="none"
            textAlign="center"
          >
            {index % 3 === 2 ? `₹ ${total}` : total}
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default HeatMap;
