import { Card, Container, Image, Text } from "@nextui-org/react";
import styles from "../styles/Projects.module.scss";

// TODO:
// Let the componenent take variables like links, descriptions, images, etc....

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
      <Card bordered hoverable className={styles.proj}>
        <Container className={styles.proj_main} display="flex">
          <Container className={styles.proj_h1}>
            <Image
              className={styles.proj_img}
              autoResize={true}
              showSkeleton={true}
              src={imgSRC}
            />
          </Container>
          <Container className={styles.proj_h2}>
            <Container className={styles.proj_title}>
              <Text h2>
                <a href={linkSRC} target="_blank" rel="noreferrer noopener">
                  {projName}
                </a>
              </Text>
            </Container>
            <Container className={styles.proj_desc}>
              <Text>{description}</Text>
            </Container>
          </Container>
        </Container>
      </Card>
    </>
  );
};

export default ProjectCard;
