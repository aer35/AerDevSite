import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/about_me/AboutMe";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container style={{ minHeight: "80vh" }}>
        <AboutMe />
      </Container>
    </>
  );
};

export default Home;
