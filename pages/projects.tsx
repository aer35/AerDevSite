import { Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container
        className={styles.pageContainer}
        display="flex"
        justify="center"
      >
        {/* TODO 
        Need to write a script that calls the github GRAPHQL api for either the STARRED or PINNED repos. The script should first check if the repo belongs to me by checking my ID (or user but thats less safe). The API will return a JSON object. Maybe have the script parse the relevant info into an object? that can then be passed to the component */}

        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <ProjectCard
              projName="Fun Tracker"
              linkSRC="https://github.com/aer35/Fun-Tracker"
              description="Its fun"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <ProjectCard projName="Placeholder" />
          </Grid>
          <Grid xs={12} sm={4}>
            <ProjectCard
              projName="Placeholder"
              linkSRC="#"
              description="Lorem ipsum dolor sit amet"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <ProjectCard
              projName="Placeholder"
              linkSRC="#"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In at dui mollis, dignissim elit vel, maximus metus. In
                      est ex, rutrum non nunc at."
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <ProjectCard projName="Placeholder" linkSRC="#" />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default ProjectsPage;
