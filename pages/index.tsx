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
                <title>Welcome!</title>
                <meta name="darkreader-lock"/>
            </Head>
            <Container style={{padding: "120px 0 90px 0"}}>
                <AboutMe/>
                <Spacer y={3}/>
                <SocialLinks/>
                <Spacer y={3}/>
                <WorkExperience/>
            </Container>
        </>
    );
};

export default Home;
