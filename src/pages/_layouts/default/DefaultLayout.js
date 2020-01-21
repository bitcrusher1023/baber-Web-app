import React from "react";
import Header from "../../../components/Header/Header";
import { Container } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
