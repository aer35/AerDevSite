import { Avatar, Container } from "@nextui-org/react";

const AboutMe = () => (
  <Container className="aboutMe" display="flex" justify="center">
    <Avatar
      className="avatar"
      src="images/AM_Pic_1.png"
      css={{ size: "$72" }}
      zoomed
    />
  </Container>
);

export default AboutMe;
