import {Card, Container, Text} from "@nextui-org/react";
import styles from "../../styles/About.module.scss";
import ProjectCard from "./ProjectCard";
import constants from "../constants";

const LatestProject = () => {
    return (
        <Container className={styles.LatestProject}>
            <Card bordered>
                <Container className={styles.heading}>
                    <Text h2>{`Check out my latest Project!`}</Text>
                </Container>
                {/* If you ever want to display more than one project, break this out into its own component and redo the CSS */}
                <Container className={styles.project}>
                    <ProjectCard projName={constants.projects[0].name} description={constants.projects[0].description}
                                 linkSRC={constants.projects[0].link} imgSRC={constants.projects[0].imageSRC}/>
                </Container>
            </Card>
        </Container>
    );
}

export default LatestProject;