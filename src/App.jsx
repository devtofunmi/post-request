import React from "react";
import { Box } from "@chakra-ui/react";
import Homepage from "../pages/Homepage";
function App() {
  return (
    <Box w={"100%"} minH={"100vh"} bg={"black"} color={"white"}>
      <Homepage />
    </Box>
  );
}

export default App;
