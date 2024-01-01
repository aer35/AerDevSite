import styles from "../../styles/About.module.scss";
import {Card, Collapse, Container, Text} from "@nextui-org/react";
import CompanyItem from "./CompanyItem";
import constants from "../constants";


const WorkExperience = () => {
    return (
        <Container className={styles.experience}>
            <Card bordered>
                <Container className={styles.list}>
                    <Text h3>{`Professional Experience`}</Text>
                    <CompanyItem/>
                </Container>
            </Card>
            <Container className={styles.resumeFrameContainer}>
                <Collapse
                    bordered
                    title={constants.resume.title}
                    subtitle={constants.resume.subtitle}
                >
                    <iframe
                        src={constants.resume.viewLink}
                        loading="lazy"
                        className={styles.resumeFrame}
                    />
                </Collapse>
            </Container>
            <Container className={styles.link}>
                <a
                    href={constants.resume.downloadLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {/* TODO Add PDF icon here*/}
                    {`${constants.resume.click}`}
                </a>
            </Container>
        </Container>
    );
}

export default WorkExperience;