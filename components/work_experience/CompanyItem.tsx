import {Container, Grid, Text} from "@nextui-org/react";
import PositionItem from "./PositionItem";
import styles from "../../styles/About.module.scss";
import constants from "../constants";
import positionItem from "./PositionItem";


const CompanyItems = () => {
    return <Container className={styles.jobDetails}>
        {constants.pastJobs.map((job) =>
            <>
                <Text h4>{`${job.companyName}`}</Text>
                <>
                    <ul>
                        {job.positions.map((position) =>
                            <li key={position.key}>
                                <PositionItem position={position}/>
                            </li>
                        )}
                    </ul>
                </>
            </>
        )}
    </Container>
}

export default CompanyItems