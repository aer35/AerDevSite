import {Card, Container, Image, Text} from "@nextui-org/react";
import styles from "../styles/Projects.module.scss";

interface projProps {
    projName: string;
    linkSRC?: string;
    description?: string;
    imgSRC?: string;
}

const lorem: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit In at dui mollis, dignissim elit vel, maximus metus. In est ex, rutrum non nunc at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean feugiat massa vel placerat pharetra.";

const placeholderIMG: string =
    "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";

const ProjectCard = ({
                         projName,
                         linkSRC = "#",
                         description = lorem,
                         imgSRC = placeholderIMG,
                     }: projProps) => {
    return (
        <>
            <Card bordered hoverable className={styles.card}>
                <Container
                    className={styles.card_main}
                    display="flex"
                    direction="column"
                    justify="space-around"
                >
                    <Container className={styles.card_half1}>
                        <Container className={styles.card_title}>
                            <Text h2>
                                <a href={linkSRC} target="_blank" rel="noreferrer noopener">
                                    {projName}
                                </a>
                            </Text>
                        </Container>
                        <Container className={styles.card_desc}>
                            <Text h5>{description}</Text>
                        </Container>
                    </Container>
                    <Container className={styles.card_half2}>
                        <Image
                            className={styles.card_img}
                            autoResize={true}
                            showSkeleton={true}
                            src={imgSRC}
                            loading="lazy"
                            alt={''}
                        />
                    </Container>
                </Container>
            </Card>
        </>
    );
};

export default ProjectCard;
