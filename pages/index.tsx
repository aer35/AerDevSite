import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <AboutMe />
      </Container>
    </>
  );
};

export default Home;
