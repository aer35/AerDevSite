import { Avatar, Container, Spacer, Text, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => (
  <Container
    className="aboutMe"
    display="flex"
    justify="center"
    direction="column"
    alignItems="center"
    alignContent="center"
  >
    <Avatar
      className="avatar"
      src="images/AM_Pic_3.png"
      css={{ size: "$72" }}
      zoomed
    />
    {/* TODO Choose new image */}
    <Spacer y={1.5} />
    <Container
      className="social_links"
      display="flex"
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <a
        href="https://github.com/aer35"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon size="4x" icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/aaronmechanic/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon size="4x" icon={faLinkedin} />
      </a>
      <a
        href="https://angel.co/u/aaron-mechanic"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon size="4x" icon={faAngellist} />
      </a>
    </Container>
    <Spacer />
    <Text
      h1
      css={{
        textGradient: "30deg, var(--primary) -20%, $red500 150%",
      }}
      weight="extrabold"
    >
      Aaron Mechanic
    </Text>
    <Text h3>B.S. Computer Science - CUNY Queens college 2021</Text>
    <Spacer />
    <Container className="aboutMe">
      <Text>
        Hi! I'm Aaron, a software engineer from in New York City and I've been a
        computer fanatic my whole life. I fell in love with computers ever since
        my first, an iMac G3. I love learning new things and improving my skills
        which is why I decided to become a programmer! Every week 300000 new
        Javascript frameworks are released and I learn them all. Haha just
        kidding. Recently I've been working a lot with React Typescript, nextJS,
        Node, and Swift.
      </Text>
    </Container>
    {/* Codify the text and move the CSS for social links and about me to a module */}
    <div style={{ height: "500px" }} />
  </Container>
);

export default AboutMe;
