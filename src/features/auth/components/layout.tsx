import React from "react";

import { Container } from "@chakra-ui/react";
import { CONTAINER_MAX_WIDTH } from "config";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Container maxWidth={CONTAINER_MAX_WIDTH}>{children}</Container>;
};
