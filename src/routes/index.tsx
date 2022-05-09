import { useRoutes } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { publicRoutes } from "routes/public";

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);

  return <Box bg={"gray.50"}>{element}</Box>;
};
