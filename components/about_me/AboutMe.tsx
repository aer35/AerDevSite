import {Avatar, Container, Spacer, Text} from "@nextui-org/react";
import styles from "../../styles/About.module.scss";
import constants from "../constants"
import Bio from "./Bio";

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
            <Spacer y={2}/>
            <Bio/>
        </Container>
    );
}


export default AboutMe;
