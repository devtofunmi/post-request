import React, { useState } from "react";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import axios from "axios";
const Homepage = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://example.com/api/endpoint", {
        email: email,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  return (
    <Box w={["90%", "80%", "40%"]} m="auto" pt={"100px"} textAlign={"center"}>
      <Text fontSize={"5xl"}>Bring every idea to life</Text>
      <Text fontSize={"2xl"}>Join waitlist to get notify when we launch</Text>
      <Flex direction={"column"} pt={"20px"} w={"300px"} m="auto">
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="enter email"
        />
        <Button onClick={handleSubmit} bg={"blue.300"} mt={"10px"}>
          Join Waitlist
        </Button>
      </Flex>
    </Box>
  );
};

export default Homepage;
