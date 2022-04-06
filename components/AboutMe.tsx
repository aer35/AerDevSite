import { Avatar, Container, Spacer } from "@nextui-org/react";

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
      src="images/AM_Pic_1.png"
      css={{ size: "$72" }}
      zoomed
    />
    {/* TODO Choose new image */}

    <h1 style={{ margin: "0" }}>Aaron Mechanic</h1>
    <h3>B.S. Computer Science - CUNY Queens college 2021</h3>

    {/* Name and subtitle. Maybe change some fonts and stuff. */}

    {/* Maybe a few button links here like on the old site? */}

    <div style={{ width: "60%" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>

    <Spacer y={1} />
  </Container>
);

export default AboutMe;
