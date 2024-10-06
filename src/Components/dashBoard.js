
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./SideBar"; 
import Sidebar2 from "./SideBar2"; 
import TopBar from "./TopBar";  
import Performance from "./PerformancecChart";
import {React, useState} from "react";

function Dashboard({ onLogout }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex direction="column" minH="100vh" bg="gray.100">
      <Flex flex="1">
        {/* Main Sidebar */}
        <Box 
          bg="purple.700" 
          height="100vh" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          transition="width 0.4s ease" 
          position="relative"
          width={isHovered ? "0px" : "54px"} 
          overflow="hidden"
        >
          <Sidebar />
        </Box>
        <Box 
          bg="purple.500"
          height="100vh" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          transition="width 0.4s ease" 
          position="relative"
          width={isHovered ? "250px" : "0px"}
          overflow="hidden"
        >
          <Sidebar2 />
        </Box>

        <Flex direction="column" flex="1">
          <TopBar onLogout={onLogout} />
          <Box flex="1" p={6} bg="white" borderRadius="md" boxShadow="sm" m={4}>
            <Performance />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
