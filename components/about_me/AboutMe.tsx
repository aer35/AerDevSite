import {Avatar, Card, Container, Grid, Spacer, Text} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/About.module.scss";
import constants from "../constants"
import SocialLinks from "./SocialLinks";
import Bio from "./Bio";

const AboutMe = () => {
    const formatDegree = `${constants.education.degree} - ${constants.education.schoolName} ${constants.education.gradYear}`;

    return (
        <Container className={styles.aboutMe}>
            <Avatar
                className={styles.avatar}
                src="images/AM_Pic_3.png"
                css={{size: "$72"}}
                zoomed
            />
            <Spacer/>
            <Text
                h1
                weight="extrabold"
                css={{
                    textGradient: "30deg, var(--primary) -20%, $red500 150%",
                }}
            >
                {`${constants.me.fname} ${constants.me.lname}`}
            </Text>
            {constants.currentJob.positionTitle &&
                <Text h3>
                    {`${constants.currentJob.positionTitle} - ${constants.currentJob.companyName}`}
                </Text>
            }
            <Text h6>{formatDegree}</Text>
            <Spacer/>
            <Bio/>
            {/* Try and remove these spacers and replace with CSS GAP */}
            <Spacer y={1.5}/>
            <SocialLinks/>
            <Spacer y={1.5}/>
            <Container className={styles.bio}>
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
        </Container>
    );
}


export default AboutMe;
