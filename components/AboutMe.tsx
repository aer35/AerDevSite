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
    <Spacer y={1} />
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

    <p style={{ width: "60%" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <Spacer y={1} />
    <div style={{ height: "500px" }} />
  </Container>
);

export default AboutMe;
