import { Card, Container, Grid, Text } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";
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
        {/* These are going to take parsed info from the projects JSON grabbed from github and then display certain tags in a stylized format. I have not yet decided which projects, what information, or the design. */}

        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card bordered hoverable>
              <Text>Placeholder</Text>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable>
              <Text>Placeholder</Text>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable>
              <Text>Placeholder</Text>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable>
              <Text>Placeholder</Text>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable>
              <Text>Placeholder</Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default ProjectsPage;
