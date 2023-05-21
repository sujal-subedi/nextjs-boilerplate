"use client";
import { Box, Button, Code, Stack, Text, chakra } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      height="100%"
      flexDir={"column"}
    >
      <Text mb={5} color="blue.500" fontSize={"2xl"} fontWeight={500}>
        <chakra.span
          color="white"
          p={1}
          borderRadius={5}
          fontSize={"5xl"}
          background={"black"}
          mr={3}
        >
          Nextjs{" "}
        </chakra.span>
        <chakra.span
          color="white"
          p={1}
          borderRadius={5}
          fontSize={"5xl"}
          background={"green.500"}
        >
          Boilerplate
        </chakra.span>
      </Text>

      <Stack mb={5}>
        <Text>
          <Code colorScheme="orange">utils</Code> --&gt; utility functions (eg:
          format date, transform string)
        </Text>
        <Text>
          <Code colorScheme="red">theme</Code> --&gt; chakra theme configs
        </Text>
        <Text>
          <Code colorScheme="blue">helpers</Code> --&gt; project-specific
          functions (eg: getPageRoute, getApiRoute)
        </Text>
        <Text>
          <Code colorScheme="purple">constants</Code> --&gt; static image paths,
          routes, api routes, magic numbers
        </Text>
        <Text>
          <Code colorScheme="green">components</Code> --&gt; place all the
          components
        </Text>
      </Stack>

      <Button colorScheme="blue">
        <Link href="https://github.com/anjalbinayak/nextjs-boilerplate">
          ⭐ the repo
        </Link>
      </Button>
    </Box>
  );
}
