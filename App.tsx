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
import * as DarkReader from "darkreader";

//TODO add darkreader state for switch state 

export default function App() {
  useEffect(() => {
    DarkReader.auto({});
  }, []);

  return (
    <Container>
      <Container>
        <Switch
          checked={DarkReader.isEnabled()}
          onChange={() =>
            DarkReader.isEnabled() ? DarkReader.disable() : DarkReader.auto({})
          }
        />
      </Container>
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
  );
}
