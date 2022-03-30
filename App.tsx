import React, { useEffect } from "react";
import "./main.scss";
import {
  Container,
  Row,
  Col,
  Spacer,
  Text,
  Card,
  Switch,
} from "@nextui-org/react";
import DarkModeSwitch from "./components/DarkModeSwitch";

export default function App() {
  return (
    <>
      <Container>
        {/* Sticky header goes here */}
        <DarkModeSwitch />
      </Container>

      <Container>
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
      </Container>
    </>
  );
}
