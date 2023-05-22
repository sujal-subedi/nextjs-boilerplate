"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./";

const ThemeProvider = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>;
      </body>
    </html>
  );
};

export default ThemeProvider;
