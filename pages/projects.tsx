import { Container, Grid, Loading } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.scss";
import { Octokit } from "octokit";
import { components } from "@octokit/openapi-types/types";

// static file incase I run into rate limits
import githubStars from "../githubStars.json";

const octokit = new Octokit();

type StarredData = components["schemas"]["repository"][];

const ProjectsPage: NextPage = () => {
  const [projects, setProjects] = useState<StarredData | undefined>();

  useEffect(() => {
    (async () => {
      const res = await octokit.request("GET /users/{username}/starred", {
        username: "aer35",
      });
      setProjects(res.data as StarredData);
    })();

    // setTimeout(() => {
    //   setProjects(githubStars);
    // }, 300);
  }, []);

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
        <Grid.Container gap={2} justify="center">
          {/* Use next ui loading thing */}
          {projects ? (
            projects.map((project) =>
              project.owner.id === 13008681 ? (
                <Grid xs={12} sm={4} key={`project-${project.id}`}>
                  <ProjectCard
                    projName={project.name}
                    description={project.description ?? undefined}
                    linkSRC={project.html_url}
                    imgSRC={`https://socialify.git.ci/${project.full_name}/image?description=1&font=Source%20Code%20Pro&language=1&owner=1&pattern=Charlie%20Brown&theme=Dark`}
                  />
                </Grid>
              ) : null
            )
          ) : (
            <Container display="flex" alignItems="center" justify="center">
              <Loading size="xl">Loading projects from Github.com</Loading>
            </Container>
          )}
        </Grid.Container>
      </Container>
    </>
  );
};

export default ProjectsPage;
