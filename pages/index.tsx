import {Container, Spacer} from "@nextui-org/react";
import type {NextPage} from "next";
import Head from "next/head";
import AboutMe from "../components/about_me/AboutMe";
import SocialLinks from "../components/about_me/SocialLinks";
import WorkExperience from "../components/work_experience/WorkExperience";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Container style={{padding: "36px 0 20px 0"}}>
                <AboutMe/>
                <Spacer y={1.5}/>
                <SocialLinks/>
                <Spacer y={1.5}/>
                <WorkExperience/>
            </Container>
        </>
    );
};

export default Home;
