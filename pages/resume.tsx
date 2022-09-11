import { Card, Collapse, Container, Spacer, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Resume.module.scss";

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <Container
        display="flex"
        justify="center"
        alignContent="flex-start"
        className={styles.pageContainer}
      >
        <Container className={styles.resumeFrameContainer}>
          <Collapse
            bordered
            title="View Resume"
            subtitle="Click here to view the resume"
          >
            <iframe
              src="https://registry.jsonresume.org/aer35"
              loading="lazy"
              className={styles.resumeFrame}
            />
          </Collapse>
        </Container>
        <Spacer />
        <Container className={styles.downloadText}>
          <Card bordered clickable>
            <a
              href="https://github.com/aer35/AerDevSite/releases/latest"
              target="_blank"
              rel="noreferrer noopener"
            >
              Click here to download a PDF version of the resume
            </a>
          </Card>
        </Container>
        <Spacer />
        <Container>
          <Card className={styles.lnguagesContainer} bordered>
            <Text h3 className={styles.languagesTitle}>
              Languages and Technologies
            </Text>
            <Spacer />
            <Text className={styles.languagesText}>TODO</Text>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default ResumePage;
