import styles from "../../styles/About.module.scss";
import {Card, Container, Grid, Text} from "@nextui-org/react";
import CompanyItems from "./CompanyItem";


const WorkExperience = () => {
    return <Container className={styles.bio}>
        <Card bordered>
            <Container className={styles.history}>
                <Text h3>{`Professional Experience`}</Text>
                <CompanyItems/>
            </Container>
        </Card>
    </Container>
}

export default WorkExperience;