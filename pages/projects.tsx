import {
    Container,
    Grid,
    Loading,
    Text,
    Image,
    Spacer,
} from "@nextui-org/react";
import {NextPage} from "next";
import Head from "next/head";
import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.scss";
import {Octokit} from "octokit";
import {components} from "@octokit/openapi-types/types";
import useSWR from "swr";
import {OctokitResponse} from "@octokit/types";
import {toast} from "react-toastify";

const octokit = new Octokit();

type StarredData = components["schemas"]["repository"][];

const after = async <R, T extends (...args: any) => Promise<R>>(
    delay: number,
    fn: T
): Promise<R> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn().then(resolve).catch(reject);
        }, delay);
    });
};

const ProjectsPage: NextPage = () => {
    const {data: _data, error} = useSWR(
        {
            method: "GET",
            url: "/users/{username}/starred",
            username: "aer35",
        },
        (...args) => after(30, () => octokit.request(...args)),
        {
            errorRetryCount: 0,
        }
    );
    const data = _data as OctokitResponse<StarredData, 200> | undefined;
    const projects = data?.data;

    useEffect(() => {
        if (error) {
            console.log(error);
            toast.error(
                "Ahhhhhhhh. If this issue persists please hit the contact button and call the dev mean names.",
                {
                    position: toast.POSITION.BOTTOM_RIGHT,
                }
            );
        }
    }, [error]);

    return (
        <>
            <Head>
                <title>{`Projects`}</title>
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
                    ) : error ? (
                        <Container
                            display="flex"
                            alignItems="center"
                            alignContent="center"
                            direction="column"
                        >
                            <Image
                                src="https://media0.giphy.com/media/RfvBXK1m8Kcdq/giphy.gif?cid=790b761139d63077a4ed796e67df4ec69d56a40764754412&rid=giphy.gif&ct=g"
                                loading="lazy"
                                alt={''}
                            />
                            <Spacer/>
                            <Text h2 color="error">
                                {`Something went wrong. Don't blame me.`}
                            </Text>
                        </Container>
                    ) : (
                        <Container display="flex" alignItems="center" justify="center">
                            <Loading size="xl">{`Loading projects from Github.com`}</Loading>
                        </Container>
                    )}
                </Grid.Container>
            </Container>
        </>
    );
};

export default ProjectsPage;
