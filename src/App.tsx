import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProvider } from "providers/app";
import { AppRoutes } from "routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </ChakraProvider>
);
