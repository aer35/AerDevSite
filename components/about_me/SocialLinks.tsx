import styles from "../../styles/About.module.scss";
import constants from "../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container} from "@nextui-org/react";

const SocialLinks = () => {
    return <Container
        className={styles.social_links}
        display="flex"
        justify="space-evenly"
        alignItems="center"
        alignContent="center"
    >
        {Object.values(constants.socialLinks).map((site) => {
            return <a
                href={site.link}
                target="_blank"
                rel="noreferrer noopener"
                key={site.key}
            >
                <FontAwesomeIcon size="4x" icon={site.icon}/>
            </a>
        })}
    </Container>
}

export default SocialLinks;