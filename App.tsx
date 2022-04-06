import React, { useEffect } from "react";
import "./styles/main.scss";
import {
  Container,
  Row,
  Col,
  Spacer,
  Text,
  Card,
  Switch,
  Grid,
} from "@nextui-org/react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import * as DarkReader from "darkreader";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    DarkReader.setFetchMethod(window.fetch);
  });

  return (
    <>
      {/* Sticky header goes here */}
      <Header />

      <Container>
        <AboutMe />
      </Container>
      <Footer />
    </>
  );
}
