import { Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Projects.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container
        className={styles.pageContainer}
        display="flex"
        justify="center"
      >
        {/* These are going to take parsed info from the projects JSON grabbed from github and then display certain tags in a stylized format. I have not yet decided which projects, what information, or the design. Design? https://www.ybrikman.com/projects/ Dont use parsed JSON? Manual creaton of each card. */}

        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card bordered hoverable className={styles.proj}>
              <Container className={styles.proj_main} display="flex">
                <Container className={styles.proj_h1}>
                  <Image
                    className={styles.proj_img}
                    autoResize={true}
                    showSkeleton={true}
                    src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
                  />
                </Container>
                <Container className={styles.proj_h2}>
                  <Container className={styles.proj_title}>
                    <Text h2>
                      <a
                        href="https://github.com/aer35/Fun-Tracker"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Fun Tracker
                      </a>
                    </Text>
                  </Container>
                  <Container className={styles.proj_desc}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In at dui mollis, dignissim elit vel, maximus metus. In
                      est ex, rutrum non nunc at, volutpat ornare nisl.
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable className={styles.proj}>
              <Container className={styles.proj_main} display="flex">
                <Container className={styles.proj_h1}>
                  <Image
                    className={styles.proj_img}
                    autoResize={true}
                    showSkeleton={true}
                    src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
                  />
                </Container>
                <Container className={styles.proj_h2}>
                  <Container className={styles.proj_title}>
                    <Text h2>
                      <a href="#" target="_blank" rel="noreferrer noopener">
                        Placeholder
                      </a>
                    </Text>
                  </Container>
                  <Container className={styles.proj_desc}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In at dui mollis, dignissim elit vel, maximus metus. In
                      est ex, rutrum non nunc at. Orci varius natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus.
                      Aenean feugiat massa vel placerat pharetra.
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable className={styles.proj}>
              <Container className={styles.proj_main} display="flex">
                <Container className={styles.proj_h1}>
                  <Image
                    className={styles.proj_img}
                    autoResize={true}
                    showSkeleton={true}
                    src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
                  />
                </Container>
                <Container className={styles.proj_h2}>
                  <Container className={styles.proj_title}>
                    <Text h2>
                      <a href="#" target="_blank" rel="noreferrer noopener">
                        Placeholder
                      </a>
                    </Text>
                  </Container>
                  <Container className={styles.proj_desc}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In at dui mollis, dignissim elit vel, maximus metus
                      montes, nascetur ridiculu. In est ex, rutrum non nunc at,
                      volutpat ornare nisl.
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable className={styles.proj}>
              <Container className={styles.proj_main} display="flex">
                <Container className={styles.proj_h1}>
                  <Image
                    className={styles.proj_img}
                    autoResize={true}
                    showSkeleton={true}
                    src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
                  />
                </Container>
                <Container className={styles.proj_h2}>
                  <Container className={styles.proj_title}>
                    <Text h2>
                      <a href="#" target="_blank" rel="noreferrer noopener">
                        Placeholder
                      </a>
                    </Text>
                  </Container>
                  <Container className={styles.proj_desc}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In at dui mollis, dignissim elit vel, maximus metus. In
                      est ex, rutrum non nunc at, volutpat ornare nisl. Orci
                      varius natoque penatibus et giat massa vel placerat
                      pharetra.
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card bordered hoverable className={styles.proj}>
              <Container className={styles.proj_main} display="flex">
                <Container className={styles.proj_h1}>
                  <Image
                    className={styles.proj_img}
                    autoResize={true}
                    showSkeleton={true}
                    src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
                  />
                </Container>
                <Container className={styles.proj_h2}>
                  <Container className={styles.proj_title}>
                    <Text h2>
                      <a href="#" target="_blank" rel="noreferrer noopener">
                        Placeholder
                      </a>
                    </Text>
                  </Container>
                  <Container className={styles.proj_desc}>
                    <Text>
                      Lorem ipsum dolor sit amet, elit. In at dui mollis,
                      dignissim elit vel, maximus metus. In est ex, rutrum non
                      nunc at, volutpat ornare nisl. Orci varius natoque
                      penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Aenean feugiat massa vel placerat pharetra.
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default ProjectsPage;
