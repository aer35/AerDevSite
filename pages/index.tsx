import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="AerDevSite"
          content="Website designed and developed by Aaron Mechanic"
        />
        <link rel="icon" href="/images/AerDevIcon3_500.png" />
      </Head>
      <Header />
      <Container>
        <AboutMe />
      </Container>
      {/* Time to add the resume. Consider adding as another page or adding as a card on the main page */}
      <Footer />
      );
    </>
  );
};

export default Home;
