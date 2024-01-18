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
import WorkExperience from "../work_experience/WorkExperience";

const AboutMe = () => {
    const formatDegree = `${constants.education.degree} - ${constants.education.schoolName} ${constants.education.gradYear}`;

    return (
        <Container className={styles.aboutMe}>
            <Avatar
                className={styles.avatar}
                src="images/AM_Pic_2.png"
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
        </Container>
    );
}


export default AboutMe;
