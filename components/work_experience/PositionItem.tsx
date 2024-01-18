import {Container, Grid, Text} from "@nextui-org/react";
import styles from "../../styles/About.module.scss";

type PositionType = {
    key: string,
    start: string,
    end: string
}

const PositionItem = ({position}: { position: PositionType }) => {
    return (
        <Container>
            <Grid className={styles.jobItem}>
                <Text h6>
                    {`${position.key}`}
                </Text>
                <Container className={styles.jobDate}>
                    <Text h6>{`${position.start} - ${position.end}`}</Text>
                </Container>
            </Grid>
        </Container>
    );
}

export default PositionItem