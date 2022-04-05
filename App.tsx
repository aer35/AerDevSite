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

export default function App() {
  return (
    <>
      {/* Sticky header goes here */}
      <Header />

      <Container>
        <AboutMe />

        <Container></Container>
        <Card>HELLO</Card>
        <Text
          h3
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
        >
          Hello World 1
        </Text>
        <Spacer />
        <Container>
          <Text
            h6
            css={{
              textGradient: "0deg, #000000 -10%, red 100%",
            }}
          >
            Hello World 2
          </Text>
        </Container>
        <div style={{ height: "1000px" }} />
      </Container>
    </>
  );
}
