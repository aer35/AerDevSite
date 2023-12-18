import {Avatar, Card, Container, Grid, Spacer, Text} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/About.module.scss";
import constants from "../constants"

const AboutMe = () => {
    const formatDegree = constants.education.degree + ` - ` + constants.education.schoolName + ` ` + constants.education.gradYear;
    const socialLinks = () => {
        for (const key in constants.socialLinks) {

        }
    }

    return (
        <Container
            className={styles.aboutMe}
            display="flex"
            justify="center"
            direction="column"
            alignItems="center"
            alignContent="center"
        >
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
            >
                {constants.me.fname + constants.me.lname}
            </Text>
            {constants.currentJob.positionTitle &&
                <Text h3>
                    {constants.currentJob.positionTitle + ` - ` + constants.currentJob.companyName}
                </Text>
            }
            <Text h6>{formatDegree}</Text>
            <Spacer/>
            <Container className={styles.bio}>
                <Card bordered>
                    <Text
                        className={styles.bioText}>
                        <p>{`Hi! I'm Aaron, a software engineer from New York City and I've been a computer fanatic my whole life. I fell in love with computers ever since my first, the iconic `}<a
                            href={"https://en.wikipedia.org/wiki/IMac_G3"} target={"_blank"} rel={"noreferrer"}>iMac
                            G3</a>{`. Becoming a programmer just made sense because I love building things, identifying and solving complex problems, and learning. Every week 300,000 new Javascript frameworks are released and I learn them all. Haha just kidding. I gain an immense amount of satisfaction when something I built comes together or when I find a solution to a long standing issue. I also love helping others gain the same satisfaction which is why I am a big proponent of mob and pair programming.`}
                        </p>
                    </Text>
                </Card>
            </Container>
            <Spacer y={1.5}/>
            <Container
                className={styles.social_links}
                display="flex"
                justify="space-evenly"
                alignItems="center"
                alignContent="center"
            >
                <a
                    href="https://github.com/aer35"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon size="4x" icon={faGithub}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/aaronmechanic/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon size="4x" icon={faLinkedin}/>
                </a>
                <a
                    href="https://angel.co/u/aaron-mechanic"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon size="4x" icon={faAngellist}/>
                </a>
            </Container>
            <Spacer y={1.5}/>
            <Container className={styles.bio}>
                <Card bordered>
                    <Container className={styles.history}>
                        <Text h3>{`Work History`}</Text>
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
    )
        ;
}


export default AboutMe;
