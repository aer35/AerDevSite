import {Container, Text} from "@nextui-org/react";
import PositionItem from "./PositionItem";
import constants from "../constants";

const CompanyItem = () => {
    return (
        <Container>
            {constants.pastJobs.map((job) =>
                <>
                    <Text h4>{`${job.companyName}`}</Text>
                    <Container display={"flex"} direction={"column"} style={{padding: "2px 0 0 0"}}>
                        {job.positions.map((position) =>
                            <PositionItem position={position} key={position.key}/>
                        )}
                    </Container>
                </>
            )}
        </Container>
    );
}

export default CompanyItem