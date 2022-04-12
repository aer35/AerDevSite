import { Container, Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <Container>
        <iframe
          src="https://registry.jsonresume.org/aer35"
          style={{
            width: "100%",
            height: "85vh",
            marginBottom: "5vh",
            border: "none",
          }}
        />
        {/* <Spacer y={50} /> */}
      </Container>
    </>
  );
};

export default ResumePage;
