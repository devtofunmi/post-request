import React, { useState } from "react";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import axios from "axios";
const Homepage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `https://api.prettybio.com/auth/signup?username=${userName}&password=${password}`,
        {
          email: email,
          userName: userName,
          password: password,
          confirmPassword: confirmPassword,
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  return (
    <Box w={["90%", "80%", "40%"]} m="auto" pt={"100px"} textAlign={"center"}>
      <Text fontSize={"3xl"}>Sign Up</Text>
      <Flex direction={"column"} pt={"20px"} w={"300px"} m="auto">
        <Box>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="enter email"
          />
        </Box>
        <Box mt={"20px"}>
          <Input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="enter username"
          />
        </Box>

        <Box mt={"20px"}>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="enter password"
          />
        </Box>

        <Box mt={"20px"}>
          <Input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            placeholder="confirm password"
          />
        </Box>

        <Button onClick={handleSubmit} bg={"blue.300"} mt={"10px"}>
          Sign Up
        </Button>
      </Flex>
    </Box>
  );
};

export default Homepage;
