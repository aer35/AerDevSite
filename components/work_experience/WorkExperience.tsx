import styles from "../../styles/About.module.scss";
import {Card, Container, Grid, Text} from "@nextui-org/react";


const WorkExperience = () => {

    return <Container className={styles.bio}>
        <Card bordered>
            <Container className={styles.history}>
                <Text h3>{`Professional Experience`}</Text>
                {/* Break this out into reusable components */}
                <ul>
                    <li>
                        <Container className={styles.jobDetails}>
                            <Text h4>{`Spring Health`}</Text>
                            <ul>
                                <li>
                                    <Grid className={styles.jobItem}>
                                        <Text h5>{`Software Developer 2`}</Text>
                                        <Container className={styles.jobDate}>
                                            <Text h5>{`June 2023 - Current`}</Text>
                                        </Container>
                                    </Grid>
                                </li>
                                <li>
                                    <Grid className={styles.jobItem}>
                                        <Text h6>{`Software Developer 1`}</Text>
                                        <Container className={styles.jobDate}>
                                            <Text h6>{`August 2022 - June 2023`}</Text>
                                        </Container>
                                    </Grid>
                                </li>
                                <li>
                                    <Grid className={styles.jobItem}>
                                        <Text h6>{`Software Development Intern`}</Text>
                                        <Container className={styles.jobDate}>
                                            <Text h6>{`June 2022 - August 2022`}</Text>
                                        </Container>
                                    </Grid>
                                </li>
                            </ul>
                        </Container>
                    </li>
                    <li>
                        <Grid className={styles.jobItem}>
                            <Container className={styles.jobDetails}>
                                <Text>{`Hello World`}</Text>
                            </Container>
                            <Container className={styles.jobDate}>
                                <Text>{`January 1900`}</Text>
                            </Container>
                        </Grid>
                    </li>
                </ul>
            </Container>
        </Card>
    </Container>
}

export default WorkExperience;