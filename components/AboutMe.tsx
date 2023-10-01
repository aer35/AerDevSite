import {Avatar, Card, Container, Grid, Spacer, Text} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/About.module.scss";
import {ReadableByteStreamController} from "stream/web";

const AboutMe = () => (
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
            {`Aaron Mechanic`}
        </Text>
        <Text h3>
            {`Software Developer II - `}
            {
                <a
                    className={styles.springLink}
                    href="https://springhealth.com/"
                    target={"_blank"}
                    rel="noreferrer noopener"
                >
                    {`Spring Health`}
                </a>
            }
        </Text>
        <Text h6>{`B.S.Computer Science - CUNY Queens college 2021`}</Text>
        <Spacer/>
        <Container className={styles.bio}>
            <Card bordered>
                <Text
                    className={styles.bioText}>{`Hi! I'm Aaron, a software engineer from New York City and I've been a computer fanatic my whole life. I fell in love with computers ever since my first, an iMac G3. I decided to become a programmer because I love identifying and solving complex problems, and I love learning new things. Every week 300,000 new Javascript frameworks are released and I learn them all. Haha just kidding.`}
                </Text>
                <Spacer/>
                <Text className={styles.bioText}>{`In 2021, at the height of the pandemic, I graduated from CUNY Queens
                    college with a Bachelors in Computer Science. In June 2022 I started as a Software Development
                    Intern for Spring Health. In September I was hired full time as a Software Developer I. Currently, I
                    am employed by Spring Health as a Software Developer 2.`}</Text>
            </Card>
        </Container>
        <Spacer y={1.5}/>
        <Container className={styles.bio}>
            <Card bordered>
                <Container className={styles.history}>
                    <Text h3>Work History</Text>
                    <ul>
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
        <Spacer y={3}/>
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
    </Container>
);

export default AboutMe;
